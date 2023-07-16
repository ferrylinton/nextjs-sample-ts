import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState<AuthenticatedUser | null>(null);

    const { push } = useRouter();

    const setAuthenticatedUser = (user: AuthenticatedUser | null) => {
        setUser(user);
    }

    const logout = async () => {
        setUser(null);
        push('/login');
    }

    const value: AppContextType = {
        user,
        setAuthenticatedUser,
        logout
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext);