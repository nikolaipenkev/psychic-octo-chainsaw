import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import { LoginPage } from "../PoM/LoginPage";
import {config} from "../Data/config";


describe('Login Test', () => {
    let driver: WebDriver;

    before(async function () {
        this.timeout(10000);
        try {
            const chromeOptions = new Options().addArguments('--headless');
            const capabilities = Capabilities.chrome().merge(chromeOptions);
            driver = await new Builder()
                .withCapabilities(capabilities)
                .build();
        } catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        }
    });

    it('should open landing page homepage', async function () {
        this.timeout(10000);
        try {
            const loginUrl = config.urls.loginPage;
            const loginPage = new LoginPage(driver, loginUrl, config);

            await loginPage.open();
            await loginPage.inputPassword(config.password);
            await loginPage.inputUsername(config.users.standard);
            await loginPage.clickLoginButton();

            const inventory = await loginPage.getPageUrl();
            expect(inventory).to.equal(config.urls.inventoryPage);
        } catch (error) {
            console.error('Error opening Google homepage:', error);
        }
    });

    after(async function () {
        this.timeout(10000);
        if (driver) {
            try {
                await driver.quit();
            } catch (error) {
                console.error('Error quitting WebDriver:', error);
                throw error;
            }
        }
    });

});
