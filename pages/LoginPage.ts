import {TextInput, Button, Browser, Page, findBy, elementIsPresent, pageHasLoaded, WaitCondition} from '../library';
import { HomePage } from '../pages/HomePage';
import {config} from "../Data/config";


export class LoginPage extends Page {
    constructor(browser: Browser) {
        super(browser);
    }

    @findBy(config.elements.username_input.id)
    public Username: TextInput | string ;

    public loadCondition(): WaitCondition {
        return elementIsPresent(() => this.Username);
    }
}