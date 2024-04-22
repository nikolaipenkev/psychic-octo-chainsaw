import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Example Test Suite', () => {
    let driver: WebDriver;

    before(async function() {
        this.timeout(10000);
        try {
            driver = await new Builder()
                .withCapabilities(Capabilities.chrome())
                .build();
        } catch (error) {
            console.error('Error initializing WebDriver:', error);
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

    it('should open Google homepage', async function() {
        this.timeout(10000);
        try {
            await driver.get('https://www.google.com');
            const title = await driver.getTitle();
            expect(title).to.equal('Google');
        } catch (error) {
            console.error('Error opening Google homepage:', error);
            throw error;
        }
    });
});
