import { useEffect} from "react";
import { initFlowbite } from "flowbite";
import { ChatMessageQuery } from "./ChatMessageQuery";
import { ChatMessageResult } from "./ChatMessageResult";


export const ChatSearchItem = ({ conversation }) => {
  const {
    chatSessionId,
    chatSession_chatSessionMessages: chatMessages,
    chatSessionDate,
  } = conversation;

  let firstMessage = "";

  if (chatMessages.length > 0) {
    firstMessage = chatMessages[0].chatSessionMessageQuery;
  }

  useEffect(() => {
    initFlowbite();
  }, []);

  
  return (
    
      <div className="mt-6 w-full max-w-2xl">
        <div
          id={`accordion-color-${chatSessionId}`}
          data-accordion="collapse"
          data-active-classes="bg-bg_primary"
        >
          <h2 id={`accordion-color-heading-${chatSessionId}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-bg_primary-300 rounded-t-xl focus:ring-4 focus:bg_primary  bg-bg_primary-200  gap-3 text-left"
              data-accordion-target={`#accordion-color-body-${chatSessionId}`}
              // aria-expanded="true"
              aria-controls={`accordion-color-body-${chatSessionId}`}
            >
              <div className="me-0 pe-0">
                <p className="text-xs m-0 p-0">{firstMessage.trim()}</p>
                <p className="text-xs m-0 p-0 text-gray-600">
                  {chatSessionDate}
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-color-body-${chatSessionId}`}
            className="hidden"
            aria-labelledby={`accordion-color-heading-${chatSessionId}`}
          >
            <div className="p-5 border border-bg_primary-300 dark:border-gray-700 dark:bg-gray-900">
              
              { chatMessages.map((message, index) => (
                <div key={index} className="mt-2">
                    <div className="flex justify-end mb-3">
                  <ChatMessageQuery chatSessionMessageQuery={message.chatSessionMessageQuery} className="bg-bg_primary-800  text-bg_primary-100 p-2 max-w-xl rounded-lg text-xs"/>

                    </div>
                  <ChatMessageResult chatSessionMessageResult={message.chatSessionMessageResult} className="bg-bg_primary-200 text-bg_primary-950 p-2 max-w-xl rounded-lg text-xs"/>
                </div>
                ))


              }
            </div>
          </div>
        </div>
      </div>
    
  );
};
