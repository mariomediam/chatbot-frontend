import { UserIcon } from "../icons/UserIcon"

export const ChatMessageQuery = ({chatSessionMessageQuery, className}) => {
  return (
    <div className={`flex align-top gap-2 ${className}`}>
        <div>{chatSessionMessageQuery}</div>
        <div><UserIcon className="w-6 h-6 stroke-1" /></div>
        
    
    </div>
  )
}
