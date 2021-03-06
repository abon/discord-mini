import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <AddCircleRoundedIcon fontSize="large" />
        <form>
          <input placeholder={`Message`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
