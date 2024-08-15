import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import AuthContext from "../context/AuthContext";
import imgLogo from "../assets/logo.png";
import imgSideLogin from "../assets/side-login.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    setAuthContextLogin,
    userName: userNameContext,
    tokenEsValido,
  } = useContext(AuthContext);

  const onClickLogin = async () => {
    try {
      const response = await login(username, password);
      await setAuthContextLogin(
        username.toUpperCase(),
        JSON.parse(localStorage.getItem("tupaTokens")),
        ""
      );
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tokenEsValido()) {
      navigate("/main");
    }
  }, []);

  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center">
      <div className="w-full max-w-6xl shadow-2xl">
        <div className="grid h-screen max-h-[700px] grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          <div className="bg-bg_primary  flex justify-center items-center p-3">
            <div>
              <img src={imgLogo} alt="logo" className="max-h-56" />
              <div className="mt-5">
                <h1 className="font-bold">Ingrese a su cuenta</h1>
                <label htmlFor="first_name" className="block mt-3 text-xs">
                  Usuario
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-current rounded p-1 bg-bg_primary w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <label htmlFor="first_name" className="block mt-3 text-xs">
                  Contraseña
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-current rounded p-1 bg-bg_primary w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="first_name" className="block text-end text-xs">
                  ¿Has olividado tu contraseña?
                </label>

                <div className="flex justify-center items-center mt-6">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-primary hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
                    onClick={onClickLogin}
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-600">
            <img
              src={imgSideLogin}
              alt="logo"
              className="object-cover h-[700px] w-[1500px]"
            />
            {/* <p>HOla</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
