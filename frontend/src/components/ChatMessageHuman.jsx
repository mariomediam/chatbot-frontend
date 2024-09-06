import React from "react";
import { UserIcon } from "./icons/UserIcon";

export const ChatMessageHuman = ({message}) => {
  return (
    <div
      className={`flex justify-end`}
    >
      <div
        className={`flex items-end space-x-2 flex-row-reverse space-x-reverse`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue-500`}
        >
          
            <UserIcon className="w-5 h-5 text-white" />
          
        </div>
        <div
          className={`max-w-[70%] rounded-lg p-3 bg-blue-500 text-white`}
        >
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};
