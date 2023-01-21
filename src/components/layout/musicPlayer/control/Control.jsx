import React, {useState, useRef} from 'react';
import {nextMusic, playMusic, prevMusic, randomMusic} from "../../../../redux/reducer/index";
import * as FiIcon from "react-icons/fi";
import * as RiIcon from "react-icons/ri";
import {useDispatch} from "react-redux";

const Control = ({song}) => {
    const ref = useRef(null);
    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;


    if (ref.current) {
        if (song.isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    const dispatch = useDispatch();

    return (
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
                <input onInput={(e) => {
                    setSeekTime(e.target.value);
                }} type="range" step="any"
                       value={appTime} min="0" max={duration}
                />
            </div>
            <div className="footer-content__center__audio">
                <audio src={song.music} ref={ref} onEnded={() => dispatch(nextMusic(song))}
                       onLoadedData={(e) => setDuration(e.target.duration)}
                       onTimeUpdate={(e) => setAppTime(e.target.currentTime)}/>
            </div>
        </div>
    );
};

export default Control;
