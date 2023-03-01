import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import dataAnime from './CardAnimeData'
import Card from 'react-bootstrap/Card';

const MyAnimeMenuOfWatchList = () => {
    
  const StartIndiceOfAnime0 = Math.floor(Math.random()*dataAnime.length)
  var StartIndiceOfAnime1 = Math.floor(Math.random()*dataAnime.length)
  var StartIndiceOfAnime2 = Math.floor(Math.random()*dataAnime.length)
  var StartIndiceOfAnime3 = Math.floor(Math.random()*dataAnime.length)
  var StartIndiceOfAnime4 = Math.floor(Math.random()*dataAnime.length)
  var StartIndiceOfAnime5 = Math.floor(Math.random()*dataAnime.length)
  if (StartIndiceOfAnime1===StartIndiceOfAnime0)
  {
    StartIndiceOfAnime1 = Math.floor(Math.random()*dataAnime.length)
  }
  if ((StartIndiceOfAnime2===StartIndiceOfAnime1)||(StartIndiceOfAnime2===StartIndiceOfAnime0))
  {
    StartIndiceOfAnime2 = Math.floor(Math.random()*dataAnime.length)
  }
  if ((StartIndiceOfAnime3===StartIndiceOfAnime2)||(StartIndiceOfAnime3===StartIndiceOfAnime1)||(StartIndiceOfAnime3===StartIndiceOfAnime0))
  {
    StartIndiceOfAnime3 = Math.floor(Math.random()*dataAnime.length)
  }
  if ((StartIndiceOfAnime4===StartIndiceOfAnime3)||(StartIndiceOfAnime4===StartIndiceOfAnime2)||(StartIndiceOfAnime4===StartIndiceOfAnime1)||(StartIndiceOfAnime4===StartIndiceOfAnime0))
  {
    StartIndiceOfAnime4 = Math.floor(Math.random()*dataAnime.length)
  }
  if ((StartIndiceOfAnime5===StartIndiceOfAnime4)||(StartIndiceOfAnime5===StartIndiceOfAnime3)||(StartIndiceOfAnime5===StartIndiceOfAnime2)||(StartIndiceOfAnime5===StartIndiceOfAnime1)||(StartIndiceOfAnime5===StartIndiceOfAnime0))
  {
    StartIndiceOfAnime5 = Math.floor(Math.random()*dataAnime.length)
  }
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
          <br/>
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