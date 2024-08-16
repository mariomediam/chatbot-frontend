import React from "react";
import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import FileTypePdfIcon from "../components/icons/FileTypePdfIcon";

export const ImportProcedure = () => {
  const itemsBreadCrumb = [{ name: "Importar Procedimiento", url: "/import" }];

  return (
    <div className="min-h-screen bg-bg_primary">
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
      </div>
    </div>
  );
};
