import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDeviceDetection from '../useDeviceDetection';

describe('useDeviceDetection', () => {
    it('should return correct device information', () => {
        const { result } = renderHook(() => useDeviceDetection());
        expect(result.current).toHaveProperty('isMobile');
        expect(result.current).toHaveProperty('isTablet');
        expect(result.current).toHaveProperty('isPhone');
        expect(result.current).toHaveProperty('os');
        expect(result.current).toHaveProperty('version');
        expect(result.current).toHaveProperty('manufacturer');
        expect(result.current).toHaveProperty('grade');
    });
});
