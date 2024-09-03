import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";

import { TupaDescripModal } from "./TupaDescripModal";
import { useTupaStore } from "../../store/tupaStore";

import { FileDescriptionIcon } from "../icons/FileDescriptionIcon";
import { PencilPlusIcon } from "../icons/PencilPlusIcon";
import { PaperClipIcon } from "../icons/PaperClipIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { TupaFile } from "./TupaFile";
import { TupaTrainingModal } from "./TupaTrainingModal";

export const TupaItem = ({ item }) => {
  const setCurrentTupa = useTupaStore((state) => state.setCurrentTupa);
  const [openModalDescrip, setOpenModalDescrip] = useState(false);
  const [openModalTraining, setOpenModalTraining] = useState(false);

  useEffect(() => {
    initFlowbite();
  }, []);

  const onClicEditDescription = () => {    
    setCurrentTupa(item);
    setOpenModalDescrip(true)
  };

  const onClicEditTraining = () => {
    setCurrentTupa(item);
    setOpenModalTraining(true)
  };

  return (
    <div className="mt-6 w-full">
      <div
        id={`accordion-color-${item.tupaId}`}
        data-accordion="collapse"
        data-active-classes="bg-bg_primary"
      >
        <h2 id={`accordion-color-heading-${item.tupaId}`}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-bg_primary-300 rounded-t-xl focus:ring-4 focus:bg_primary  bg-bg_primary-200  gap-3 text-left"
            data-accordion-target={`#accordion-color-body-${item.tupaId}`}
            // aria-expanded="true"
            aria-controls={`accordion-color-body-${item.tupaId}`}
          >
            <div className="me-0 pe-0">
              <p className="text-xs m-0 p-0">{item.tupaNombre.trim()}</p>
              <p className="text-xs m-0 p-0 text-gray-600">{item.tupaCodigo}</p>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-color-body-${item.tupaId}`}
          className="hidden"
          aria-labelledby={`accordion-color-heading-${item.tupaId}`}
        >
          <div className="p-5 border border-bg_primary-300 dark:border-gray-700 dark:bg-gray-900">
            {/* ************************** DESCRIPCION ********************* */}
            <label
              htmlFor="message"
              className="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
            >
              Descripción del procedimiento
            </label>
            <textarea
              id="message"
              rows="10"
              readOnly
              value={item.tupaDescrip}
              //   disabled
              className="block p-2.5 w-full text-sm text-gray-900 bg-bg_primary-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>

            {/* ************************** ENTRENAMIENTO ********************* */}
            <label
              htmlFor="message"
              className="block mb-2 mt-6 text-xs font-medium text-gray-500 dark:text-white"
            >
              Entrenamiento
            </label>
            <textarea
              id="message"
              rows="4"
              readOnly
              //   disabled
              value={item.tupaPrecisa}
              className="block p-2.5 w-full text-sm text-gray-900 bg-bg_primary-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>

            {/* ************************** FILES ********************* */}

            <label
              htmlFor="message"
              className="block mb-2 mt-6 text-xs font-medium text-gray-500 dark:text-white"
            >
              Archivos o formatos
            </label>
            <div className="border border-gray-400 rounded p-3">
              {item.tupa_tupaFiles.map((file) => (
                <TupaFile file={file} key={file.tupaFileId} />
              ))}
            </div>

            {/* ************************** TOOLBAR ********************* */}

            <div className="w-full h-16 bg-bg_primary-900 border-t mt-5 border-gray-200 ">
              <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x  group  text-bg_primary hover:bg-bg_primary-700"
                //   data-modal-target="medium-modal"
                //   data-modal-toggle="medium-modal"
                  onClick={onClicEditDescription}
                >
                  <FileDescriptionIcon className="w-6 h-6 " />
                  <span className="text-xs ">Modificar descripción</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x group  text-bg_primary hover:bg-bg_primary-700"
                  onClick={onClicEditTraining}
                >
                  <PencilPlusIcon className="w-6 h-6 " />
                  <span className="text-xs ">Modificar entrenamiento</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x group  text-bg_primary hover:bg-bg_primary-700"
                >
                  <PaperClipIcon className="w-6 h-6 stroke-2" />
                  <span className="text-xs ">Agregar archivo</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x group  text-bg_primary hover:bg-bg_primary-700"
                >
                  <TrashIcon className="w-6 h-6" />
                  <span className="text-xs ">Eliminar procedimiento</span>
                </button>
              </div>
            </div>
            <div className="bg-black">
            <TupaDescripModal openModal={openModalDescrip} setOpenModal={setOpenModalDescrip}/>
            <TupaTrainingModal openModal={openModalTraining} setOpenModal={setOpenModalTraining}/>

            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
