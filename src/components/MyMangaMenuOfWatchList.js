import React from 'react'
import dataManga from './CardMangaData'
import Card from 'react-bootstrap/Card';

const MyMangaMenuOfWatchList = () => {
  let StartIndiceOfManga;
  let compareMangaIndiceList = []; 
  for(let i = 0; i<=5; i++){
    StartIndiceOfManga = Math.floor(Math.random()*dataManga.length);
    compareMangaIndiceList.push(StartIndiceOfManga);
  }
  //No duplicate element  
  for(let i = 0; i<=5; i++) {  
    for(let j = i+1; j<=5; j++) {  
        if(compareMangaIndiceList[i] === compareMangaIndiceList[j])  
            {
              compareMangaIndiceList[j]=Math.floor(Math.random()*dataManga.length);
            }  
        }  
     }  
  /**Input the elements */
  let mangaList = [];
  for (let i = 0; i<=5; i++){
    let j=compareMangaIndiceList[i]
    mangaList.push(dataManga[j].img);
  }
  return (
    <Card className="text-center">
    <Card.Header><h5>My Manga</h5></Card.Header>
    <Card.Body>
      <Card.Text>
        <div style={{textAlign:'center'}} className='row justify-content-center'>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[0]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[1]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[2]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[3]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[4]} alt="" className='card-img-top'/>
            </div> 
          </div>
          <div className='col-11 col-md-6 col-lg-2 mx-0 mb-5'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={mangaList[5]} alt="" className='card-img-top'/>
            </div> 
          </div>                
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MyMangaMenuOfWatchList