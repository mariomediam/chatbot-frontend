import axios from 'axios';

const URL = import.meta.env.VITE_REACT_APP_API;

const token = JSON.parse(localStorage.getItem("tupaTokens")).access

const searchTupa = async (params) => {

    console.log("se inicia searchTupaService");

    const dataRequest = params;

    try {
        const { data : { content } } = await axios({
          method: "post",
          baseURL: `${URL}`,
          url: "/search-tupa",
          data: dataRequest,
          headers: { Authorization: `Bearer ${token}` }
        });

        console.log("Se finaliza searchTupaService");

        return content;
      } catch (error) {
        throw error;
      }
    
      
};


export {
    searchTupa
};
