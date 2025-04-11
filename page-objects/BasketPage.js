export class BasketPage {
    constructor(page) {
        this.page = page

        this.onesieRemoveFromCart = page.locator('[data-test="remove-sauce-labs-onesie"]')
        this.fleeceRemoveFromCart = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')
        this.backpackRemoveFromCart = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.checkoutButton = page.locator('[data-test="checkout"]')
    }

    onCorrectURL = async (index) => {
        await this.page.waitForURL(/\/cart/, { timeout: 3000 })
    }

    checkAllProductsAreInBasket = async (index) => {
        await this.onesieRemoveFromCart.waitFor()
        await this.fleeceRemoveFromCart.waitFor()
        await this.backpackRemoveFromCart.waitFor()
    }

    removeOneProduct = async (index) => {
        await this.fleeceRemoveFromCart.waitFor()
        await this.fleeceRemoveFromCart.click()
    }

    continueToCustomerDetails = async (index) => {
        await this.checkoutButton.waitFor()
        await this.checkoutButton.click()
    }
}

