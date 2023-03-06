import React from 'react'
import Table from 'react-bootstrap/Table';

const MovieInfo = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-5">
          <img src={props.PictureOfMovie} width="60%" />
        </div>
        <div className="col-md-7">
          <p>is the CEO of Zip Zap Zop Kids, LLC. Maja has worked with children on many levels. Having a brother with Autism has given Maja an understanding of how powerful communication is for ALL children. Maja has worked for years as a teacher where she practices emergent curriculum. Maja has studied theater and improv at A.C.T. in San Francisco as well as graduated from The Second City Training Center in Hollywood where she studied improv and sketch comedy. Maja has her Bachelors Degree in Early Childhood Education. Maja's focus is on inclusive classrooms where curriculum is designed to allow children and young adults to feel comfortable expressing themselves in whichever way they feel most comfortable. Maja believes when we can share with one another what has been taught then, and only then, are we actually learning.</p>
        </div>
      </div>
      <Table>
        
        <tbody>
          <tr>
            <td></td>
            <td>Released Date : </td>
            <td></td>
            <td>{props.ReleasedDate}</td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default MovieInfo