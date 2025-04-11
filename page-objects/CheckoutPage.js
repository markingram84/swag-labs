export class CheckoutPage {
    constructor(page) {
        this.page = page

        this.paymentCardInformation = page.locator('[data-test="payment-info-value"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.orderCompleteHeader = page.locator('[data-test="complete-header"]')
        this.homeButton = page.locator('[data-test="back-to-products"]')
    }

    onCorrectURL = async (index) => {
        await this.page.waitForURL(/\/checkout-step-two/, { timeout: 3000 })
    }

    completeOrder = async () => {
        await this.paymentCardInformation.waitFor()
        await this.finishButton.waitFor()
        await this.finishButton.click()
        await this.page.waitForURL(/\/checkout-complete/, { timeout: 3000 })
    }

    goBackToHomeScreen = async () => {
        await this.orderCompleteHeader.waitFor()
        await this.homeButton.waitFor()
        await this.homeButton.click()
        await this.page.waitForURL(/\/inventory/, { timeout: 3000 })
    }
}