'use client'
import React, { createContext } from 'react';


export const WrapperProvider = createContext(null)
const Provider = ({ children }) => {


    const providerValue = {

    }
    return (
        <WrapperProvider.Provider value={providerValue}>
            {children}
        </WrapperProvider.Provider>
    );
};

export default Provider;