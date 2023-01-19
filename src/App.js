import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Auth from './components/auth/Auth';
import Fav from './components/favArtist/Fav';
import Songs from './components/layout/songs/Songs';
import Container from "./container/Container";

function App() {
    return (
            <Container>
                <Routes>
                    <Route path='/' element={<Layout/>}/>
                    <Route path='/songs' element={<Songs/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                    <Route path="/fav" element={<Fav/>}/>
                </Routes>
            </Container>
    );
}

export default App;
