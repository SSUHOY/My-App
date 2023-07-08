import BarPlayer from './barPlayer'
import VolumeBlock from '../volumeBlock/volumeBlock'

const BarContentForm = () => {
  return (
    <div className="bar">
  <div className="bar__content">
    <div className="bar__player-progress"></div>
    <div className="bar__player-block">
      <BarPlayer />
      <VolumeBlock />
    </div>
  </div>
    </div>
  
  )
}

export default BarContentForm
