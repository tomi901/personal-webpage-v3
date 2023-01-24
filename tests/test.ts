import { expect, test } from '@playwright/test';

test('Has main element', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('main')).toBeVisible();
});

test('Has files', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(".files-container")).not.toBeEmpty();
});

test('Invalid path returns 404', async ({ page }) => {
	await page.goto('/test-this-page-should-definitively-not-exist');
	await expect(page.getByText(/Error 404/)).toBeVisible();
});

test("/tomas_rinaldi.html page shouldn't return 404", async ({ page }) => {
	await page.goto('/tomas_rinaldi.html');
	await expect(page.getByText(/Error 404/)).not.toBeVisible();
});
