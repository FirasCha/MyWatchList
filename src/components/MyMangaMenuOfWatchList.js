import React from 'react'
import dataManga from './CardMangaData'
import Card from 'react-bootstrap/Card';

const MyMangaMenuOfWatchList = () => {
    const StartIndiceOfManga0 = Math.floor(Math.random()*dataManga.length)
    const StartIndiceOfManga1 = Math.floor(Math.random()*dataManga.length)
    const StartIndiceOfManga2 = Math.floor(Math.random()*dataManga.length)
    const StartIndiceOfManga3 = Math.floor(Math.random()*dataManga.length)
    const StartIndiceOfManga4 = Math.floor(Math.random()*dataManga.length)
    const StartIndiceOfManga5 = Math.floor(Math.random()*dataManga.length)
  return (
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
  )
}

export default MyMangaMenuOfWatchList