import React,{createContext, useState} from 'react';

const DataContext=createContext(null);

function EncryptionContext({children}) {
  
    const [data,setData] = useState("");

    

    return (
    <DataContext.Provider
    value={{
        data,
        setData,
    }}
    >
{children}
    </DataContext.Provider>
  )
}

export default EncryptionContext;
export {DataContext};