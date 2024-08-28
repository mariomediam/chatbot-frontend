import { useState, useRef } from "react";

import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import ListIcon from "../components/icons/ListIcon";
import imgBackgroundSearch from "../assets/background-search.svg";

export const AdminProcedure = () => {
  const [isSaving, setIsSaving] = useState(false);

  const inputSearch = useRef(null);
  //   const selectSearch = useRef(null);

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
    categorySearch[0].id
  );

  const selectCategorySearchChange = (e) => {
    console.log("Se seleccionó la categoría", e.target.value);
    setCategorySearchSelected(e.target.value);
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

        <form className="max-w-2xl w-full  mt-5 mx-auto">
          <div className="flex">
            <select
              id="category-search"
              //   size="5"
              className="bg-bg_primary-100 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-[140px]"
              onChange={selectCategorySearchChange}
            >
              {categorySearch.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-bg_primary-100 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                // placeholder="Search Mockups, Logos, Design Templates..."
                ref={inputSearch}
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center mx-4">
        <div className="flex flex-col w-full max-w-2xl justify-center items-center border border-gray bg-bg_primary-100 rounded-lg p-3">
          <p className="m-0 p-0 text-sm">
            Por favor, ingrese sus criterios de búsqueda para comenzar
          </p>
          <div className="w-full flex justify-center">
            <img
              src={imgBackgroundSearch}
              alt="Imagen buscar"
              className="max-w-xs pt-0 mt-0 relative -top-[20px]"
            />
          </div>
        </div>
      </div>
      

      {/* <Toaster richColors visibleToasts={9} position="top-right" />
      {isSaving && <Spinner />} */}
    </div>
  );
};
