import './Song.scss'
import * as RiIcon from 'react-icons/ri'
import {addItemFav, playMusic} from "../../../redux/reducer/index.js";
import {useDispatch} from "react-redux";

const Song = ({song}) => {

  const dispatch = useDispatch();

  return (
      <div className="list" key={song.id}>
        <div className="list__left">
          <img src={song.cover} alt={song.name}/>
          <div className="list__left-details">
            <h4>{song.name}</h4>
            <span>{song.track}</span>
          </div>
        </div>
        <div className="list__right">
          <button
              className={
                song.isFavorite ? "list__right-icon active-fav" : "list__right-icon"
              }
              onClick={() => dispatch(addItemFav(song))}
          >
            {song.isFavorite ? <RiIcon.RiHeart3Fill/> : <RiIcon.RiHeart3Line/>}
          </button>
          <button className="list__right-icon">
            <RiIcon.RiShareLine/>
          </button>
          <button className="list__right-icon" onClick={() => dispatch(playMusic(song))}>
            {song.isPlaying ? (
                <RiIcon.RiPauseCircleLine/>
            ) : (
                <RiIcon.RiPlayCircleLine/>
            )}
          </button>
        </div>
      </div>
  )
}

export default Song