import React from 'react'
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';
import MyWatchListMainPage from '../assets/MyWatchListMainPage.jpeg'
import TvShowMainPage from '../assets/TvShowMainPage.webp'
import GamesMainPage from '../assets/GamesMainPage.jpg'
import Carousel from 'react-bootstrap/Carousel';
import dataAnime from './CardAnimeData'

const MenuOfWatchList = () => {
  const test = Math.floor(Math.random()*dataAnime.length)
  console.log(dataAnime[Math.floor(Math.random()*dataAnime.length)])
  console.log(dataAnime[Math.floor(Math.random()*dataAnime.length)])
  console.log(dataAnime[Math.floor(Math.random()*dataAnime.length)])

  return (
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
      <br/>
      <h5 className='card-title'>My Animes</h5>
      <div style={{textAlign:'center'}} className='row justify-content-center'>
                {dataAnime
                .slice(test,test+6)
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
      <FooterWatchList/>     
    </div>        
  )
}

export default MenuOfWatchList