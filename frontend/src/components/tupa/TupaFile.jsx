import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useTupaStore } from "../../store/tupaStore";
import { PaperClipIcon } from "../icons/PaperClipIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { DownloadIcon } from "../icons/DownloadIcon";
import { PopoverYesAndNo } from "../PopoverYesAndNo";

export const TupaFile = ({ file }) => {
  const removeTupaFile = useTupaStore((state) => state.removeTupaFile);
  const fecthTupa = useTupaStore((state) => state.fetchTupa);
  const filterSearch = useTupaStore((state) => state.filterSearch);

  const [openModalYesAndNo, setOpenModalYesAndNo] = useState(false);
  const [confirmYes, setConfirmYes] = useState(false)


  const { tupaFileId, tupaFileDescrip, tupaFileURL } = file;

  const RemoveFile = async () => {
    try {
      await removeTupaFile(tupaFileId);
      await fecthTupa(filterSearch.option, filterSearch.search);

      toast.success("Archivo eliminado", {
        closeButton: true,
      });
    } catch (error) {      
      const msgError =
        JSON.stringify(error?.response?.data?.message) ||
        "Error eliminando el archivo";
      toast.error(msgError, { closeButton: true });
    }
  };

  const onClickRemoveFile = () => {  
    setConfirmYes(false);  
    setOpenModalYesAndNo(true);
  }

  const onClicViewFile = () => {
    window.open(tupaFileURL, "_blank");
  }


  useEffect(() => {
    const executeRemoveFile = async () => {
      try {
        await removeTupaFile(tupaFileId);
        await fecthTupa(filterSearch.option, filterSearch.search);
  
        toast.success("Archivo eliminado", {
          closeButton: true,
        });
      } catch (error) {      
        const msgError =
          JSON.stringify(error?.response?.data?.message) ||
          "Error eliminando el archivo";
        toast.error(msgError, { closeButton: true });
      }
    };

    if (confirmYes) {
      console.log("Se confirmo yes")
      executeRemoveFile();
    }
  } , [confirmYes])

  

  return (
    <>
    <div className="w-full flex justify-between">
      <div className="flex items-center">
        <PaperClipIcon className="w-8 h-8 mr-2 text-gray-500" />
        <p className="text-xs">{tupaFileDescrip}</p>
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          title="Descargar archivo"
          onClick={onClicViewFile}
        >
          <DownloadIcon className="w-5 h-5" />
          <span className="sr-only">Descargar archivo</span>
        </button>

        <button
          type="button"
          className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center "
          title="Eliminar archivo"
          onClick={onClickRemoveFile}
        >
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">Eliminar archivo</span>
        </button>
      </div>
    </div>
    <PopoverYesAndNo openModal={openModalYesAndNo} setOpenModal={setOpenModalYesAndNo} msg={"¿Está seguro de eliminar el archivo?"} setConfirmYes={setConfirmYes}/>
    </>
  );
};
