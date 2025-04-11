import { expect } from "@playwright/test"

export class ProductsPage {
    constructor(page) {
        this.page = page

        this.sortDropdown = page.locator('[data-test="product-sort-container"]')
        this.productTitle = page.locator('[data-test="inventory-item-name"]')
        this.onesieAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        this.fleeceAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.backpackAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.checkoutButton = page.locator('[data-test="shopping-cart-link"]')
        this.cartNumberBadge = page.locator('[data-test="shopping-cart-badge"]')
        this.firstImage = page.locator('[data-test="item-4-img-link"]')
    }

    onCorrectURL = async (index) => {
        await this.page.waitForURL(/\/inventory/, { timeout: 3000 })
    }

    sortByZToA = async () => {
        await this.sortDropdown.waitFor()
        const firstProductBeforeSorting = await this.productTitle.allInnerTexts()
        await this.sortDropdown.selectOption("za")
        const firstProductAfterSorting = await this.productTitle.allInnerTexts()
        expect(firstProductAfterSorting).not.toEqual(firstProductBeforeSorting)
    }

    addProductsToBasket = async (index) => {
        await this.onesieAddToCart.waitFor()
        await this.onesieAddToCart.click()
        await expect(this.cartNumberBadge).toHaveText('1')
        await this.fleeceAddToCart.waitFor()
        await this.fleeceAddToCart.click()
        await expect(this.cartNumberBadge).toHaveText('2')
        await this.backpackAddToCart.waitFor()
        await this.backpackAddToCart.click()
        await expect(this.cartNumberBadge).toHaveText('3')
    }

    goToBasket = async (index) => {
        await this.checkoutButton.waitFor()
        await this.checkoutButton.click()
    }

    checkImages = async (index) => {
        await this.firstImage.waitFor()
        await this.firstImage.click()
    }
}