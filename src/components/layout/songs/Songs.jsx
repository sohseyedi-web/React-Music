import './Songs.scss'
import {useEffect} from "react";
import Song from "../../common/songCard/Song";
import { useSelector} from "react-redux";
import Container from "../../../container/Container";

const Songs = () => {
  const {dataItem} = useSelector((state) => state.music);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dataItem]);
  return (
      <Container>
        <section className={"songs container"}>
          {dataItem.map((song) => (
              <Song
                  song={song}
                  key={song.id}

              />
          ))}
        </section>
      </Container>
  )
}

export default Songs