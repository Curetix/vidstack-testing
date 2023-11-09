import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export default function Player() {
  return (
    <MediaPlayer
      src="https://media-files.vidstack.io/1080p.mp4"
      style={{ width: 640, height: 360 }}
    >
      <MediaProvider>
        <Poster
          className="vds-poster"
          src="https://media-files.vidstack.io/poster.png"
          alt="Thumbnail"
        />
      </MediaProvider>
      <DefaultVideoLayout
        smallLayoutWhen={false}
        thumbnails="https://media-files.vidstack.io/thumbnails.vtt"
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
