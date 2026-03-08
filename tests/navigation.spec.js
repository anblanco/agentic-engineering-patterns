// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Slide Deck', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all slides and first slide is visible', async ({ page }) => {
    const slides = page.locator('.slide');
    await expect(slides).toHaveCount(14);

    const firstSlide = slides.nth(0);
    await expect(firstSlide).toHaveClass(/active/);
    await expect(firstSlide.locator('.slide-title')).toContainText('Agentic Engineering Patterns');
  });

  test('renders nav dots matching slide count', async ({ page }) => {
    const dots = page.locator('.nav-dot');
    await expect(dots).toHaveCount(14);
    await expect(dots.nth(0)).toHaveClass(/active/);
  });

  test('arrow right navigates to next slide', async ({ page }) => {
    await page.keyboard.press('ArrowRight');

    const slides = page.locator('.slide');
    await expect(slides.nth(1)).toHaveClass(/active/);
    await expect(slides.nth(0)).not.toHaveClass(/active/);

    // Dot updates too
    const dots = page.locator('.nav-dot');
    await expect(dots.nth(1)).toHaveClass(/active/);
    await expect(dots.nth(0)).not.toHaveClass(/active/);
  });

  test('arrow left navigates to previous slide', async ({ page }) => {
    // Go forward first
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('.slide').nth(1)).toHaveClass(/active/);

    // Go back
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('.slide').nth(0)).toHaveClass(/active/);
  });

  test('clicking a nav dot jumps to that slide', async ({ page }) => {
    const dots = page.locator('.nav-dot');
    await dots.nth(2).click();

    await expect(page.locator('.slide').nth(2)).toHaveClass(/active/);
    await expect(dots.nth(2)).toHaveClass(/active/);
  });

  test('notes toggle shows and hides speaker notes', async ({ page }) => {
    const notesBar = page.locator('.notes-bar');
    const toggle = page.locator('.notes-toggle');

    // Notes start hidden
    await expect(notesBar).not.toHaveClass(/open/);

    // Click to open
    await toggle.click();
    await expect(notesBar).toHaveClass(/open/);
    await expect(toggle).toHaveClass(/active/);

    // Notes content is populated
    const content = page.locator('.notes-content');
    await expect(content).not.toBeEmpty();

    // Click to close
    await toggle.click();
    await expect(notesBar).not.toHaveClass(/open/);
  });

  test('N key toggles notes', async ({ page }) => {
    const notesBar = page.locator('.notes-bar');

    await page.keyboard.press('n');
    await expect(notesBar).toHaveClass(/open/);

    await page.keyboard.press('n');
    await expect(notesBar).not.toHaveClass(/open/);
  });

  test('URLs in speaker notes are clickable links', async ({ page }) => {
    // Navigate to the augmented LLM slide (has a URL in notes)
    const dots = page.locator('.nav-dot');
    await dots.nth(3).click();

    // Open notes
    await page.keyboard.press('n');
    const notesContent = page.locator('.notes-content');
    const link = notesContent.locator('a[href*="anthropic.com"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  });

  test('hash URL updates on navigation', async ({ page }) => {
    // Use dot navigation to skip step reveals
    const dots = page.locator('.nav-dot');
    await dots.nth(1).click();
    await expect(page).toHaveURL(/#\/2$/);

    await dots.nth(2).click();
    await expect(page).toHaveURL(/#\/3$/);
  });

  test('does not go past first or last slide', async ({ page }) => {
    // Press left on first slide — should stay
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('.slide').nth(0)).toHaveClass(/active/);

    // Go to last slide (slide 0 -> 1, then 3 steps on augmented LLM, then 1->2, 2->3, 3->4)
    const dots = page.locator('.nav-dot');
    await dots.nth(13).click();
    await expect(page.locator('.slide').nth(13)).toHaveClass(/active/);

    // Press right on last slide — should stay
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('.slide').nth(13)).toHaveClass(/active/);
  });

  test('augmented LLM slide reveals steps before advancing', async ({ page }) => {
    // Navigate to slide 4 (the augmented LLM slide, index 3)
    const dots = page.locator('.nav-dot');
    await dots.nth(3).click();
    const slides = page.locator('.slide');
    await expect(slides.nth(3)).toHaveClass(/active/);

    // Steps should start hidden
    const step1 = slides.nth(3).locator('.step-1');
    const step2 = slides.nth(3).locator('.step-2');
    const step3 = slides.nth(3).locator('.step-3');
    await expect(step1).not.toHaveClass(/visible/);
    await expect(step2).not.toHaveClass(/visible/);
    await expect(step3).not.toHaveClass(/visible/);

    // Press right: step 1 reveals
    await page.keyboard.press('ArrowRight');
    await expect(step1).toHaveClass(/visible/);
    await expect(step2).not.toHaveClass(/visible/);
    await expect(step3).not.toHaveClass(/visible/);
    // Still on same slide
    await expect(slides.nth(3)).toHaveClass(/active/);

    // Press right: step 2 reveals
    await page.keyboard.press('ArrowRight');
    await expect(step2).toHaveClass(/visible/);
    await expect(step3).not.toHaveClass(/visible/);

    // Press right: step 3 reveals
    await page.keyboard.press('ArrowRight');
    await expect(step3).toHaveClass(/visible/);
    // Still on same slide
    await expect(slides.nth(3)).toHaveClass(/active/);

    // Press right again: now advances to slide 5
    await page.keyboard.press('ArrowRight');
    await expect(slides.nth(4)).toHaveClass(/active/);

    // Go back: should return to slide 4 at step 0 (steps hidden)
    await page.keyboard.press('ArrowLeft');
    await expect(slides.nth(3)).toHaveClass(/active/);
    await expect(step1).not.toHaveClass(/visible/);
  });
});
