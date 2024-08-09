// src/swals/Swal.ts
import { SweetAlertOptions } from "sweetalert2";


/////// Register Swal

export const RegisterSuccessSwal: SweetAlertOptions = {
    title: "Registration Success",
    icon: "success",
    confirmButtonText: "Done!",
  };

  export const RegisterFailedSwal: SweetAlertOptions = {
        title: "Registration Failed",
        text: "Invalid username or password",
        icon: "error",
        confirmButtonText: "Done!",
  };

/////// Login Swal

export const LoginSuccessSwal: SweetAlertOptions = {
    title: "Login Success",
    icon: "success",
    confirmButtonText: "Done!",
  };
  
  export const LoginFailedSwal: SweetAlertOptions = {
    title: "Login Failed",
    text: "Invalid username or password",
    icon: "error",
    confirmButtonText: "Done!",
  };


/////// Logout Swal

export const logoutSuccessSwal: SweetAlertOptions = {
    title: "Logged out successfully",
    icon: "success",
    confirmButtonText: "Done!",
  };
  
  export const logoutFailedSwal: SweetAlertOptions = {
    title: "Logout Failed",
    text: "An error occurred while logging out. Please try again.",
    icon: "error",
    confirmButtonText: "Okay",
  };


