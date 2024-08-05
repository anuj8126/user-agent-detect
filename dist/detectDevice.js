"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var detectDevice = function (userAgent) {
    var ua = userAgent || navigator.userAgent;
    var isMobile = /Mobile|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Opera Mini/i.test(ua);
    var isTablet = /Tablet|iPad/i.test(ua);
    var isPhone = isMobile && !isTablet;
    var os = "Unknown OS";
    if (/Windows/i.test(ua))
        os = "Windows";
    else if (/Mac/i.test(ua))
        os = "MacOS";
    else if (/Linux/i.test(ua))
        os = "Linux";
    else if (/Android/i.test(ua))
        os = "Android";
    else if (/iOS|iPhone|iPad|iPod/i.test(ua))
        os = "iOS";
    var version = "Unknown Version";
    var versionMatch = ua.match(/(?:Chrome|Firefox|Safari|Opera|MSIE|Trident)\/(\d+\.\d+)/);
    if (versionMatch)
        version = versionMatch[1];
    var manufacturer = "Unknown Manufacturer";
    if (/Samsung/i.test(ua))
        manufacturer = "Samsung";
    else if (/Apple/i.test(ua))
        manufacturer = "Apple";
    else if (/Huawei/i.test(ua))
        manufacturer = "Huawei";
    else if (/Sony/i.test(ua))
        manufacturer = "Sony";
    else if (/LG/i.test(ua))
        manufacturer = "LG";
    var grade = "A"; // Outdated feature, always return 'A'
    return {
        isMobile: isMobile,
        isTablet: isTablet,
        isPhone: isPhone,
        os: os,
        version: version,
        manufacturer: manufacturer,
        grade: grade,
    };
};
exports.default = detectDevice;
