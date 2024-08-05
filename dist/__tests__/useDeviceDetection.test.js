"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var useDeviceDetection_1 = __importDefault(require("../useDeviceDetection"));
describe('useDeviceDetection', function () {
    it('should return correct device information', function () {
        var result = (0, react_hooks_1.renderHook)(function () { return (0, useDeviceDetection_1.default)(); }).result;
        expect(result.current).toHaveProperty('isMobile');
        expect(result.current).toHaveProperty('isTablet');
        expect(result.current).toHaveProperty('isPhone');
        expect(result.current).toHaveProperty('os');
        expect(result.current).toHaveProperty('version');
        expect(result.current).toHaveProperty('manufacturer');
        expect(result.current).toHaveProperty('grade');
    });
});
