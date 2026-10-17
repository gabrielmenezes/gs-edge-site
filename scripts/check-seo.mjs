import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const appDirectory = new URL('../.next/server/app/', import.meta.url);
const routes = [
  '/', '/projetos', '/projetos/gsmoney', '/projetos/game-de-datacenters', '/blog',
  '/blog/era-jobs-na-apple', '/blog/anatomia-de-um-ataque-web',
  '/blog/conectando-lojas-com-estrutura-sd-wan', '/blog/ia-no-desenvolvimento-riscos-seguranca',
];
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const meta = (html, name) => {
  const tag = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => match[0]).find(tag => attribute(tag, 'name') === name || attribute(tag, 'property') === name);
  return tag ? attribute(tag, 'content') : undefined;
};
let origin;
for (const route of routes) {
  const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const html = await readFile(new URL(filename, appDirectory), 'utf8');
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/g)].map(match => match[0]).find(tag => attribute(tag, 'rel') === 'canonical');
  assert.ok(canonicalTag, `${route}: missing canonical`);
  const canonical = new URL(attribute(canonicalTag, 'href'));
  origin ??= canonical.origin;
  assert.equal(canonical.origin, origin, `${route}: inconsistent origin`);
  assert.equal(canonical.pathname, route, `${route}: wrong canonical`);
  assert.ok(html.match(/<title>[^<]+<\/title>/), `${route}: missing title`);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${route}: expected one primary heading`);
  assert.ok(meta(html, 'description'), `${route}: missing description`);
  assert.equal(new URL(meta(html, 'og:url')).href, canonical.href, `${route}: wrong og:url`);
  assert.equal(meta(html, 'og:title'), meta(html, 'twitter:title'), `${route}: inconsistent social titles`);
  assert.ok(meta(html, 'robots'), `${route}: missing indexing policy`);
  for (const name of ['og:image', 'twitter:image']) assert.ok(new URL(meta(html, name)).protocol.startsWith('http'), `${route}: invalid ${name}`);
  if (route.startsWith('/blog/')) {
    assert.equal(meta(html, 'og:type'), 'article');
    assert.ok(new URL(meta(html, 'og:image')).pathname.startsWith('/images/blog/'), `${route}: article image overridden`);
    assert.equal(meta(html, 'og:image'), meta(html, 'twitter:image'), `${route}: social image mismatch`);
  }
  if (route.startsWith('/projetos/')) {
    assert.equal(new URL(meta(html, 'og:image')).pathname, `${route}/opengraph-image`, `${route}: project image overridden`);
  }
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert.ok(schemas.length, `${route}: missing JSON-LD`);
  if (route.startsWith('/blog/')) assert.ok(schemas.some(schema => schema['@type'] === 'BlogPosting'), `${route}: missing article schema`);
  if (route !== '/') assert.ok(schemas.some(schema => schema['@type'] === 'BreadcrumbList'), `${route}: missing breadcrumbs`);
}
const sitemap = await readFile(new URL('sitemap.xml.body', appDirectory), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert.deepEqual(sitemapUrls.sort(), [...routes].sort(), 'Sitemap must contain only the current canonical pages');
const robots = await readFile(new URL('robots.txt.body', appDirectory), 'utf8');
if (!robots.includes('Disallow: /\n')) assert.ok(robots.includes(`${origin}/sitemap.xml`), 'Missing sitemap in robots.txt');
const notFound = await readFile(new URL('_not-found.html', appDirectory), 'utf8');
assert.ok(meta(notFound, 'robots')?.includes('noindex'), '404 pages must request no indexing');
const manifest = JSON.parse(await readFile(new URL('../.next/routes-manifest.json', import.meta.url), 'utf8'));
for (const [source, destination] of [['/products', '/projetos'], ['/products/gsmoney', '/projetos/gsmoney'], ['/products/gsedge-dc-game', '/projetos/game-de-datacenters']]) {
  assert.ok(manifest.redirects.some(rule => rule.source === source && rule.destination === destination && rule.statusCode === 308), `Missing permanent redirect: ${source}`);
}
console.log(`SEO verificado no HTML de produção: ${routes.length} páginas, metadados sociais, JSON-LD, sitemap, robots e redirecionamentos.`);
