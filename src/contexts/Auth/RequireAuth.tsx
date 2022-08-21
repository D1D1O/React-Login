import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }:any) => {

  const  auth = useContext(AuthContext);

  if(!auth.user){
    return <Login></Login>
  }

  return children;
}

//: { children: JSX.Element }