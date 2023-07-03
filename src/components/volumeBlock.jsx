import VolumeImg from './volumeImg'
import VolumeProgressBtn from './volumeProgress'

const VolumeBlock = () => {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <VolumeImg />
        <VolumeProgressBtn />
      </div>
    </div>
  )
}
export default VolumeBlock