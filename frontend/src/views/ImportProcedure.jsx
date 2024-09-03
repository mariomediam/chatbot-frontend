import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { toast, Toaster } from "sonner";

import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import FileTypePdfIcon from "../components/icons/FileTypePdfIcon";
import { uploadTupa } from "../services/chatService";
import { Spinner } from "../components/Spinner";

export const ImportProcedure = () => {
  const navigate = useNavigate();
  
  const [files, setFiles] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  
  const itemsBreadCrumb = [{ name: "Importar Procedimiento", url: "/import" }];

  const readFile = (incommingFiles) => {  
    setFiles(incommingFiles);
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const uploadFile = async () => {
    try {
      if (files.length === 0) {
        toast.error("Debe seleccionar un archivo", {
          closeButton: true,
        });
        return;
      }

      const archivo = files[0].file;
      
      if (archivo.name.split('.').pop().toLowerCase() !== 'pdf') {
        toast.error("Solo se aceptan archivos PDF", {       
          closeButton: true,
        });
        return;
      }
      
      setIsSaving(true);

      await uploadTupa(archivo);

      toast.success("Archivo importado correctamente", {
        duration: Infinity,
        closeButton: true,
      });
    
    } catch (error) {
      toast.error(JSON.stringify(error?.response?.data?.content), {
        duration: Infinity,
        closeButton: true,
      });
    } finally {
      setIsSaving(false);

    }
  };

  const onClickCancel = () => {
    navigate("/main");
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
            <FileTypePdfIcon className="me-2 h-7 w-7" />
            <h1 className="text-2xl font-bold">
              Importar procedimiento administrativo
            </h1>
          </div>
        </div>
        <p className="text-center text-[10px] max-w-[400px] mt-1">
          Permite importar procedimientos administrativos a partir del formato
          PDF registado en el Sistema Único de Trámites (SUT)
        </p>

        <Dropzone
          className="mt-4 max-w-[600px] m-2 "
          minHeight="230px"
          onChange={readFile}
          value={files}
          maxFiles={1}
          label="Suelta el archivo aquí o haz clic para subirlo."
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
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </Dropzone>

        <hr />

        <div>
          <button
            type="button"
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium border border-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 "hover:bg-bg_primary-200 text-gray-900 focus:outline-none rounded-lg`}
            disabled={isSaving}
            onClick={onClickCancel}
          >
            Cancelar
          </button>

          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none `}
            onClick={uploadFile}
            disabled={isSaving}
          >
            Importar
          </button>
        </div>
      </div>
      <Toaster richColors visibleToasts={9} position="top-right" />
      {isSaving && <Spinner />}
    </div>
  );
};
