import './TopSongs.scss'
import * as RiIcon from 'react-icons/ri'
import {useDispatch, useSelector} from "react-redux";
import {addItemFav, playMusic} from "../../../redux/reducer/index.js";

const TopSongs = () => {

    const {dataItem} = useSelector((state) => state.music)
    const topArtist = dataItem.filter((item) => item.number <= 6);
    const dispatch = useDispatch()

    return (
        <section className="top">
            <div className="container top-container">
                <div className="top-container__title">آهنگ های پرطرفدار</div>
                <hr/>
                <div className="top-container__box">
                    {
                        topArtist.map((song) => (
                            <div className={"top-container__box-item"} key={song.id}>
                                <img src={song.cover} alt={song.name}/>
                                <div className="top-container__box-item__title">
                                    <h5>{song.name}</h5>
                                    <p>{song.track}</p>
                                </div>
                                <div className="top-container__box-item__action">
                                    <button>+Follow</button>
                                    <div className="top-container__box-item__action-icon">
                                        <span onClick={() => dispatch(addItemFav(song))} className={song.isFavorite && "fav-icon"}>
                                            {
                                                song.isFavorite ? <RiIcon.RiHeart3Fill size={26}/> :
                                                    <RiIcon.RiHeart3Line size={26}/>
                                            }
                                        </span>
                                        <span><RiIcon.RiShareLine size={26}/></span>
                                        <span onClick={() => dispatch(playMusic(song))}>
                                            {song.isPlaying ? (
                                                <RiIcon.RiPauseCircleLine size={26}/>
                                            ) : (
                                                <RiIcon.RiPlayCircleLine size={26}/>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TopSongs