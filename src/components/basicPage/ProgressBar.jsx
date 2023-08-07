import { useState } from "react";
import * as S from "../styles/basicPage/basicPageStyles";


export default function ProgressBar() {
    const [currentTime, setCurrentTime] = useState(70);
    const duration = 230;
  
    return (
      <S.StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        $color="#B672FF"
      />
    );
  }