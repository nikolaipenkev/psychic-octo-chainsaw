"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome_1 = require("selenium-webdriver/chrome");
var chai_1 = require("chai");
var mocha_1 = require("mocha");
(0, mocha_1.describe)('Example Test Suite', function () {
    var driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function () {
            var chromeOptions, capabilities, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(10000);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        chromeOptions = new chrome_1.Options().addArguments('--headless');
                        capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOptions);
                        return [4 /*yield*/, new selenium_webdriver_1.Builder()
                                .withCapabilities(capabilities)
                                .build()];
                    case 2:
                        driver = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error initializing WebDriver:', error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
    (0, mocha_1.it)('should open Google homepage', function () {
        return __awaiter(this, void 0, void 0, function () {
            var title, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(10000);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, driver.get('https://www.google.com')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.getTitle()];
                    case 3:
                        title = _a.sent();
                        (0, chai_1.expect)(title).to.equal('Google');
                        console.log(title);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error('Error opening Google homepage:', error_2);
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(10000);
                        if (!driver) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, driver.quit()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error('Error quitting WebDriver:', error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
});
