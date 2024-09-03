import { useState, useRef } from "react";
import { toast, Toaster } from "sonner";

import { useTupaStore } from "../store/tupaStore";
import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import { ListIcon } from "../components/icons/ListIcon";
import { TupaList } from "../components/tupa/TupaList";
import { NoData } from "../components/messages/NoData";
import { InitSearch } from "../components/messages/InitSearch";
import { Spinner } from "../components/Spinner";

export const AdminProcedure = () => {
  //   const [isSaving, setIsSaving] = useState(false);
  const [isInit, setIsInit] = useState(true);

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
      name: "Código",
    },
  ];

  const [categorySearchSelected, setCategorySearchSelected] = useState(
    categorySearch[0].id
  );

  const tupa = useTupaStore((state) => state.tupa);
  const fecthTupa = useTupaStore((state) => state.fetchTupa);
  const isLoading = useTupaStore((state) => state.isLoading);

  const selectCategorySearchChange = (e) => {
    console.log("Se seleccionó la categoría", e.target.value);
    setCategorySearchSelected(parseInt(e.target.value));
    inputSearch.current.focus();
  };

  const onClickSearch = async (e) => {
    try {
      e.preventDefault();
      console.log("Se inicia onClickSearch");
      setIsInit(false);
      await fecthTupa(categorySearchSelected, inputSearch.current.value);
      console.log("Se finaliza onClickSearch");
      const tupaTmp = useTupaStore.getState().tupa; // Obtén el estado actualizado de tupa
  
      if (Array.isArray(tupaTmp) && tupaTmp.length === 0) {
        toast.warning("No se encontraron registros coincidentes", {
          closeButton: true,
        });
      }  
    } catch (error) {

      const [ errorMessage ] = error?.response?.data?.messages 

      console.log(errorMessage.message)
      toast.error(errorMessage?.message, {closeButton: true});
    }
    
  };

  return (
    <div
      className={`min-h-screen bg-bg_primary ${
        isLoading ? "opacity-50 pointer-events-none" : ""
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

        <form
          className="max-w-2xl w-full  mt-5 mx-auto"
          onSubmit={onClickSearch}
        >
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


      <div className="max-w-2xl w-full  mt-5 mx-auto mb-5">
        <TupaList  />
        {isLoading && <Spinner />} 

      </div>

      <div className="flex justify-center mx-4">
        {isInit && (
          <InitSearch className="flex flex-col w-full max-w-2xl justify-center items-center border border-gray bg-bg_primary-100 rounded-lg p-3" />
        )}
        {!isInit && tupa.length === 0 && isLoading === false && (
          <NoData className="flex flex-col w-full max-w-2xl justify-center items-center border border-gray bg-bg_primary-100 rounded-lg p-3" />
        )}
      </div>

      <Toaster richColors visibleToasts={9} position="top-right" /> 
     
    </div>
  );
};
