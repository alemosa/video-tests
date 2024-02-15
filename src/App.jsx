import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import "./App.css";
import { useState } from "react";

function App() {
    const [videoType, setVideoType] = useState("vidstack");
    const storageId = "cfecb9f1-6f5e-48cc-a78f-4d174acf5883";
    const videoUrl = `https://cdn.rackety.tv/${storageId}/original`;
    //const previewUrl = `https://cdn.rackety.tv/${storageId}/preview.webp`;
    return (
        <>
            <h1>Vidstack playground</h1>
            <div>
                {videoType === "vidstack" && (
                    <MediaPlayer
                        title="Sprite Fight"
                        src={{ src: videoUrl, type: "video/mp4" }}
                        aspectRatio="16/9"
                        load="visible"
                        streamType={"on-demand"}
                    >
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>
                )}
                {videoType === "html" && (
                    <video width={"100%"} controls>
                        <source src={videoUrl} type={"video/mp4"}></source>
                    </video>
                )}
            </div>
            <button onClick={() => setVideoType("vidstack")}>Vidstack</button>
            <button onClick={() => setVideoType("html")}>HTML</button>
        </>
    );
}

export default App;
