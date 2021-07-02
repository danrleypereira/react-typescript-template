import React from "react";

// import ReactPlayer from "react-player";

interface Props {
  name: string;
}

const Player: React.FC<Props> = (props) => {
  return (
    <>
      <h1> Player</h1>
      <iframe src="http://127.0.0.1:5000/video_feed"
        name="vistoria-pro" width="800" height="450"
        scrolling="no" frameBorder="0" allowFullScreen={true}
      ></iframe>
      {/* <iframe src="http://streaming.vistoriapro.com.br/stream/VideoTeste1.ogg"
        name="vistoria-pro" width="800" height="450"
        scrolling="no" frameBorder="0" allowFullScreen={true}
      ></iframe> */}
      <img src="http://127.0.0.1:5000/video_feed" width="100%"></img>
    </>
  );
};

export default Player;
