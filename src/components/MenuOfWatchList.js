import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import MyWatchListMainPage from '../assets/MyWatchListMainPage.jpeg'
import TvShowMainPage from '../assets/TvShowMainPage.webp'
import GamesMainPage from '../assets/GamesMainPage.jpg'
import Carousel from 'react-bootstrap/Carousel';
import dataManga from './CardMangaData'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MyAnimeMenuOfWatchList from './MyAnimeMenuOfWatchList';

const MenuOfWatchList = () => {

  
  // const StartIndiceOfMovie0 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie1 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie2 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie3 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie4 = Math.floor(Math.random()*dataMovie.length)
  // const StartIndiceOfMovie5 = Math.floor(Math.random()*dataMovie.length)

  const StartIndiceOfManga0 = Math.floor(Math.random()*dataManga.length)
  const StartIndiceOfManga1 = Math.floor(Math.random()*dataManga.length)
  const StartIndiceOfManga2 = Math.floor(Math.random()*dataManga.length)
  const StartIndiceOfManga3 = Math.floor(Math.random()*dataManga.length)
  const StartIndiceOfManga4 = Math.floor(Math.random()*dataManga.length)
  const StartIndiceOfManga5 = Math.floor(Math.random()*dataManga.length)
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
        <Card className="text-center">
          <Card.Header><h5>My Manga</h5></Card.Header>
          <Card.Body>
            <Card.Text>
              <div style={{textAlign:'center'}} className='row justify-content-center'>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga0].img} alt="" className='card-img-top'/>
                  </div> 
                </div>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga1].img} alt="" className='card-img-top'/>
                  </div> 
                </div>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga2].img} alt="" className='card-img-top'/>
                  </div> 
                </div>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga3].img} alt="" className='card-img-top'/>
                  </div> 
                </div>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga4].img} alt="" className='card-img-top'/>
                  </div> 
                </div>
                <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={dataManga[StartIndiceOfManga5].img} alt="" className='card-img-top'/>
                  </div> 
                </div>                
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
      </Container>
      <FooterWatchList/>     
    </div>        
  )
}

export default MenuOfWatchList