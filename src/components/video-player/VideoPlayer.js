import React from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoPlayer.css";

function VideoPlayer({ selectedCardDetail, width, height }) {
  return (
    <div className="card-info-wrapper">
      <ReactPlayer
        url={selectedCardDetail.TrailerURL}
        width={width}
        height={height}
      />
      <div className="card-info">
        <span className="infoText">
          Title : {selectedCardDetail.EventTitle}
        </span>
        <span className="infoText">
          Language : {selectedCardDetail.EventLanguage}
        </span>
        <span className="infoText">
          Genre : {selectedCardDetail.EventGenre}
        </span>
        <span className="infoText">
          Release Date : {selectedCardDetail.DispReleaseDate}
        </span>
      </div>
    </div>
  );
}

export default VideoPlayer;
