import React from 'react'
import dataMovie from './CardMovieData'
import Card from 'react-bootstrap/Card';

const MoviesMenuOfWatchList = () => {
    // const StartIndiceOfMovie0 = Math.floor(Math.random()*dataMovie.length)
    // var StartIndiceOfMovie1 = Math.floor(Math.random()*dataMovie.length)
    // var StartIndiceOfMovie2 = Math.floor(Math.random()*dataMovie.length)
    // var StartIndiceOfMovie3 = Math.floor(Math.random()*dataMovie.length)
    // var StartIndiceOfMovie4 = Math.floor(Math.random()*dataMovie.length)
    // var StartIndiceOfMovie5 = Math.floor(Math.random()*dataMovie.length)
    let movieList = [];
    let StartIndiceOfMovie;
    for (let i = 0; i<=5; i++){
      StartIndiceOfMovie = Math.floor(Math.random()*dataMovie.length);
      movieList.push(dataMovie[StartIndiceOfMovie].img)
    }
    console.log(movieList)
  return (
    <Card className="text-center">
    <Card.Header><h5>My Movies</h5></Card.Header>
    <Card.Body>
      <Card.Text>
        <div style={{textAlign:'center'}} className='row justify-content-center'>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[0]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[1]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[2]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[3]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[4]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={movieList[5]} alt="" className='card-img-top'/>
            </div> 
          </div>                
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MoviesMenuOfWatchList