import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports a complete Swedish company website", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html[^>]*lang="sv"/i);
  assert.match(html, /ALT CRZ Solutions AB/);
  assert.match(html, /IT-tjänster för en bransch i/);
  assert.match(html, /559478-9819/);
  assert.match(html, /Norra Kustvägen 411/);
  assert.match(html, /mailto:info@altcrz\.se/);
  assert.match(html, /56\.2503° N · 12\.6607° E/);
  assert.match(html, /56\.1945° N · 14\.0842° E/);
  assert.doesNotMatch(html, />START<|KNISLINGE|visual-card/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/altcrz\.se/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("uses Jonstorp only as part of the company address", async () => {
  const [pageSource, layoutSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  const source = `${pageSource}\n${layoutSource}`;

  assert.match(pageSource, /addressLocality: "Jonstorp"/);
  assert.match(pageSource, /263 92 Jonstorp/);
  assert.equal(source.match(/\bJonstorp\b/g)?.length, 2);
});

test("includes the production assets needed by GitHub Pages", async () => {
  await Promise.all([
    access(new URL("og.png", outputRoot)),
    access(new URL("icon.png", outputRoot)),
    access(new URL("apple-touch-icon.png", outputRoot)),
    access(new URL("CNAME", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
  ]);

  const cname = await readFile(new URL("CNAME", outputRoot), "utf8");
  assert.equal(cname.trim(), "altcrz.se");
});
