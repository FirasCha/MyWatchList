import React, { useState } from 'react'

const CardTvShow = (props) => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const slice = props.details.slice(0,noOfElement);
  return (
    <>
            {
                slice.map( (value,index) => (
                        <div className='card' key={index}>
                            <div className='card-image'>
                                <img style={{height:"141px"}} src={value.img}/>
                            </div>
                            <div>
                                <p className='card-title'>{value.title}</p>
                                <p className='desciption'>My progress : {value.progress}</p>
                                <p className='desciption'>Seasons : {value.max_season}</p>
                                <p className='desciption'>New seasons : {value.new_season}</p>
                            </div>
                            
                        </div>
                    )
                )
            }
            <br/>
            <button 
                onClick={() => loadMore()}
            >
                Load More
            </button>
    </>
  )
}

export default CardTvShow