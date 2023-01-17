import Container from '../../container/Container'
import Artists from './artists/Artists'
import TopSongs from './topSong/TopSongs'

const Layout = () => {
  return (
    <Container>
        <Artists/>
        <TopSongs/>
    </Container>
  )
}

export default Layout