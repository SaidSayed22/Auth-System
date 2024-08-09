import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosConfig";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { logoutFailedSwal, logoutSuccessSwal } from "../swals/Swals";

const Profile: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);
  const [cookies, , removeCookie] = useCookies(["token", "user"]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      Swal.fire(logoutSuccessSwal).then(() => {
        removeCookie("token");
        removeCookie("user");
        setUser(null);
        navigate("/login");
      });
    } catch (error) {
      setIsLoading(false);
      console.error("Logout failed:", error);
      Swal.fire(logoutFailedSwal);

    }
  };

  return (
    <div className="bg-gray-300 antialiased min-h-screen flex items-center justify-center">
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto p-5">
        <div className="mt-16">
          <h1 className="font-bold text-center text-3xl text-gray-900">
            {" "}
            Welcome {user?.firstName + " " + user?.lastName}{" "}
          </h1>
          <p className="text-center text-lg text-gray-400 font-medium my-5">
            User Name : {user?.username}
          </p>
          <p className="text-center text-lg text-gray-400 font-medium">
            Phone Number : {user?.phone}
          </p>

          <div className="my-5 px-6">
            <a
              href="#"
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
            >
              Connect with{" "}
              <span className="font-bold">@{user?.originalEmail.email}</span>
            </a>
          </div>

          <div className="flex justify-between items-center my-5 px-6">
            <a
              target="_blank"
              href="https://www.facebook.com/said.sayed.3386"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Twitter
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/saidsayed11"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Instagram
            </a>
            <a
              target="_blank"
              href="#"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Email
            </a>
          </div>

          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-left px-6">
              Recent activities
            </h3>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                My_Id:
                <span className="text-gray-500 text-lg font-bold">
                  {" "}
                  {user?.id}
                </span>
              </a>

              <a
                href="#"
                className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt="Recent Activity"
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                registeredSince:
                <span className="text-gray-500 text-lg">
                  {" "}
                  {user?.registeredSince}{" "}
                </span>
              </a>

              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt="Recent Activity"
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                lastLogin:
                <span className="text-gray-500 text-lg">
                  {" "}
                  {user?.lastLogin}{" "}
                </span>
              </a>
              <Button
                disabled={isLoading}
                variant="contained"
                fullWidth
                onClick={handleLogout}
              >
                {isLoading ? "Loading..." : "Log Out"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
