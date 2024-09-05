import { useEffect, useState, useRef } from "react";
import { toast, Toaster } from "sonner";
import { initFlowbite } from "flowbite";

import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import { MessagesIcon } from "../components/icons/MessagesIcon";
import { SearchIcon } from "../components/icons/SearchIcon";

import { searchChats } from "../services/chatService";
import { ChatSearchItem } from "../components/chat/ChatSearchItem";
import { Spinner } from "../components/Spinner";
import { InitSearch } from "../components/messages/InitSearch";
import { NoData } from "../components/messages/NoData";

export const ChatsSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatsList, setChatsList] = useState([]);
  const [isInit, setIsInit] = useState(true);

  const itemsBreadCrumb = [{ name: "conversaciones", url: "/chats" }];

  const inputDesde = useRef(null);
  const inputHasta = useRef(null);
  const inputBuscar = useRef(null);

  const onClickSearch = async () => {
    try {
      setIsLoading(true);
      setIsInit(false);
      const start_date = inputDesde.current.value
        .split("/")
        .reverse()
        .join("-"); // Convertir a formato yyyy-mm-dd
      const end_date = inputHasta.current.value.split("/").reverse().join("-"); // Convertir a formato yyyy-mm-dd
      const data = await searchChats({
        start_date,
        end_date,
        search_text: inputBuscar.current.value,
      });
      setChatsList(data);
      if (data.length === 0) {
        toast.warning("No se encontraron conversaciones", {
          closeButton: true,
        });
      }
    } catch (error) {
      const msgError =
        error.response?.data?.message ||
        error.message ||
        "Error al buscar conversaciones";
      toast.error(JSON.stringify(msgError), {
        closeButton: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div
      className={`min-h-screen bg-bg_primary pb-5 ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <Header />
      <Breadcrumb className="ms-3" items={itemsBreadCrumb} />
      <div className="max-w-screen-2xl w-full flex flex-col items-center justify-center mx-auto p-4">
        <div className=" w-full">
          <div className="flex justify-center w-full">
            <MessagesIcon className="me-2 h-7 w-7" />
            <h1 className="text-2xl font-bold">Conversaciones</h1>
          </div>
        </div>
      </div>

      <div className="flex w-full  justify-center items-center ">
        <div className="flex w-full  justify-center items-center gap-3 p-2.5 flex-wrap ">
          <div>
            <p className="text-xs text-gray-500 mb-1">Fecha de inicio</p>
            <div className="relative max-w-[150px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker="true"
                id="datepicker-start"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="dd/mm/yyyy"
                datepicker-format="dd/mm/yyyy"
                ref={inputDesde}
                defaultValue={new Date().toLocaleDateString("es-ES")}
              />
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Fecha de fin</p>
            <div className="relative max-w-[150px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker="true"
                id="datepicker-end"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="dd/mm/yyyy"
                datepicker-format="dd/mm/yyyy"
                ref={inputHasta}
                // el valor inicial es la fecha actual
                defaultValue={new Date().toLocaleDateString("es-ES")}
              />
            </div>
          </div>

          <div className="w-full max-w-[350px]">
            <label
              htmlFor="text_filter"
              className="block mb-1 text-xs font-medium text-gray-500 "
            >
              Buscar en la conversación
            </label>
            <input
              type="text"
              id="text_filter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Escribe para buscar..."
              ref={inputBuscar}
              // si doy enter en el input, se ejecuta la función de búsqueda
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  onClickSearch();
                }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
          onClick={onClickSearch}
        >
          <SearchIcon className="w-5 h-5 me-1" />
          Buscar
        </button>
      </div>

      <div className="flex justify-center mx-4 mt-3">
        {isInit && (
          <InitSearch className="flex flex-col w-full max-w-2xl justify-center items-center border border-gray bg-bg_primary-100 rounded-lg p-3" />
        )}
        {!isInit && chatsList.length === 0 && isLoading === false && (
          <NoData className="flex flex-col w-full max-w-2xl justify-center items-center border border-gray bg-bg_primary-100 rounded-lg p-3" />
        )}
      </div>

      <Toaster richColors visibleToasts={9} position="top-right" />
      {isLoading && <Spinner />}



      <div className="flex flex-col items-center w-full">
        {chatsList.map((conversation) => (
          <ChatSearchItem
            key={conversation.chatSessionId}
            conversation={conversation}
          />
        ))}
      </div>

      
    </div>
  );
};
