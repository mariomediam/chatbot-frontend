import { useState, useEffect } from "react";
import { crearChatSession, preguntarAlChatbot } from "../services/chatService";

import { ChatMessageBot } from "./ChatMessageBot";
import { ChatMessageHuman } from "./ChatMessageHuman";

import { SendIcon } from "./icons/SendIcon";
import LogoIcon from "./icons/LogoIcon";
import { LoaderIcon } from "./icons/LoaderIcon";

export const Chat = () => {

  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy TupaBot. ¿En qué puedo ayudarte hoy?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [chatSessionId, setChatSessionId] = useState(undefined)

  const handleSend = async () => {
    sendQuestion();    
  };

  const sendQuestion = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, isBot: false }]);
      setInput("");
      setIsThinking(true);

      const response = await preguntarAlChatbot(chatSessionId, input);
      console.log(response);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
      setIsThinking(false);
    }
  }


  useEffect(() => {
    // Scroll to bottom of message list when new messages are added
    const messageList = document.getElementById("message-list");
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const iniciarChat = async () => {
      const chatSessionId = await crearChatSession();
      setChatSessionId(chatSessionId);
    }
    iniciarChat();
  }, [])



  return (
    <div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="bg-blue-600 text-white p-4 flex items-center">
        <LogoIcon className="w-6 h-6 mr-2" />
        <h1 className="text-lg font-semibold">TupaBot Municipalidad de ...</h1>
      </div>
      <div id="message-list" className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index}>
          {message.isBot ? (
            <ChatMessageBot  message={message} />
          ) : (
            <ChatMessageHuman  message={message} />
          )
          }
          </div>
        ))}
        {isThinking && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                <LoaderIcon className="w-4 h-4 text-gray-200 fill-blue-600" />
              </div>
              <div className="max-w-[70%] rounded-lg p-3 bg-gray-200">
                <p>Pensando...</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border-t p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ingrese su consulta..."
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isThinking || !chatSessionId}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isThinking || !chatSessionId}
          >
            <SendIcon className="w-5 h-5" />

          </button>
        </div>
      </div>
      
    </div>
  );
};
