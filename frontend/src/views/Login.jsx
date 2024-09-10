import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import AuthContext from "../context/AuthContext";
import imgLogo from "../assets/logo.png";
import imgSideLogin from "../assets/side-login.jpg";
import { AlertError } from "../components/alerts/AlertError";
import { Spinner } from "../components/Spinner";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const {
    setAuthContextLogin,
    userName: userNameContext,
    tokenEsValido,
  } = useContext(AuthContext);

  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      if (username.toString().toLowerCase() === "demo") {
        setErrorMessage("Usuario o contraseña incorrectos");
        return;
      }
      setIsLoading(true);
      const response = await login(username, password);
      await setAuthContextLogin(
        username.toUpperCase(),
        JSON.parse(localStorage.getItem("tupaTokens")),
        ""
      );
      navigate("/main");
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Usuario o contraseña incorrectos");
      } else {
        setErrorMessage(error?.response?.data?.detail);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tokenEsValido()) {
      navigate("/main");
    }
  }, []);

  useEffect(() => {
    setErrorMessage(undefined);
  }, [username, password]);

  return (
    <div
      className={`flex bg-gray-100 h-screen justify-center items-center  ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } `}
    >
      <div className="w-full max-w-6xl shadow-2xl">
        <div className="grid h-screen max-h-[700px] grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          <div className="bg-bg_primary flex justify-center items-center px-3 py-2">
            <div>
              <div className="flex justify-center items-center">
                <img src={imgLogo} alt="logo" className="max-h-56" />
              </div>
              <p className="text-5xl font-extrabold text-center">TupaBot</p>
              <div className="mt-5">
                <h1 className="font-bold">Ingrese a su cuenta</h1>
                <form onSubmit={onClickLogin}>
                  <label htmlFor="username" className="block mt-3 text-xs">
                    Usuario
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border border-current rounded p-1 bg-bg_primary w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="off"
                  />

                  <label htmlFor="first_name" className="block mt-3 text-xs">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border border-current rounded p-1 bg-bg_primary w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  <label
                    htmlFor="first_name"
                    className="block text-end text-xs"
                  >
                    ¿Has olividado tu contraseña?
                  </label>

                  <div className="flex justify-center items-center ">
                    {errorMessage && (
                      <AlertError
                        message={errorMessage}
                        className="px-2 mt-4 "
                      />
                    )}
                  </div>

                  <div className="flex justify-center items-center mt-6">
                    <button
                      type="submit"
                      className="focus:outline-none text-white bg-primary hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
                    >
                      Ingresar
                      {isLoading && (
                        <Spinner />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-yellow-600">
            <img
              src={imgSideLogin}
              alt="logo tupa bot"
              className="object-cover h-[700px] w-[1500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
