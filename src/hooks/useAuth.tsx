import { useContext } from "react";
import { AuthContext } from "../provider/auth";

const useAuth = () =>  useContext(AuthContext)

export default useAuth