import React from 'react'
import dataMovie from './CardMovieData'
import Card from 'react-bootstrap/Card';

const MoviesMenuOfWatchList = () => {
    const StartIndiceOfMovie0 = Math.floor(Math.random()*dataMovie.length)
    var StartIndiceOfMovie1 = Math.floor(Math.random()*dataMovie.length)
    var StartIndiceOfMovie2 = Math.floor(Math.random()*dataMovie.length)
    var StartIndiceOfMovie3 = Math.floor(Math.random()*dataMovie.length)
    var StartIndiceOfMovie4 = Math.floor(Math.random()*dataMovie.length)
    var StartIndiceOfMovie5 = Math.floor(Math.random()*dataMovie.length)
  return (
    <Card className="text-center">
    <Card.Header><h5>My Movies</h5></Card.Header>
    <Card.Body>
      <Card.Text>
        <div style={{textAlign:'center'}} className='row justify-content-center'>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie0].img} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie1].img} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie2].img} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie3].img} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie4].img} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={dataMovie[StartIndiceOfMovie5].img} alt="" className='card-img-top'/>
            </div> 
          </div>                
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MoviesMenuOfWatchList