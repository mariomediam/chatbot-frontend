import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import LogoutIcon from "./icons/LogoutIcon";

export const PopoverUserProfile = () => {
  const { userName, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onClickLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <>
      <div
        data-popover
        id="popover-user-profile"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300  bg-gray-100 border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="p-3 flex justify-center items-center flex-col">
          <div className="relative w-14 h-14 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-16 h-16 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="mt-1">
            <p className="text-2xl font-medium">{userName}</p>
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              onClick={onClickLogout}
            >
              <LogoutIcon className="w-5 h-5 me-1" />
              Cerrar sesión
            </button>
          </div>

          
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};
