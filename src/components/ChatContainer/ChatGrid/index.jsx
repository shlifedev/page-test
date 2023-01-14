import scss from "./index.module.scss";
import React, { useState } from "react";

const chats = [
  {
    id: 0,
    message: "Hello",
    user: {
      name: "Jeccica Tino",
      thumbnail: "",
    },
  },
  {
    id: 1,
    message: "Hello!",
    user: {
      name: "Me",
      thumbnail: "",
    },
  },
];
export default function ChatGrid({children}) { 

  return (
    <div className={scss.grid}>
      <div className={scss.chatbox}>
         {children}
      </div>
    </div>
  );
}
