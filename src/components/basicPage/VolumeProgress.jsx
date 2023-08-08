import React, { useState } from 'react'
import * as S from './volumeBlock.styles'

const VolumeProgress = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value
    onVolumeChange(shiftVolume)
  }

  return (
    <S.StyledVolumeProgress>
      <S.StyledVolumeProgressLine
        type="range"
        name="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        $progress={volume}
      />
    </S.StyledVolumeProgress>
  )
}

export default VolumeProgress