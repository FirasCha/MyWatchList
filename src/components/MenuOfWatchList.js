import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import { Container } from 'react-bootstrap';
import MyAnimeMenuOfWatchList from './MyAnimeMenuOfWatchList';
import MyMangaMenuOfWatchList from './MyMangaMenuOfWatchList';
import CarouselOfPicturesMenu from './CarouselOfPicturesMenu';
import MoviesMenuOfWatchList from './MoviesMenuOfWatchList';

const MenuOfWatchList = () => {

  
  // const StartIndiceOfMovie0 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie1 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie2 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie3 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie4 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie5 = Math.floor(Math.random()*dataMovie.length)

  
  return (
    <div>
      <NavBarMenu/>   
      <CarouselOfPicturesMenu/> 
      <Container className='container-fluid'>
        <br/>  
        <MyAnimeMenuOfWatchList/>
        <br/>
        <MyMangaMenuOfWatchList/>
        <br/>
        <MoviesMenuOfWatchList/>
        <br/>
      </Container>
      <FooterWatchList/>     
    </div>        
  )
}

export default MenuOfWatchList