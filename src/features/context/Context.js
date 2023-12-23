import React, { createContext, useState } from 'react'

export const MyContext = createContext();

const Context = ({ children }) => {
    const [checkTrailerBool, setCheckTrailerBool] = useState(false);

    const values = {
        checkTrailerBool, setCheckTrailerBool
    };

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default Context