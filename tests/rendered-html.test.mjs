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
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/altcrz\.se/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
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
