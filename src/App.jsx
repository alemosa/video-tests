import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import "./App.css";

function App() {
    const storageId = "3aeecea8-1035-45a7-8afb-88123b49f84a";
    const videoUrl = `https://cdn.rackety.tv/${storageId}/original`;
    //const previewUrl = `https://cdn.rackety.tv/${storageId}/preview.webp`;
    return (
        <>
            <h1>Vidstack playground</h1>
            <div>
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
            </div>
        </>
    );
}

export default App;
