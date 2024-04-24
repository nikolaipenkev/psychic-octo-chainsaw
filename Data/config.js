"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    urls: {
        loginPage: 'https://www.saucedemo.com/',
        inventoryPage: 'https://www.saucedemo.com/inventory.html',
    },
    users: {
        standard: 'standard_user',
        lockedOut: 'locked_out_user',
        problem: 'problem_user',
        performanceGlitch: 'performance_glitch_user',
        error: 'error_user',
        visual: 'visual_user',
    },
    password: 'secret_sauce',
    elements: {
        username_input: { id: 'user-name' },
        password_input: { id: 'password' },
        login_button: { id: 'login-button' }
    }
};
