import {WebElementPromise} from "selenium-webdriver";

export class WebComponent {
    constructor(protected element: WebElementPromise, public elementId: string) { }

    async click() {
        try {
            await this.element.click();
        } catch (clickError) {
            try {
                await this.element.getDriver().executeScript('arguments[0].click();', this.element);
            } catch (jsError) {
                throw clickError;
            }
        }
    }

    public async isDisplayed() {
        try {
            return await this.element.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    public async getText() {
        return await this.element.getText();
    }
}
export class Button extends WebComponent {
    constructor(element: WebElementPromise, elementId: string) {
        super(element, elementId);
    }

    public async isDisabled() {
        try {
            return await this.element.getAttribute('disabled') === 'disabled';
        } catch (error) {
            return false;
        }
    }
}
export class TextInput extends WebComponent {
    constructor(element: WebElementPromise, elementId: string) {
        super(element, elementId);
    }

    public type(text: string) {
        return this.element.sendKeys(text);
    }
}