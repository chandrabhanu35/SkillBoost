import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders hero and nav", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "SkillBoost" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "SkillBoost" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Get Started/i })).toBeVisible();
  });
});
