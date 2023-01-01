import ContentCard from "../contentCard/ContentCard";
import "./Main.css";
import VideoPlayer from "../video-player/VideoPlayer";
import { useState } from "react";

function Main({ data }) {
  const [selectedCardDetail, setSelectedCardDetail] = useState(null);

  //get info of the card selected to set card info at the top
  function setSelectedCardInfo(id) {
    let playerData = data.filter((item) => item[1].EventCode == id);
    setSelectedCardDetail(playerData[0][1]);
  }

  return (
    <div className="mainData">
      {selectedCardDetail ? (
        <VideoPlayer
          selectedCardDetail={selectedCardDetail}
          width="60%"
          height="100%"
        />
      ) : (
        <></>
      )}
      {/* display content card based on array of data */}
      {/* show "no result found" if search input is not found */}
      {data.length ? (
        data.map((item) => {
          return (
            <ContentCard
              src={item[1].EventImageUrl}
              title={item[1].EventTitle}
              language={item[1].EventLanguage}
              id={item[1].EventCode}
              key={item[1].EventCode}
              setSelectedCardInfo={setSelectedCardInfo}
            />
          );
        })
      ) : (
        <h1 className="noResult-message"> No Result Found</h1>
      )}
    </div>
  );
}

export default Main;
