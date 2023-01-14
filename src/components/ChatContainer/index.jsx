import ChatBubble from "./ChatBubble";
import ChatGrid from "./ChatGrid";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import scss from "./index.module.scss";
import React, { useRef } from "react";

export default function ChatContainer() {
  const [messages, setMessages] = React.useState([
    {
      id : -Number.MIN_VALUE,
      message : "Hey, This is just test message. You Interesting new job?",
      includedImages : [],
      includedFiles : [],
      sender : {
        name : 'Anni Caller',  
        thumbnail : 'https://i.discogs.com/YCopd9B5j4KEu0_mA-L8GirzXpRoHKAFJjDEkntsRTM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMjYz/MDYtMTU5NzMzMjM5/Mi03MzMwLmpwZWc.jpeg'
      }
    }
  ]);

  const tempMessageId = useRef(0);
  const handleSubmit = inputValue => {   
    tempMessageId.current++; 
    setMessages([...messages, {
      id : tempMessageId.current,
      message : inputValue,
      includedFiles : [],
      includedImages : [],
      sender : {
        name : 'Me',
        thumbnail : 'https://i.discogs.com/YCopd9B5j4KEu0_mA-L8GirzXpRoHKAFJjDEkntsRTM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMjYz/MDYtMTU5NzMzMjM5/Mi03MzMwLmpwZWc.jpeg'
      }
    }]); 
    console.log(messages);
  }
  return (
    <div className={scss.container}>
      <ChatHeader/>
      <ChatGrid>  
        {
          messages.map(msgInfo=> <ChatBubble
          receive={msgInfo.sender.name.toLowerCase() === 'me' ? false : true}
          text={msgInfo.message}
          key={msgInfo.id}
          thumbnail={msgInfo.sender.thumbnail}
          />)
        } 
      </ChatGrid>
      <ChatInput onSubmit={handleSubmit}/>
    </div>
  );
}
