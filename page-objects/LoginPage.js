import { userDetails } from "../data/userDetails"

export class LoginPage {
    constructor(page) {
        this.page = page

        this.loginButton = page.locator('[data-test="login-button"]')
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginError = page.locator('[data-test="error"]')
    }

    visit = async () => {
        await this.page.goto("/");
        await this.loginButton.waitFor()
    }

    login = async () => {
        await this.usernameField.waitFor()
        await this.usernameField.fill(userDetails.standardUsername)
        await this.passwordField.waitFor()
        await this.passwordField.fill(userDetails.password)
        await this.loginButton.click()
    }

    failedLogin = async () => {
        await this.usernameField.waitFor()
        await this.usernameField.fill(userDetails.lockedUsername)
        await this.passwordField.waitFor()
        await this.passwordField.fill(userDetails.password)
        await this.loginButton.click()
    }

    problemLogin = async () => {
        await this.usernameField.waitFor()
        await this.usernameField.fill(userDetails.problemUsername)
        await this.passwordField.waitFor()
        await this.passwordField.fill(userDetails.password)
        await this.loginButton.click()
    }
}