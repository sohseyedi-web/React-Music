import './Songs.scss'
import {useEffect} from "react";
import Song from "../../common/songCard/Song";
import { useSelector} from "react-redux";

const Songs = () => {
  const {dataItem} = useSelector((state) => state.music);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <section className={"songs container"}>
          {dataItem.map((song) => (
              <Song
                  song={song}
                  key={song.id}

              />
          ))}
        </section>
  )
}

export default Songs