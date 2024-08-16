import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import AuthContext from "../context/AuthContext";
import imgLogo from "../assets/logo.png";
import imgSideLogin from "../assets/side-login.jpg";
import { AlertError } from "../components/alerts/AlertError";

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
        setErrorMessage(error.response.data.detail);
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
              <p class="text-5xl font-extrabold text-center">TupaBot</p>
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
                        <div
                          role="status"
                          className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-12 h-12 text-gray-200 animate-spin fill-primary"
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
                          <span className="sr-only">Loading...</span>
                        </div>
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
