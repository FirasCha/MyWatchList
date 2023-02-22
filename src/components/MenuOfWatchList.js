import React from 'react'
import CardTvShowData from './CardTvShowData'
import CardTvShow from './CardTvShow'

const MenuOfWatchList = () => {
  return (
    <div className='home-cards'>
        <CardTvShow details={CardTvShowData}/>
    </div>
  )
}

export default MenuOfWatchList