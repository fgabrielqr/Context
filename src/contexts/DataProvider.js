import React, { createContext, useState } from 'react';

const DataContext = createContext({})

export function DataProvider({ children }) {
    const [dados, setDados] = useState({})

    const adcionarDados = (propriedades) => {
        let obj = Object.assign(dados, propriedades)
        setDados(obj)
    }

    return (
        <DataContext.Provider value={{ dados, adcionarDados }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;