import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { expect } from 'chai';

describe('Example Test Suite', () => {
    let driver: WebDriver;

    before(async function() {
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

    it('should open Google homepage', async function() {
        this.timeout(10000);
        try {
            await driver.get('https://www.google.com');
            const title = await driver.getTitle(); expect(title).to.equal('Google');
            console.log(title);
        } catch (error) {
            console.error('Error opening Google homepage:', error);
            throw error;
        }
    });

    after(async function() {
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