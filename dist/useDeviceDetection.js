"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var detectDevice_1 = __importDefault(require("./detectDevice"));
var useDeviceDetection = function () {
    var _a = (0, react_1.useState)({
        isMobile: false,
        isTablet: false,
        isPhone: false,
        os: 'Unknown OS',
        version: 'Unknown Version',
        manufacturer: 'Unknown Manufacturer',
        grade: 'A',
    }), deviceInfo = _a[0], setDeviceInfo = _a[1];
    (0, react_1.useEffect)(function () {
        setDeviceInfo((0, detectDevice_1.default)());
    }, []);
    return deviceInfo;
};
exports.default = useDeviceDetection;
