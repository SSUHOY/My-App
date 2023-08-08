import { StyledProgressBarTime } from "../styles/basicPage/basicPageStyles"
// import { formatTime } from 'utils'

const ProgressBarTime = ({ currentTime, totalTime }) => {
  return (
    <StyledProgressBarTime>
      <span>{(currentTime)}</span> /{' '}
      <span>{(totalTime)}</span>
    </StyledProgressBarTime>
  )
}
export default ProgressBarTime