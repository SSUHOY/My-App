import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const PlayListItem = ({ title, artist, album, time, item, loading }) => {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
            </div>
            <div className="track__title-text">
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <a className="track__title-link" href="http://">
                {' '}
                {item?.title}{' '}
                <span className="track__title-span">
                  {item?.subtitle ? `(${item?.subtitle})` : ''}
                </span>
              </a>
            )}
            </div>
          </div>
          <div className="track__author">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <a className="track__author-link" href="http://">
              {item?.author}
            </a>
          )}
          </div>
          <div className="track__album">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <a className="track__album-link" href="http://">
              {item?.album}
            </a>
          )}
          </div>
          <div className="track__time">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <>
              {' '}
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">{item?.time}</span>
            </>
          )}
          </div>
        </div>
      </div>
    )
  }
  export default PlayListItem
  