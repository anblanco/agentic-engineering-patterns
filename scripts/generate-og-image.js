#!/usr/bin/env node
/**
 * Generate an Open Graph preview image (1200×630) from the title slide.
 * Uses Playwright to screenshot the first slide against the running dev server.
 *
 * Usage: node scripts/generate-og-image.js
 * Requires: npm start running on port 3000
 */

const { chromium } = require('playwright');
const path = require('path');

const OUTPUT = path.join(__dirname, '..', 'images', 'og-preview.png');
const URL = 'http://localhost:3000/#/1';
const WIDTH = 1200;
const HEIGHT = 630;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });

  await page.goto(URL, { waitUntil: 'networkidle' });

  // Hide UI chrome that shouldn't appear in the OG image
  await page.evaluate(() => {
    const selectors = ['.nav-dots', '.notes-toggle', '.kbd-hint', '.debug-toggle', '.debug-panel'];
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.style.display = 'none';
    });
  });

  await page.screenshot({ path: OUTPUT, type: 'png' });
  await browser.close();

  console.log(`OG image saved to ${OUTPUT}`);
})();
