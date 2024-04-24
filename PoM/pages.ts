import {WebDriver, WebElementPromise, until} from 'selenium-webdriver';

export class Page {
    protected readonly driver: WebDriver;
    protected readonly url: string;
    protected readonly config: { [Identifier: string]: any };

    constructor(driver: WebDriver, url: string, config: { [Identifier: string]: any }) {
        this.driver = driver;
        this.url = url;
        this.config = config;
    }

    async getPageUrl() {
        return await this.driver.getCurrentUrl();
    }

    async visit(params: '') {
        await this.driver.get(this.url + params);
    }

    async setValue(element_name: string , value: any){
        await (await this.find(element_name)).sendKeys(value);
    }

    async click(element_name: string) {
        await (await this.find(element_name)).click();
    }

    private async find(element_name: string ) : Promise<WebElementPromise> {
        return this.driver.wait(until.elementLocated((this.config.elements[element_name])));
    }

}