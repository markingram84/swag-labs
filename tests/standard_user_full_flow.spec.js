import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { ProductsPage } from "../page-objects/ProductsPage"
import { BasketPage } from "../page-objects/BasketPage"
import { CustomerDetails } from "../page-objects/CustomerDetails"
import { CheckoutPage } from "../page-objects/CheckoutPage"
import { userDetails } from "../data/userDetails"

test("Standard User Full Flow", async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login(userDetails)
    await page.pause()

    const productsPage = new ProductsPage(page)
    await productsPage.onCorrectURL()
    await productsPage.sortByZToA()
    await productsPage.addProductsToBasket()
    await productsPage.goToBasket()
    await page.pause()

    const basketPage = new BasketPage(page)
    await basketPage.onCorrectURL()
    await basketPage.checkAllProductsAreInBasket()
    await basketPage.removeOneProduct()
    await basketPage.continueToCustomerDetails()
    await page.pause()

    const customerDetails = new CustomerDetails(page)
    await customerDetails.onCorrectURL()
    await customerDetails.fillDetails(userDetails)
    await customerDetails.contineToPayment()
    await page.pause()

    const checkoutPage = new CheckoutPage(page)
    await checkoutPage.onCorrectURL()
    await checkoutPage.completeOrder()
    await checkoutPage.goBackToHomeScreen()

})