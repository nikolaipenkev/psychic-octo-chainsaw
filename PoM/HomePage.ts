import { WebDriver} from 'selenium-webdriver' ;
import {Page} from './pages';


export class HomePage extends Page {
    constructor(driver: WebDriver, url: string, config: { [Identifier: string]: any }) {
        super(driver, url, config);
    }

}
