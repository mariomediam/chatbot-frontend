import { useContext } from "react";
import { useLocation } from 'react-router-dom';

import LogoIcon from "./icons/LogoIcon";
import AuthContext from "../context/AuthContext";
import { PopoverUserProfile } from "./PopoverUserProfile";

export const Header = () => {
  const location = useLocation();

  const { userName } = useContext(AuthContext);

  const items = [
    { name: "Importar TUPA", url: "/import" },
    { name: "Administrar TUPA", url: "/admin-tupa" },
    { name: "Entrenar modelo", url: "#" },
    { name: "Reportes", url: "#" },
  ];

  return (
    <nav className="bg-primary border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex">
          <LogoIcon className="me-2 max-w-10  max-h-10" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap text-bg_primary">
            TupaBot
          </span>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border items-center border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {items.map(({ name, url }, index) => (
              <li key={index}>
                <a
                  href={url}
                  className={`block py-2 px-3 text-bg_primary rounded hover:underline hover:underline-offset-4 md:border-0 md:p-0 ${location.pathname === url ? 'font-extrabold' : ''}`}
                >
                  {name}
                </a>
              </li>
            ))}
            <li
              data-popover-target="popover-user-profile"
              className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-bg_primary rounded-full dark:bg-gray-600"
            >
              <span className="font-medium text-primary">
                {userName?.substring(0, 1).toUpperCase()}
              </span>
            </li>
          </ul>
          <PopoverUserProfile />
        </div>
      </div>
    </nav>
  );
};
