import scss from "./index.module.scss";

import React from "react";

export default function ChatBubble({ text, thumbnail, receive }) {
  const Profile = () => {
    if (receive) {
      return (
        <div className={scss.profile}>
          <img src={thumbnail} alt="thumbnail" className={scss.thumbnail}/>
        </div>
      );
    }
    return null;
  };

  const Message = () => {
    return (
      <div className={scss.message} receive={receive ? "true" : "false"}>
        <div className={scss.row}>{text}</div>
      </div>
    );
  };
  
  return (
    <div className={[scss.line, receive ? scss.receive : null].join(" ")}>
      <div className={scss.bubble}>
        <Profile></Profile>
        <Message></Message>
      </div>
    </div>
  );
}
