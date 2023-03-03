import React from 'react'
import dataMovie from './CardMovieData'
import Card from 'react-bootstrap/Card';

const MoviesMenuOfWatchList = () => {
    let StartIndiceOfMovie;
    let compareMoviesIndiceList = []; 
    for(let i = 0; i<=5; i++){
      StartIndiceOfMovie = Math.floor(Math.random()*dataMovie.length);
      compareMoviesIndiceList.push(StartIndiceOfMovie);
    }
    //No duplicate element  
    for(let i = 0; i<=5; i++) {  
      for(let j = i+1; j<=5; j++) {  
          if(compareMoviesIndiceList[i] === compareMoviesIndiceList[j])  
              {
                compareMoviesIndiceList[j]=Math.floor(Math.random()*dataMovie.length);
              }  
          }  
       }  
    /**Input the elements */
    let movieList = [];
    for (let i = 0; i<=5; i++){
      let j=compareMoviesIndiceList[i]
      movieList.push(dataMovie[j].img);
    }
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