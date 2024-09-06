import LogoIcon from "./icons/LogoIcon";


export const ChatMessageBot = ({ message }) => {
  const lines = message.text.split("\n");

  const replaceUrlsWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline-offset-1">
            Clic aquí
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex justify-start`}>
      <div className={`flex items-end space-x-2 flex-row`}>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-200`}
        >
          <LogoIcon className="w-5 h-5 text-gray-600" />
        </div>
        <div className={`max-w-[70%] rounded-lg p-3 bg-gray-200`}>
          {lines.map((line, index) => (
            <p key={index}>{replaceUrlsWithLinks(line)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};