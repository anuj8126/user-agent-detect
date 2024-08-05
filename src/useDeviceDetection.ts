import { useState, useEffect } from 'react';
import detectDevice, { DeviceInfo } from './detectDevice';

const useDeviceDetection = (): DeviceInfo => {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        isMobile: false,
        isTablet: false,
        isPhone: false,
        os: 'Unknown OS',
        version: 'Unknown Version',
        manufacturer: 'Unknown Manufacturer',
        grade: 'A',
    });

    useEffect(() => {
        setDeviceInfo(detectDevice());
    }, []);

    return deviceInfo;
};

export default useDeviceDetection;
