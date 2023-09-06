import { formatTime } from "../../utils/formatTime";
import * as S from "../styles/basicPage/basicPageStyles";


export default function ProgressBar({duration, currentTime, handleSeekTrackTime}) {
  console.log(currentTime);
      return (
      <S.StyledProgressInput
      type="range"
      min='0'
        step={currentTime}
        max={duration}
        onChange={handleSeekTrackTime}
        $color="#B672FF"
      />
    );
  }