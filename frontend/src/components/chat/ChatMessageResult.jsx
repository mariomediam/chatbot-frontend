import LogoIcon from "../icons/LogoIcon"

export const ChatMessageResult = ({chatSessionMessageResult, className}) => {
  return (
    <div className={`flex align-top gap-2 ${className}`}>
        <div><LogoIcon className="w-6 h-6 stroke-1" /></div>
        <div>{chatSessionMessageResult}</div>
        
    
    </div>
  )
}
