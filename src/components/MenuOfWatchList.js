import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import MyWatchListMainPage from '../assets/MyWatchListMainPage.jpeg'
import TvShowMainPage from '../assets/TvShowMainPage.webp'
import GamesMainPage from '../assets/GamesMainPage.jpg'
import Carousel from 'react-bootstrap/Carousel';

const MenuOfWatchList = () => {
  return (
    // <div>
    //   <Link to="/" > Menu</Link>
    //   <Link to="/tvshow" > TV Shows</Link>
    //   <Link to="/mymovies" > Movies</Link>
    // </div>
    <div>
      <NavBarMenu/>   
      {/* <div>
        <img src={TvShowImage} class="img-fluid" alt="Responsive image"/>
      </div>   */}
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
      <FooterWatchList/>     
    </div>        
  )
}

export default MenuOfWatchList