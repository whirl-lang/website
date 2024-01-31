import { expect, test } from "@playwright/test";

test("learn page has expected comments title", async ({ page }) => {
  await page.goto("/learn");
  await expect(page.getByRole("heading", { name: "Comments" })).toBeVisible();
});

