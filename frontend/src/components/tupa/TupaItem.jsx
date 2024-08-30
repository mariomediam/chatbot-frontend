import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { TupaFile } from "./TupaFile";

export const TupaItem = ({ item }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

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
            

<div className="w-full h-16 bg-white border-t mt-5 border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600">
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
        </button>
    </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};
