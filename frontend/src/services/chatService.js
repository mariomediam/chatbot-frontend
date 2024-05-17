import axios from 'axios';

const URL = `https://chatbot-backend-u0zq.onrender.com`;

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



export {
    crearChatSession,
    preguntarAlChatbot,
    obtenerChatMessages
};
