// src/helpers/RegisterHelpers.ts

import axiosInstance from "../apis/axiosConfig";
import Swal from "sweetalert2";
import { RegisterSuccessSwal, RegisterFailedSwal } from "../swals/Swals";
import { RegisterFormData } from "../types/RegisterFormTypes";
import { KnownError } from "../types/RegisterFormTypes";
import { UseFormSetError } from "react-hook-form";

export const submitRegister = async (data: RegisterFormData, navigate: (path: string) => void,   setError: UseFormSetError<RegisterFormData>
) => {
  try {
    await axiosInstance.post("/auth/register", data);
    Swal.fire(RegisterSuccessSwal).then(() => {
      navigate("/login");
    });
  } catch (error: unknown) {
    const knownError = error as KnownError;
    if (knownError.response && knownError.response.data) {
      const errorData = knownError.response.data.message;
      if (errorData.username) {
        setError("username", {
          type: "manual",
          message: errorData.username[0].en || "Invalid username format",
        });
      }
      if (errorData.phone) {
        setError("phone", {
          type: "manual",
          message: errorData.phone[0].en || "Phone number is already taken",
        });
      }
      if (errorData.email) {
        setError("email", {
          type: "manual",
          message: errorData.email[0].en || "Email is already taken",
        });
      }
    } else {
      console.error("Registration failed:", error);
      Swal.fire(RegisterFailedSwal);
    }
  }
};
