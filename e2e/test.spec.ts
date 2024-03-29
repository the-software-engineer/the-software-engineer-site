import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toContain('The Software Engineer Ltd.');
  expect(await page.getAttribute('a', 'href')).toBe('https://getvocal.chat');
});
