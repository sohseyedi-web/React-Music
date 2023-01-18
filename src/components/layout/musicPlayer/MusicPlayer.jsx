import './MusicPlayer.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import * as RiIcon from "react-icons/ri";
import * as FiIcon from "react-icons/Fi";
import {nextMusic, playMusic, prevMusic, randomMusic} from "../../../redux/reducer/index.js";

const MusicPlayer = () => {

  const {song} = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [volume, setVolume] = useState("0.5");
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  useEffect(() => {
    if (ref.current) {
      if (song.isPlaying) {
        ref.current.play();
        ref.current.volume = volume;
      } else {
        ref.current.pause();
      }
    }
  }, [song, volume]);




  return (
      <>
        {song.isActive && (
            <section className={"footer"}>
              <div className="footer-content" key={song.id}>
                <div className="footer-content__left">
                  <img src={song.cover} alt={song.name}/>
                  <div className="footer-content__left-details">
                    <h4>{song.name}</h4>
                    <span>{song.track}</span>
                  </div>
                </div>
                <div className="footer-content__center">
                  <div className="footer-content__center__actions">
                <span onClick={() => dispatch(randomMusic())}>
                  <FiIcon.FiShuffle/>
                </span>
                    <span onClick={() => dispatch(prevMusic(song))}>
                  <FiIcon.FiSkipBack/>
                </span>
                    <span onClick={() => dispatch(playMusic(song))}>
                  {song.isPlaying ? (
                      <RiIcon.RiPauseCircleLine/>
                  ) : (
                      <RiIcon.RiPlayCircleLine/>
                  )}
                </span>
                    <span onClick={() => dispatch(nextMusic(song))}>
                  <FiIcon.FiSkipForward/>
                </span>
                    <span>
                  <FiIcon.FiRepeat/>
                </span>
                  </div>

                  <div className="footer-content__center__line">
                    <input type="range" step="any" value={appTime} min={"0"} max={duration}
                           onChange={(e) => setSeekTime(e.target.value)}/>
                  </div>
                  <div className="footer-content__center__audio">
                    <audio src={song.music} ref={ref} onEnded={() => dispatch(nextMusic(song))}
                           onLoadedData={(e) => setDuration(e.target.duration)}
                           onTimeUpdate={(e) => setAppTime(e.target.currentTime)}/>
                  </div>
                </div>
                <div className="footer-content__right">
                  <input
                      value={volume}
                      type="range"
                      max="1"
                      min="0"
                      className="footer-content__right-slider"
                      onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              </div>
            </section>
        )}
      </>
  );
}

export default MusicPlayer