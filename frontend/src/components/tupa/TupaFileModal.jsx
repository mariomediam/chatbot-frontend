import { useEffect, useRef, useState } from "react";
import { Modal } from "flowbite-react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { toast } from "sonner";

import { useTupaStore } from "../../store/tupaStore";
import { PaperClipIcon } from "../icons/PaperClipIcon";

export const TupaFileModal = ({ openModal, setOpenModal }) => {
  const currentTupa = useTupaStore((state) => state.currentTupa);
  const addTupaFile = useTupaStore((state) => state.addTupaFile);
  const filterSearch = useTupaStore((state) => state.filterSearch);
  const fecthTupa = useTupaStore((state) => state.fetchTupa);
  const isLoading = useTupaStore((state) => state.isLoading);

  const [files, setFiles] = useState([]);

  const textFileDescrip = useRef(null);

  const { tupaId } = currentTupa;

  const readFile = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  useEffect(() => {
    if (openModal) {
      setFiles([]);
    }
  }, [openModal]);

  const onClickUpdateDescrip = async () => {
    try {

      if (textFileDescrip.current.value.trim().length === 0) {        
        textFileDescrip.current.focus();
        toast.error("Debe ingresar descripción del archivo", {
          closeButton: true,
        });
        return;
      }

      if (files.length === 0) {
        toast.error("Debe seleccionar un archivo", {
          closeButton: true,
        });
        return;
      }

      const archivo = files[0].file;
      const fileExtension = archivo.name.split('.').pop().toLowerCase();
      
      if (!['pdf'].includes(fileExtension)) {
        toast.error("Solo se aceptan archivos PDF", {       
          closeButton: true,
        });
        return;
      }

      await addTupaFile({ tupaId, tupaFileDescrip: textFileDescrip.current.value, archivo });
      await fecthTupa(filterSearch.option, filterSearch.search);
      
      setOpenModal(false);
      toast.success("Archivo agregado con exito", {
        closeButton: true,
      });
    } catch (error) {
      const msgError = JSON.stringify(error?.response?.data?.message) || "Error al grabar archivo";
      toast.error(msgError, { closeButton: true });
    }
  };
  return (
    <div className="bg-bg_primary opacity-100">
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size={"2xl"}
        className={`${isLoading ? "pointer-events-none" : ""}`}
      >
        <Modal.Header className="bg-bg_primary border-bg_primary-300">
          <div
            className={`flex ${isLoading ? "text-gray-500" : "text-gray-900"} `}
          >
            <PaperClipIcon className="w-6 h-6 me-1" />
            <h3 className="text-lg font-medium  dark:text-white">
              Agregar archivo o formato a procedimiento administrativo
            </h3>
          </div>
        </Modal.Header>
        <Modal.Body className="bg-bg_primary">
          <div className="">
            {/* ************************** DESCRIPCION ********************* */}
            <label
              htmlFor="message"
              className="block text-xs mb-2 font-medium text-gray-500 dark:text-white"
            >
              Descripción del archivo o formato
            </label>
            <textarea
              id="message"
              rows="4"
              
              //   value={currentTupa.tupaDescrip}
              //   disabled
              className={`block m-0 w-full text-sm bg-bg_primary-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
                isLoading ? "text-gray-500" : "text-gray-900"
              }`}
              placeholder="Escribe la descripción del archivo aquí..."
              ref={textFileDescrip}
            ></textarea>

            <Dropzone
              className="mt-4 w-full"
              minHeight="230px"
              onChange={readFile}
              value={files}
              maxFiles={1}
              label="Suelta el archivo aquí o haz clic para subirlo."
              // accept=".pdf, image/jpeg"
              accept=".pdf"
              headerConfig={{ validFilesCount: false, deleteFiles: false }}
              footerConfig={{
                customMessage: "Solo se aceptan archivos PDF",
              }}
              localization="ES-es"
              multiple={false}
              behaviour={"replace"}
              // disabled={isSaving}
              background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
              // style={{ width: "400px" }}
            >
              {files.map((file) => (
                <FileMosaic
                  key={file.id}
                  {...file}
                  onDelete={removeFile}
                  info
                />
              ))}
            </Dropzone>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-bg_primary border-bg_primary-300  py-4">
          <div className="w-full flex justify-end">
            <button
              type="button"
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium border border-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 hover:bg-bg_primary-200 focus:outline-none rounded-lg ${
                isLoading ? "cursor-not-allowed text-gray-500" : "text-gray-900"
              }`}
              disabled={isLoading}
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </button>

            <button
              type="button"
              className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                isLoading
                  ? "cursor-not-allowed bg-blue-400 "
                  : " bg-blue-700 hover:bg-blue-800"
              } `}
              onClick={onClickUpdateDescrip}
              disabled={isLoading}
            >
              {isLoading ? (
                <div role="status">
                  Grabando
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300 ms-2"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Grabando...</span>
                </div>
              ) : (
                "Grabar"
              )}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
