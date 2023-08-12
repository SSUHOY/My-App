import { formatTime } from "../../utils/formatTime"
import { StyledProgressBarTime } from "../styles/basicPage/basicPageStyles"

const ProgressBarTime = ({ currentTime, totalTime }) => {
  return (
    <StyledProgressBarTime>
      <span>{formatTime(currentTime)}</span> /{' '}
      <span>{formatTime(totalTime)}</span>
    </StyledProgressBarTime>
  )
}
export default ProgressBarTime