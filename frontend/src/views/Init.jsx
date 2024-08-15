import { Header } from "../components/Header";

import imgLogo from "../assets/logo.webp";

export const Init = () => {
  return (
    <div className="bg-bg_primary  flex flex-col h-screen">
      <Header />
      <div className="flex my-5 flex-grow justify-center items-center">
        <img src={imgLogo} alt="Logo" className="max-h-[300px]" />
      </div>
      
    </div>
  );
};
