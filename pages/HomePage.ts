import { TextInput, Button, Browser, findBy, elementIsPresent, Page } from '../library';
import {config2} from "../Data/config2";

export class HomePage extends Page {
    constructor(browser: Browser) {
        super(browser);
        this.setUrl(config2.baseUrl);
    }
}
