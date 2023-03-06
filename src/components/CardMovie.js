import React, { useState } from 'react'
import dataMovie from './CardMovieData'
import NavBarMenu from './NavBarMenu';
import FooterWatchList from './FooterWatchList';
import MovieInfo from './MovieInfo';

const CardMovie = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const slice = dataMovie.slice(0,noOfElement);

    const [ movieName, setmovieName ] = useState();
    const handleShow =  (e, data) => {
        setmovieName (e.target.dataset.user)
    }
    let i=0;
    let ListMovieData = []
    while(i<dataMovie.length)
    {
        if(dataMovie[i].title === movieName)
        {
            ListMovieData.push(dataMovie[i])
        }
        i++;
    }
  return (
    <div>
        <NavBarMenu/>
        <section className='capy-4 container'>
            {movieName?(

            <MovieInfo 
                PictureOfMovie={ListMovieData[0].img}
                name={ListMovieData[0].title} 
                ReleasedDate={ListMovieData[0].Released_Year}
                DurationOfMovie={ListMovieData[0].duration}
            /> 
            ):(
            <>
                <div style={{textAlign:'center'}} className='row justify-content-center'>
                {slice?.map((item,index)=>{
                        return(
                            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                                <div className='card p-0 overflow-hidden h-100 shadow' >
                                    <img src={item.img} alt="" className='card-img-top' data-user={item.title} onClick={handleShow}/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{item.title}</h5>
                                        <p className='card-text'>Released Year : {item.Released_Year}</p>
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
                <br/>
            </>
            )} 
        </section>
        <FooterWatchList/> 
    </div>
  )
}

export default CardMovie