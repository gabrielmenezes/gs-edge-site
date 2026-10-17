const { test } = require('node:test');
const assert = require('node:assert/strict');
const load = require('./helpers/load-typescript.cjs');
const { getPostBySlug, getPostSlugs } = load('lib/blog.ts');
test('rejects traversal, encoded traversal and invalid languages', () => {
  for (const slug of ['../../README', '../README', '%2e%2e%2fREADME', '/etc/passwd', '..\\README', '']) assert.equal(getPostBySlug(slug), null);
  assert.equal(getPostBySlug(getPostSlugs()[0], '../../README'), null);
});
test('still reads every published article in both supported languages', () => {
  for (const slug of getPostSlugs()) for (const lang of ['pt', 'en']) {
    const post = getPostBySlug(slug, lang);
    assert.ok(post && post.content.length > 0);
    assert.equal(post.slug, slug);
  }
  assert.equal(getPostBySlug('unknown-article'), null);
});

const { GET } = load('app/api/posts/route.ts');

test('public API rejects path traversal and invalid language', async () => {
  assert.equal((await GET(new Request('https://example.test/api/posts?slug=../../README'))).status, 404);
  assert.equal((await GET(new Request('https://example.test/api/posts?lang=invalid'))).status, 400);
  assert.equal((await GET(new Request('https://example.test/api/posts?slug='))).status, 404);
});
test('public listing returns summaries and article details retain content', async () => {
  const listing = await (await GET(new Request('https://example.test/api/posts'))).json();
  assert.equal(listing.length, getPostSlugs().length);
  assert.ok(listing.every(post => !('content' in post)));
  const detail = await GET(new Request(`https://example.test/api/posts?slug=${listing[0].slug}`));
  assert.equal(detail.status, 200);
  assert.ok((await detail.json()).content.length > 0);
});
