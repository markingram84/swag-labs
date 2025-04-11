import { userDetails } from "../data/userDetails"

export class CustomerDetails {
    constructor(page) {
        this.page = page

        this.firstNameInput = page.locator('[data-test="firstName"]')
        this.lastNameInput = page.locator('[data-test="lastName"]')
        this.postCodeInpout = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
    }

    onCorrectURL = async (index) => {
        await this.page.waitForURL(/\/checkout-step-one/, { timeout: 3000 })
    }

    fillDetails = async () => {
        await this.firstNameInput.waitFor()
        await this.firstNameInput.fill(userDetails.firstName)
        await this.lastNameInput.waitFor()
        await this.lastNameInput.fill(userDetails.lastName)
        await this.postCodeInpout.waitFor()
        await this.postCodeInpout.fill(userDetails.postCode)
    }

    contineToPayment = async (index) => {
        await this.continueButton.waitFor()
        await this.continueButton.click()
    }
}