import { readFileSync } from "node:fs";
import puppeteer from "puppeteer";
import { siteConfig } from "../site.config.js";

// Renders the site-wide Open Graph image (1200x630) over the blog's photo.
// Run locally with `yarn og` and commit the PNG — it is not part of the build,
// so CI never needs CJK fonts installed. Per-language text comes from
// siteConfig.ogImage; the background photo is res/og-photo.jpg.

const { ogImage } = siteConfig;
const FONT =
  "Inter, 'Helvetica Neue', 'PingFang TC', 'Noto Sans CJK TC', sans-serif";
const GREEN = "#78b13f";

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const photo = readFileSync("./res/og-photo.jpg").toString("base64");
const subtitle = ogImage.subtitle.map(escapeHtml).join("<br>");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1200px;height:630px;overflow:hidden;font-family:${FONT}}
  .card{position:relative;width:1200px;height:630px;background:#17191b}
  .photo{position:absolute;inset:0;background:url('data:image/jpeg;base64,${photo}') center bottom/cover}
  .scrim{position:absolute;inset:0;background:linear-gradient(100deg,
    rgba(12,14,16,0.95) 0%, rgba(12,14,16,0.86) 32%,
    rgba(12,14,16,0.45) 58%, rgba(12,14,16,0.20) 100%)}
  .vignette{position:absolute;inset:0;background:linear-gradient(0deg,
    rgba(12,14,16,0.55) 0%, rgba(12,14,16,0) 42%)}
  .bar{position:absolute;left:0;top:0;width:12px;height:630px;background:${GREEN}}
  .content{position:absolute;left:80px;top:150px;right:500px}
  .kicker{color:${GREEN};font-size:26px;font-weight:700;letter-spacing:3px;
    text-shadow:0 1px 10px rgba(0,0,0,.7)}
  .title{color:#fff;font-size:${ogImage.titleSize}px;font-weight:800;margin-top:42px;
    white-space:nowrap;text-shadow:0 2px 26px rgba(0,0,0,.65)}
  .rule{width:132px;height:7px;border-radius:3px;background:${GREEN};margin:24px 0 30px}
  .subtitle{color:#e6eaee;font-size:35px;font-weight:500;line-height:1.28;
    text-shadow:0 1px 14px rgba(0,0,0,.75)}
  .footer{position:absolute;left:80px;bottom:64px;color:${GREEN};font-size:27px;
    font-weight:600;text-shadow:0 1px 12px rgba(0,0,0,.85)}
</style></head><body>
  <div class="card">
    <div class="photo"></div>
    <div class="scrim"></div>
    <div class="vignette"></div>
    <div class="bar"></div>
    <div class="content">
      <div class="kicker">${escapeHtml(ogImage.kicker)}</div>
      <div class="title">${escapeHtml(ogImage.title)}</div>
      <div class="rule"></div>
      <div class="subtitle">${subtitle}</div>
    </div>
    <div class="footer">${escapeHtml(ogImage.footer)}</div>
  </div>
</body></html>`;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.screenshot({
  path: "source/images/og-image.jpg",
  type: "jpeg",
  quality: 86,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("Wrote source/images/og-image.jpg (1200x630)");
