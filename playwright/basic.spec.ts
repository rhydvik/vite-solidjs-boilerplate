import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page
    .getByText('This is a typescript component OfficesCheck this')
    .click();
  await page.getByRole('button').first().click();
  await page.getByRole('button').first().click();
  await page.getByText('This is a typescript component').click();
  await page.getByRole('button', { name: 'Check this' }).click();
});
