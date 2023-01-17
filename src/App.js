import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Auth from './components/auth/Auth';
import Fav from './components/favArtist/Fav';
import Songs from './components/layout/songs/Songs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/songs' element={<Songs/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path="/fav" element={<Fav/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
