import { playTrack, setTrack } from "../../store/actions/creators/tracks";

export const handlePlayTrack = (track) => {
    dispatch(setTrack(track));
    dispatch(playTrack());
    console.log("Play");
  };
  
    