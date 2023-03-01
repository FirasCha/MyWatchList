import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import MyWatchListMainPage from '../assets/MyWatchListMainPage.jpeg'
import TvShowMainPage from '../assets/TvShowMainPage.webp'
import GamesMainPage from '../assets/GamesMainPage.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import MyAnimeMenuOfWatchList from './MyAnimeMenuOfWatchList';
import MyMangaMenuOfWatchList from './MyMangaMenuOfWatchList';

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
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={MyWatchListMainPage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={TvShowMainPage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={GamesMainPage}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className='container-fluid'>
        <br/>  
        <MyAnimeMenuOfWatchList/>
        <br/>
        <MyMangaMenuOfWatchList/>
        <br/>
      </Container>
      <FooterWatchList/>     
    </div>        
  )
}

export default MenuOfWatchList