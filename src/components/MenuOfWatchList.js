import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import MyWatchListMainPage from '../assets/MyWatchListMainPage.jpeg'
import TvShowMainPage from '../assets/TvShowMainPage.webp'
import GamesMainPage from '../assets/GamesMainPage.jpg'
import Carousel from 'react-bootstrap/Carousel';
import dataAnime from './CardAnimeData'
import dataManga from './CardMangaData'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MenuOfWatchList = () => {
  const StartIndiceOfAnime = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfManga = Math.floor(Math.random()*dataManga.length)
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
      <div>
        <div>
          <div
            style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          >
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
            <div>
              <h5 className='card-title' style={{width: '70px', textAlign: 'center'}}>My Animes</h5>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
          </div>
        </div>
        <br/>
        <div style={{textAlign:'center'}} className='row justify-content-center'>
                    {dataAnime
                    .slice(StartIndiceOfAnime,StartIndiceOfAnime+6)
                    .map((item,index)=>{
                        return(
                            <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5' key={index}>
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img src={item.img} alt="" className='card-img-top'/>
                                </div>
                                
                            </div>
                        )
                    })}
         </div>
      </div>
      <Card className="text-center">
        <Card.Header><h5>My Manga</h5></Card.Header>
        <Card.Body>
          <Card.Text>
          <div style={{textAlign:'center'}} className='row justify-content-center'>
                    {dataManga
                    .slice(StartIndiceOfManga,StartIndiceOfManga+6)
                    .map((item,index)=>{
                        return(
                            <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5' key={index}>
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img src={item.img} alt="" className='card-img-top'/>
                                </div>
                                
                            </div>
                        )
                    })}
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