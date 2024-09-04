import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_API;

const token = JSON.parse(localStorage.getItem("tupaTokens"))?.access;

const searchTupa = async (params) => {
  console.log("se inicia searchTupaService");

  const dataRequest = params;

  try {
    const {
      data: { content },
    } = await axios({
      method: "post",
      baseURL: `${URL}`,
      url: "/search-tupa",
      data: dataRequest,
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Se finaliza searchTupaService");

    return content;
  } catch (error) {
    throw error;
  }
};

const updateTupaDescrip = async (tupaId, tupaDescrip) => {
  try {
    const { data } = await axios({
      method: "put",
      baseURL: `${URL}`,
      url: `/update-tupa-descrip/${tupaId}`,
      data: { tupaDescrip },
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const updateTupaPrecisa = async (tupaId, tupaPrecisa) => {
  try {
    const { data } = await axios({
      method: "put",
      baseURL: `${URL}`,
      url: `/update-tupa-precisa/${tupaId}`,
      data: { tupaPrecisa },
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const insertTupaFile = async (params) => {
  try {
    const { tupaId, archivo, tupaFileDescrip } = params;

    const { data } = await axios({
      method: "post",
      baseURL: `${URL}`,
      url: `/insert-tupa-file`,
      data: { tupaId, archivo, tupaFileDescrip },
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const deleteTupaFile = async (tupaFileId) => {
    try {
        const { data } = await axios({
        method: "delete",
        baseURL: `${URL}`,
        url: `/delete-tupa-file/${tupaFileId}`,
        headers: { Authorization: `Bearer ${token}` },
        });
    
        return data;
    } catch (error) {
        throw error;
    }
}

const deleteTupaItem = async (tupaId) => {
    try {
        const { data } = await axios({
        method: "delete",
        baseURL: `${URL}`,
        url: `/delete-tupa/${tupaId}`,
        headers: { Authorization: `Bearer ${token}` },
        });
    
        return data;
    } catch (error) {
        throw error;
    }
}

export { searchTupa, updateTupaDescrip, updateTupaPrecisa, insertTupaFile, deleteTupaFile, deleteTupaItem };
