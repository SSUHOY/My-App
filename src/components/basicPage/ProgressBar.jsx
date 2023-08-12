import { useState } from "react";
import * as S from "../styles/basicPage/basicPageStyles";


export default function ProgressBar({duration, currentTime, handleSeek}) {
  
 
    return (
      <S.StyledProgressInput
      type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        $color="#B672FF"
      />
    );
  }