import { formatTime } from "../../utils/formatTime"
import { StyledProgressBarTime } from "../styles/basicPage/basicPageStyles"

const ProgressBarTime = ({ currentTime, duration }) => {

  return (
    <StyledProgressBarTime>
      <span>{formatTime(currentTime)}</span>{'/'}
      <span>{formatTime(duration)} </span>
    </StyledProgressBarTime>
  )
}
export default ProgressBarTime