import {Builder, ThenableWebDriver, Capabilities, WebElementPromise, By} from 'selenium-webdriver';

export class Browser {
    private driver: ThenableWebDriver;
    public constructor(private browserName: string) {
        const chromeOptions = new Option('--headless');
        const capabilities = Capabilities.chrome().merge(chromeOptions);
        this.driver = new Builder().forBrowser(browserName).withCapabilities(capabilities).build();
    }

    public async navigate(url: string) {
        await this.driver.get(url);
    }

    public async findElement(elementId: string) : Promise<WebElementPromise> {
        return this.driver.findElement(By.css(elementId));
    }

    public async close() {
        await this.driver.quit();
    }

    public async wait(condition: any) {
        await this.driver.wait(condition);
    }
}
