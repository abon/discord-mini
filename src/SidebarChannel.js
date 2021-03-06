import React from "react";
import "./SidebarChannel.css";

const SidebarChannel = ({ id, channelName }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
