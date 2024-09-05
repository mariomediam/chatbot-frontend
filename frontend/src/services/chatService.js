import axios from 'axios';

const URL = import.meta.env.VITE_REACT_APP_API;
const token = JSON.parse(localStorage.getItem("tupaTokens"))?.access;

const crearChatSession = async () => {
    try {
        const { data: { content } } = await axios.post(`${URL}/chat-session/`, {});
        return content;
    } catch (error) {
        throw error;
    }
};

const preguntarAlChatbot = async (chatSessionId, consulta) => {
    try {
        const { data: { message } } = await axios.post(`${URL}/conversar-pinecone`, { chatSessionId, consulta });
        return message;
    } catch (error) {
        throw error;
    }
};

const obtenerChatMessages = async (chatSessionId) => {
    try {
        const { data: { content } } = await axios.get(`${URL}/chat-session-message?id=${chatSessionId}`);
        return content;
    } catch (error) {
        throw error;
    }
};

const uploadTupa = async (file) => {

    const dataRequest = {
        archivo: file,        
      };
    
      try {
        const { data } = await axios({
          method: "post",
          baseURL: `${URL}`,
          url: "/upload-tupa",
          data: dataRequest,
          headers: {"Content-Type": "multipart/form-data",},
        });
                    
        return data;

      } catch (error) {
        throw error;
      }
          
  };

  const searchChats = async (params) => {

    const dataRequest = params
    
      try {
        const { data } = await axios({
          method: "post",
          baseURL: `${URL}`,
          url: "/search-chats",
          data: dataRequest,
          headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        });
                    
        return data.content;

      } catch (error) {
        throw error;
      }

    }



export {
    crearChatSession,
    preguntarAlChatbot,
    obtenerChatMessages,
    uploadTupa,
    searchChats
};
