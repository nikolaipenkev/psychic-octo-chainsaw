import 'reflect-metadata';
import { readFileSync } from 'fs';

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function findBy(elementId: string) {
    return (target: any, propertyKey: string) => {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        const cssData = readFileSync(`./selectors/${elementId}.css`, 'utf8');

        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function() {
                const promise = (this as any).browser.findElement(cssData);
                return new type(promise, elementId);
            },
        });
    };
}
