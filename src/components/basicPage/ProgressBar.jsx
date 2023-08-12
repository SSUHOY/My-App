import { useState } from "react";
import * as S from "../styles/basicPage/basicPageStyles";


export default function ProgressBar({duration, currentTime, onTimeChange}) {
  
    const handleTimeChange = (event) => {
      const newTime = parseFloat(event.target.value)
      console.log(duration)
      // setCurrentTime(newTime)
      onTimeChange(newTime)
    }
  
  
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