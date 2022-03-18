import Link from "next/link";
import { useState, useEffect } from "react";
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
      src: "https://ppv.mixshare.co.uk:8443/live/SPARTAN/index.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

export default function LiveVideo() {

  const [ipAddress, setIpAddress] = useState("");

  const getIp = async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    setIpAddress(data.ip);
    return data.ip;
  }

  useEffect(() => {
    getIp();
  }, []);

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
      <div>
        <h3>Your IP Address: {ipAddress}</h3>
      </div>
    </>
  );
}
