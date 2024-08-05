export interface DeviceInfo {
    isMobile: boolean;
    isTablet: boolean;
    isPhone: boolean;
    os: string;
    version: string;
    manufacturer: string;
    grade: string;
}

const detectDevice = (userAgent?: string): DeviceInfo => {
    const ua = userAgent || navigator.userAgent;
    const isMobile = /Mobile|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Opera Mini/i.test(ua);
    const isTablet = /Tablet|iPad/i.test(ua);
    const isPhone = isMobile && !isTablet;

    let os = "Unknown OS";
    if (/Windows/i.test(ua)) os = "Windows";
    else if (/Mac/i.test(ua)) os = "MacOS";
    else if (/Linux/i.test(ua)) os = "Linux";
    else if (/Android/i.test(ua)) os = "Android";
    else if (/iOS|iPhone|iPad|iPod/i.test(ua)) os = "iOS";

    let version = "Unknown Version";
    const versionMatch = ua.match(/(?:Chrome|Firefox|Safari|Opera|MSIE|Trident)\/(\d+\.\d+)/);
    if (versionMatch) version = versionMatch[1];

    let manufacturer = "Unknown Manufacturer";
    if (/Samsung/i.test(ua)) manufacturer = "Samsung";
    else if (/Apple/i.test(ua)) manufacturer = "Apple";
    else if (/Huawei/i.test(ua)) manufacturer = "Huawei";
    else if (/Sony/i.test(ua)) manufacturer = "Sony";
    else if (/LG/i.test(ua)) manufacturer = "LG";

    const grade = "A"; // Outdated feature, always return 'A'

    return {
        isMobile,
        isTablet,
        isPhone,
        os,
        version,
        manufacturer,
        grade,
    };
};

export default detectDevice;
