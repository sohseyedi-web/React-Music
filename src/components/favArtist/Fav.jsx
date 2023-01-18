import './Fav.scss'
import Container from "../../container/Container";
import {useSelector} from "react-redux";
import Song from "../common/SongCard/Song.jsx";

const Fav = () => {

  const {dataItem} = useSelector((state) => state.music)
  const filterFavItem = dataItem.filter((i) => i.isFavorite === true);


  return (
      <Container>
        <div className="fav container">
          {
            filterFavItem.length === 0 ?
                <div className={"text-center text-white pt-5"}> هیچ آهنگ موردعلاقه ای نداری ...</div>
                : (
                    filterFavItem.map((song) => (
                        <Song key={song.id} song={song}/>
                    ))
                )
          }
        </div>
      </Container>
  )
}

export default Fav