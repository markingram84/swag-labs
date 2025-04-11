import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { ProductsPage } from "../page-objects/ProductsPage"
import { userDetails } from "../data/userDetails"

test.skip("Locked User", async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.problemLogin(userDetails)

    const productsPage = new ProductsPage(page)
    await productsPage.onCorrectURL()
    await productsPage.checkImages()
    await page.pause()
})