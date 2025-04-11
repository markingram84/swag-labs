import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { userDetails } from "../data/userDetails"

test.skip("Locked User", async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.failedLogin(userDetails)
})