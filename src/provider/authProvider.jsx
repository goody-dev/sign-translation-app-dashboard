import { Children, createContext, useContext, useEffect, useMemo, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || "initial");
    const handleToken = (newToken) => {
        setToken(newToken);
    }

    useEffect(()=>{
        if (token) {
            localStorage.setItem('token', token);
        } else if (token === "initial") {
            pass;
        } else {
            localStorage.removeItem('token');
            //alert("Logged out!");
        }
    }, [token]);

    const contextValue = useMemo(()=> ({
        token, handleToken
    }), [token])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;