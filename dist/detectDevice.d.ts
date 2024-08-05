export interface DeviceInfo {
    isMobile: boolean;
    isTablet: boolean;
    isPhone: boolean;
    os: string;
    version: string;
    manufacturer: string;
    grade: string;
}
declare const detectDevice: (userAgent?: string) => DeviceInfo;
export default detectDevice;
