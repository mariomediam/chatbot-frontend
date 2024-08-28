import { useState, useRef } from "react";

import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import ListIcon from "../components/icons/ListIcon";

export const AdminProcedure = () => {
  const [isSaving, setIsSaving] = useState(false);

  const inputSearch = useRef(null);

  const itemsBreadCrumb = [{ name: "Administrar TUPA", url: "/admin-tupa" }];

  const categorySearch = [
    {
      id: 1,
      name: "Nombre",
    },
    {
      id: 2,
      name: "Descripción",
    },
    {
      id: 3,
      name: "Contenido",
    },
  ];

  const [categorySearchSelected, setCategorySearchSelected] = useState(
    categorySearch[0]
  );

  const selectCategorySearchChange = (category) => {
    setCategorySearchSelected(category);
    inputSearch.current.focus();
  };

  return (
    <div
      className={`min-h-screen bg-bg_primary ${
        isSaving ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <Header />
      <Breadcrumb className="ms-3" items={itemsBreadCrumb} />
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-center mx-auto p-4">
        <div className=" w-full">
          <div className="flex justify-center w-full">
            <ListIcon className="me-2 h-7 w-7" />
            <h1 className="text-2xl font-bold">Administrar TUPA</h1>
          </div>
        </div>
        <p className="text-center text-[10px] max-w-[400px] mt-1">
          Permite editar y eliminar procedimientos administrativos. Para agregar
          un nuevo procedimiento debe ir a la opción Importar TUPA.
        </p>

        <form className="max-w-lg mx-auto">
          <div className="flex">
            {/* <label
              for="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              {categorySearchSelected.name}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >                
                {categorySearch
                  .filter(
                    (category) => category.id !== categorySearchSelected.id
                  )
                  .map((category) => (
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => selectCategorySearchChange(category)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div> */}
            <select
              id="years"
            //   size="5"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[140px]"
            >

                 {categorySearch.map((category) => (
                    <option
                        onClick={() => selectCategorySearchChange(category)}
                      >
                        {category.name}
                      </option>
                    
                  ))}
              
            </select>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                ref={inputSearch}
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Toaster richColors visibleToasts={9} position="top-right" />
      {isSaving && <Spinner />} */}
    </div>
  );
};
