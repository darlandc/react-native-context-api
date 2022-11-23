import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function signIn(mail, password) {
    if (!(mail !== "" && password !== "")) {
      setUser({
        mail: mail,
        status: "ACTIVE",
      });
      navigation.navigate("Orders");
    }
  }

  return(
    <AuthContext.Provider value={({ name: "JOE BANANAS", signIn, user })}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;