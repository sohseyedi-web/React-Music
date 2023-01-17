import React from 'react'
import MusicPlayer from '../components/layout/musicPlayer/MusicPlayer'
import Navbar from '../components/layout/navbar/Navbar'

const Container = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <MusicPlayer/>
    </>
  )
}

export default Container