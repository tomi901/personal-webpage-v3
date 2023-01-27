import {expect, test, type Page } from '@playwright/test';

test.describe("Navigation basic tests", () => {
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
});

test.describe("Window tests", async () => {
	
	async function startWithDefaultWindow(page: Page) {
		await page.goto("/");
		return await openWindowWithDefaultFile(page);
	}
	
	async function openWindowWithDefaultFile(page: Page) {
		const file = page.locator(".file").first();
		await file.click();
		return page.locator(".window");
	}

	test("Can open window when clicking a file", async ({ page }) => {
		await page.goto("/");
		await expect(page.locator(".window")).not.toBeVisible();

		await openWindowWithDefaultFile(page);

		await expect(page.locator(".window")).toBeVisible();
	});

	test("Can close window", async ({ page }) => {
		const window = await startWithDefaultWindow(page);

		await expect(window).toBeVisible();

		const closeButton = window.locator("button.close-btn");
		await expect(closeButton).toBeVisible();
		await closeButton.click();

		await expect(window).not.toBeVisible();
	});

	test("Maximize toggle works correctly", async ({ page }) => {
		const window = await startWithDefaultWindow(page);
		const maximizedClass = /maximized/;
		
		await expect(window).not.toHaveClass(maximizedClass);

		const maximizeButton = window.locator("button.maximize-btn");
		await expect(maximizeButton).toBeVisible();
		
		await maximizeButton.click();
		await expect(window).toHaveClass(maximizedClass);
		
		await maximizeButton.click();
		await expect(window).not.toHaveClass(maximizedClass);
	});
});
