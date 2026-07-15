import { createContext } from "react";

export const UserData = createContext()

export const UserProvider = ({ children }) => {

    const user = [
        { name: 'Sana', id: 23 },
        { name: 'Ali', id: 22 },
        { name: 'Ahmed', id: 21 },

    ]
    
    return (
        
        <UserData.Provider value={user}>
            {children}
        </UserData.Provider>
    )
}

