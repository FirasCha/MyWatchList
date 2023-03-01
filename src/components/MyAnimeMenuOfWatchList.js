import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import dataAnime from './CardAnimeData'
import Card from 'react-bootstrap/Card';

const MyAnimeMenuOfWatchList = () => {
    
  const StartIndiceOfAnime0 = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfAnime1 = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfAnime2 = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfAnime3 = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfAnime4 = Math.floor(Math.random()*dataAnime.length)
  const StartIndiceOfAnime5 = Math.floor(Math.random()*dataAnime.length)
  return (
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
          <CardGroup>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime0].img} />   
            </Card>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime1].img} />   
            </Card>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime2].img} />   
            </Card>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime3].img} />   
            </Card>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime4].img} />   
            </Card>
            <Card>
              <Card.Img className='card-img-top' src={dataAnime[StartIndiceOfAnime5].img} />   
            </Card>
          </CardGroup>
        </div>
  )
}

export default MyAnimeMenuOfWatchList