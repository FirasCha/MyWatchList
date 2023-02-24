import React from 'react'
import CardTvShowData from './CardTvShowData'
import CardTvShow from './CardTvShow'
import CardMovie from './CardMovie'

const MenuOfWatchList = () => {
  return (
    <div className='home-cards'>
        <CardTvShow details={CardTvShowData}/>
        <CardMovie details={CardTvShowData}/>
    </div>
    
  )
}

export default MenuOfWatchList