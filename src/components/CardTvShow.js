import React from 'react'

const CardTvShow = (props) => {
  return (
    <>
        {
            props.details.map( (value,index) => (
                    <div className='card' key={index}>
                        <div className='card-image'>
                            <img style={{height:"141px"}} src={value.img}/>
                        </div>
                        <div>
                            <p className='card-title'>{value.title}</p>
                            <p className='desciption'>{value.progress}</p>
                            <p className='desciption'>{value.max_season}</p>
                            <p className='desciption'>{value.new_season}</p>
                        </div>
                    </div>
                )
            )
        }
    </>
  )
}

export default CardTvShow