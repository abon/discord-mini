import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          @abon <span className="message__timestamp">this is timestamp</span>
        </h4>
        <p>this is message</p>
      </div>
    </div>
  );
};

export default Message;
