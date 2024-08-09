

import axiosInstance from "../apis/axiosConfig";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { LoginFailedSwal, LoginSuccessSwal } from "../swals/Swals";

interface LoginFormData {
  username: string;
  password: string;
}


export const useLogin = () => {
    const [, setCookie] = useCookies(["token", "user"]);
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitLogin: SubmitHandler<LoginFormData> = async (data) => {
        try {
          const response = await axiosInstance.post("/auth/login", data);
          const { accessToken, user } = response.data.data;
          setCookie("token", accessToken, { path: "/" });
          setCookie("user", user, { path: "/" });
          setUser(user);
    
          Swal.fire(LoginSuccessSwal).then(() => {
            console.log("Navigate To Profile");
            navigate("/profile");
          });
        } catch (error) {
          console.log("Error: " + error);
    
          Swal.fire(LoginFailedSwal);
        }
      };

      return (
        {submitLogin}
      )
} 