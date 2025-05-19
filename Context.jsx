import { createContext } from "react";



export const UserContext = createContext();

const contextProvider = ({children})=>{

    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export default contextProvider