import Link from "next/link";
import Videojs from "./Video.jsx";
import style from "../../styles/VideoPlayer.module.css";
import youtube from "videojs-youtube";

const videoJsOptions = {
  stream: true,
  autoplay: true,
  fluid: true,
  fill: true,
  playsinline: true,
  responsive: true,
  controls: true,
  breakpoints: {
    medium: 500,
    large: 1100
  },
  preload: "auto",
  loop: true,
  videoJsOptions: {
    plugins: {
      youtube,
    },
  },
  sources: [
    {
      src: "http://135.181.101.168:8000/live/SPARTAN/index.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

export default function LiveVideo() {
  return (
    <>
      <head>
        <link
          href="https://vjs.zencdn.net/7.11.4/video-js.css"
          rel="stylesheet"
        />
      </head>

      <main className={style.main}>
        <h1> Live Video </h1>
        <div className={style.videoBox}>
          <Videojs {...videoJsOptions} />
        </div>
      </main>
    </>
  );
}
