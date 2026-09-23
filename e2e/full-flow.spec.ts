import { test, expect } from "@playwright/test";

test("completes the full test flow from landing to results", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "myIQ" })).toBeVisible();
  await page.getByRole("link", { name: "Start Test" }).click();

  await expect(page.getByText(/Question 1 of 30/)).toBeVisible();

  for (let i = 0; i < 30; i += 1) {
    await page.getByRole("button").nth(1).click();
    if (i < 29) {
      await page.getByRole("button", { name: "Next" }).click();
    }
  }

  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText(/Your Results/)).toBeVisible();
  await expect(page.getByText(/Answer Explanations/)).toBeVisible();
});
