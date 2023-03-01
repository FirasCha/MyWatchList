import React from 'react'
import dataManga from './CardMangaData'
import Card from 'react-bootstrap/Card';

const MyMangaMenuOfWatchList = () => {
    const StartIndiceOfManga0 = Math.floor(Math.random()*dataManga.length)
    var StartIndiceOfManga1 = Math.floor(Math.random()*dataManga.length)
    var StartIndiceOfManga2 = Math.floor(Math.random()*dataManga.length)
    var StartIndiceOfManga3 = Math.floor(Math.random()*dataManga.length)
    var StartIndiceOfManga4 = Math.floor(Math.random()*dataManga.length)
    var StartIndiceOfManga5 = Math.floor(Math.random()*dataManga.length)
    if (StartIndiceOfManga1===StartIndiceOfManga0)
    {
        StartIndiceOfManga1 = Math.floor(Math.random()*dataManga.length)
    }
    if ((StartIndiceOfManga2===StartIndiceOfManga1)||(StartIndiceOfManga2===StartIndiceOfManga0))
    {
        StartIndiceOfManga2 = Math.floor(Math.random()*dataManga.length)
    }
    if ((StartIndiceOfManga3===StartIndiceOfManga2)||(StartIndiceOfManga3===StartIndiceOfManga1)||(StartIndiceOfManga3===StartIndiceOfManga0))
    {
        StartIndiceOfManga3 = Math.floor(Math.random()*dataManga.length)
    }
    if ((StartIndiceOfManga4===StartIndiceOfManga3)||(StartIndiceOfManga4===StartIndiceOfManga2)||(StartIndiceOfManga4===StartIndiceOfManga1)||(StartIndiceOfManga4===StartIndiceOfManga0))
    {
        StartIndiceOfManga4 = Math.floor(Math.random()*dataManga.length)
    }
    if ((StartIndiceOfManga5===StartIndiceOfManga4)||(StartIndiceOfManga5===StartIndiceOfManga3)||(StartIndiceOfManga5===StartIndiceOfManga2)||(StartIndiceOfManga5===StartIndiceOfManga1)||(StartIndiceOfManga5===StartIndiceOfManga0))
    {
        StartIndiceOfManga5 = Math.floor(Math.random()*dataManga.length)
    }
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