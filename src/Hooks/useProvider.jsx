import { WrapperProvider } from '@/Core/Provider/Provider';
import React, { useContext } from 'react';

const useProvider = () => {
    const provider = useContext(WrapperProvider)
    return provider;
};

export default useProvider;