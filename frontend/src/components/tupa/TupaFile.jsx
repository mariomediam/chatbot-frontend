import React from "react";
import { PaperClipIcon } from "../icons/PaperClipIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { DownloadIcon } from "../icons/DownloadIcon";

export const TupaFile = ({ file }) => {
  const { tupaFileId, tupaFileDescrip, tupaFileURL } = file;
  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center">
        <PaperClipIcon className="w-8 h-8 mr-2 text-gray-500" />
        <p className="text-xs">{tupaFileDescrip}</p>
      </div>
      <div className="flex">
        <button
          type="button"
          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          title="Descargar archivo"
        >
          <DownloadIcon className="w-5 h-5" />
          <span class="sr-only">Descargar archivo</span>
        </button>

        <button
          type="button"
          className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center "
          title="Eliminar archivo"
        >
          <TrashIcon className="w-5 h-5" />
          <span class="sr-only">Eliminar archivo</span>
        </button>
      </div>
    </div>
  );
};
