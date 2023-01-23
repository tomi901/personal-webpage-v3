import { expect, test } from '@playwright/test';

test('Has main element', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('main')).toBeVisible();
});

test('Has files', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(".files-container")).not.toBeEmpty();
});
