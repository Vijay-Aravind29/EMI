import React, { useState,useRef } from 'react'
import ReactPlayer from 'react-player'
// import videoFile from "../src/assets/Videos/ms.mp4"
const App = () => {
  const playerRef =useRef(null)
  const [playing,setPlaying]=useState(false)
  const [mute,setMute]=useState(false)
  const [volume,setVolume]=useState(0.5)
  function handlePlay(){
    setPlaying(!playing)
  }
  function handleVolume(){
    setMute(!mute)
  }

  return (
    <div>
      <ReactPlayer
      ref={playerRef}
      // url={videoFile}
      url={"https://www.youtube.com/watch?v=1F3hm6MfR1k"}
      controls={false}
     
      playing={playing}
      volume={volume}
      muted={mute}
      />
      <div>
        <div>
          <input type="range" onChange={(e)=>setVolume(e.target.value)}/>
          <button onClick={handleVolume}>{mute?"Unmute":"Mute"}</button>
          <button onClick={handlePlay}>{playing?"Pause":"play"}</button>

        </div>
      </div>
    </div>
  )
}

export default App
// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import './index.css';
// const App = () => {
//   const playerRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [volume, setVolume] = useState(0.5);
//   const [played, setPlayed] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [ended, setEnded] = useState(false);
//    const handlePlayPause = () => setPlaying(!playing);
   
//   const handleMute = () => setMute(!mute);
//   const handleProgress = (state) => setPlayed(state.played);
//   const handleDuration = (dur) => setDuration(dur);
//   const handleSeek = (e) => {
//     const value = parseFloat(e.target.value);
//     setPlayed(value);
//     playerRef.current.seekTo(value);
//   };
//   const handleEnd = () => {
//     setEnded(true);
//     setPlaying(false);
//   };

//   const formatTime = (sec) => {
//     const min = Math.floor(sec / 60);
//     const seconds = Math.floor(sec % 60);
//     return `${min}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="player-wrapper">
//       <ReactPlayer
//         ref={playerRef}
//         url="https://www.youtube.com/watch?v=1F3hm6MfR1k"
//         playing={playing}
//         muted={mute}
//         volume={volume}
//         onProgress={handleProgress}
//         onDuration={handleDuration}
//         onEnded={handleEnd}
//         width="100%"
//         height="100%"
//         className="react-player"
//       />

//       <div className="controls-overlay">
//         <input
//           type="range"
//           min={0}
//           max={1}
//           step="0.01"
//           value={played}
//           onChange={handleSeek}
//           className="seek-bar"
//         />

//         <div className="control-row">
//           <button onClick={handlePlayPause}>
//             {playing ? '⏸️' : '▶️'}
//           </button>
//           <button onClick={handleMute}>
//             {mute ? '🔇' : '🔊'}
//           </button>
//           <span className="time">
//             {formatTime(played * duration)} / {formatTime(duration)}
//           </span>
//         </div>
//       </div>

//       <input
//         type="text"
//         className="text-box"
//         placeholder="Type something..."
//         onFocus={() => setPlaying(false)}
//       />

//       {ended && <div className="end-message">🎉 Video Ended!</div>}
//     </div>
//   );
// };

// export default App;


// .player-wrapper {
//   position: relative;
//   max-width: 800px;
//   margin: 20px auto;
//   font-family: Arial, sans-serif;
//   background: black;
//   aspect-ratio: 16/9;
// }

// .react-player {
//   position: absolute;
//   top: 0;
//   left: 0;
// }

// .controls-overlay {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   padding: 10px;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
//   color: white;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// }

// .seek-bar {
//   width: 100%;
// }

// .control-row {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .control-row button {
//   font-size: 20px;
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
// }

// .time {
//   font-size: 14px;
// }

// .text-box {
//   display: block;
//   margin: 20px auto;
//   padding: 10px;
//   width: 60%;
//   font-size: 16px;
// }

// .end-message {
//   text-align: center;
//   font-size: 20px;
//   color: green;
//   margin-top: 15px;
//   font-weight: bold;
// }



