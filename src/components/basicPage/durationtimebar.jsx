import { formatTime } from "../../utils/formatTime"
import { StyledProgressBarTime } from "../styles/basicPage/basicPageStyles"

export const ProgressBarTime = ({ currentTime, duration }) => {

  return (
    <StyledProgressBarTime>
      <span>{formatTime(currentTime)}</span>{'/'}
      <span>{formatTime(duration)} </span>
    </StyledProgressBarTime>
  )
}
