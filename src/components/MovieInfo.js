import React from 'react'

const MovieInfo = (props) => {
  return (
    <div>
      <img src={props.PictureOfMovie} alt="" className='card-img-top'/>
       <div>{props.name}</div> 
       <div>Rleased Date : {props.ReleasedDate}</div> 
       <div>Duration of the movie : {props.DurationOfMovie}</div> 
    </div>
  )
}

export default MovieInfo