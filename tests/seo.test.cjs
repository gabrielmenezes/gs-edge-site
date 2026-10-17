const { test } = require('node:test');
const assert = require('node:assert/strict');
const load = require('./helpers/load-typescript.cjs');
const { pageMetadata, articleSchema, serializeJsonLd } = load('lib/seo.ts');
const { absoluteUrl } = load('lib/site.ts');

test('page-specific canonical, social titles and images stay aligned', () => {
  const metadata = pageMetadata({ title: 'GSMoney | Gabriel Soares', description: 'Organização financeira pessoal.', path: '/projetos/gsmoney', image: '/projetos/gsmoney/opengraph-image' });
  assert.equal(metadata.alternates.canonical, absoluteUrl('/projetos/gsmoney'));
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.twitter.title, metadata.title);
  assert.equal(metadata.openGraph.title, metadata.title);
  assert.deepEqual(metadata.openGraph.images, metadata.twitter.images);
  assert.equal(metadata.openGraph.images[0].url, absoluteUrl('/projetos/gsmoney/opengraph-image'));
});

test('article schema preserves known dates and never invents modification dates', () => {
  const article = { slug: 'teste', title: 'Artigo', excerpt: 'Resumo', author: 'Gabriel Soares', category: 'Tecnologia', date: '2026-10-17', image: '/images/article.jpg' };
  const schema = articleSchema(article);
  assert.equal(schema['@type'], 'BlogPosting');
  assert.equal(schema.datePublished, article.date);
  assert.equal(schema.author.name, article.author);
  assert.equal(schema.mainEntityOfPage['@id'], absoluteUrl('/blog/teste'));
  assert.ok(!('dateModified' in schema));
  assert.equal(articleSchema({ ...article, updated: '2026-10-18' }).dateModified, '2026-10-18');
});

test('JSON-LD cannot terminate its script tag through content', () => {
  const payload = { headline: '</script><script>alert(1)</script>' };
  const serialized = serializeJsonLd(payload);
  assert.ok(!serialized.includes('<'));
  assert.deepEqual(JSON.parse(serialized), payload);
});

test('preview deployments request no indexing', () => {
  const previous = process.env.VERCEL_ENV;
  try {
    process.env.VERCEL_ENV = 'preview';
    const preview = load('lib/seo.ts').pageMetadata({ title: 'Prévia', description: 'Prévia', path: '/' });
    assert.equal(preview.robots.index, false);
  } finally {
    if (previous === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = previous;
  }
});
