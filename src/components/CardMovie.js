import React, { useState } from 'react'
import dataMovie from './CardMovieData'
import NavBarMenu from './NavBarMenu';

const CardMovie = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
        console.log("Trying to load more")
    }
    const slice = dataMovie.slice(0,noOfElement);
  return (
    <div>
        <NavBarMenu/>
        <section className='capy-4 container'>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
            {slice?.map((item,index)=>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>Seasons : {item.max_season}</p>
                                    <p className='card-text'>Duration : {item.duration}</p>
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
        </section>
    </div>
  )
}

export default CardMovie