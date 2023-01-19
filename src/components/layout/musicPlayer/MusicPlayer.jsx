import './MusicPlayer.scss'
import { useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

import Control from "./control/Control";

const MusicPlayer = () => {

    const {song} = useSelector((state) => state.music);
    const ref = useRef(null)
    const [volume, setVolume] = useState("0.5");

    useEffect(() => {
        ref.current.volume = volume
    },[volume])


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
                        <Control song={song}/>
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