import { expect, test, type Page } from '@playwright/test';

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

		const wasMaximized = await window.getAttribute("class").then(c => !!c && maximizedClass.test(c));

		const maximizeButton = window.locator("button.maximize-btn");
		await expect(maximizeButton).toBeVisible();
		
		await maximizeButton.click();
		await checkMaximizedClass(!wasMaximized);
		
		await maximizeButton.click();
		await checkMaximizedClass(wasMaximized);

		function checkMaximizedClass(shouldHaveIt: boolean) {
			return shouldHaveIt ? expect(window).toHaveClass(maximizedClass) : expect(window).not.toHaveClass(maximizedClass);
		}
	});
});
