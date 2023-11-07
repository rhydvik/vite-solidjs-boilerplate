import { test, expect } from '@playwright/test';

test.describe('Home Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should display a welcome message', async ({ page }) => {
    const message = page.locator('text=This is a typescript component');
    await expect(message).toBeVisible({ timeout: 10000 });
  });
  //
  test('should contain a link to the offices page', async ({ page }) => {
    const link = page.locator('text=Offices');
    await expect(link).toHaveAttribute('href', '/offices');
  });

  test('should have a button that can be clicked', async ({ page }) => {
    const button = page.locator('button:has-text("Check this")');
    await expect(button).toBeVisible();
  });
});
