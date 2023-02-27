import React, { useState } from 'react'
import NavBarMenu from './NavBarMenu';
import FooterWatchList from './FooterWatchList';
import dataManga from './CardMangaData'


const CardManga = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const slice = dataManga.slice(0,noOfElement);

  return (
    <div>
        <NavBarMenu/>
        <section className='capy-4 container'>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
                {slice.map((item,index)=>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} alt="" className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>Author(s) : {item.Author}</p>
                                    <p className='card-text'>Status : {item.Status}</p>
                                    <p className='card-text'>Genres : {item.Genres}</p>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
                <button
                    className='btn btn-dark d-block w-100'
                    onClick={() => loadMore()}
                >
                    Load More
                </button>
                <br/>
        </section>
        <FooterWatchList/> 
    </div>
  )
}

export default CardManga