import React from 'react'
import CardTvShowData from './CardTvShowData'
import CardMovieData from './CardMovieData'
import CardTvShow from './CardTvShow'
import CardMovie from './CardMovie'

const MenuOfWatchList = () => {
  return (
    <div className='home-cards'>
        <CardTvShow details={CardTvShowData}/>
        <CardMovie details={CardMovieData}/>
    </div>
    
  )
}

export default MenuOfWatchList