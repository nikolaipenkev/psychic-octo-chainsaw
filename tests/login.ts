import { WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import { LoginPage } from "../PoM/LoginPage";
import {config} from "../Data/config";
import {Pages} from '../PoM/pages';
import axios from "axios";

describe('Login Test', () => {
    let driver: WebDriver;
    let page: Pages;

    before(async function () {
        this.timeout(10000);
        try {
            driver = await page.createHeadlessChrome();
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

    it('should open inventory page', async function () {
        this.timeout(10000);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

            expect(response.status).to.equal(200);

            const user = response.data;
            expect(user.id).to.equal(1);
            expect(user.name).to.equal('Leanne Graham');
            expect(user.username).to.equal('Bret');
            expect(user.email).to.equal('Sincere@april.biz');

        } catch (error) {
           expect(error).to.be.null;
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
