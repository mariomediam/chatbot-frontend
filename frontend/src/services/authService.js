import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_API;

const login = async (username, password) => {
  const dataRequest = {
    username,
    password,
  };

  try {
    const { data } = await axios({
      method: "post",
      baseURL: `${URL}`,
      url: "/login",
      data: dataRequest,
    });
    return data;
  } catch (error) {
    throw error;
  }

  return dataRequest;
};

export { login };
