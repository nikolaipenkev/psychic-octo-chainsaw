import {WebDriver} from 'selenium-webdriver';
import {Page} from './pages';

export class LoginPage extends Page {

    constructor(driver: WebDriver, url: string, config: { [Identifier: string]: any }) {
        super(driver, url, config);
    }

    async open() {
        await this.visit(this.config.urls.loginPage);
    }

    async inputUsername(username: string) {
        await this.setValue(this.config.elements.username_input, username);
    }

    async inputPassword(password: string) {
        await this.setValue(this.config.elements.password_input, password);
    }

    async clickLoginButton() {
        await this.click(this.config.elements.login_button);
    }
}
