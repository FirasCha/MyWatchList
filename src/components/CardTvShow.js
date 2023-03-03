import React, { useState } from 'react'
import dataTvShow from './CardTvShowData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavBarMenu from './NavBarMenu';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FooterWatchList from './FooterWatchList';

const CardTvShow = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [ movieName, setmovieName ] = useState();
    const TVShowLength = dataTvShow.length
    let i=0;
    let TvShowListSelected = [];
    const slice = dataTvShow.slice(0,noOfElement);

    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const handleShow =  (e, data) => {
        setShow(true);
        setmovieName (e.target.dataset.user)
    }
    while(i<TVShowLength)
    {
        if(dataTvShow[i].title === movieName)
        {
            TvShowListSelected.push(dataTvShow[i])
        }
        i++
    }
    console.log(TvShowListSelected[0])
    
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
                                    <p className='card-text'>My progress : {item.progress}</p>
                                    <p className='card-text'>Seasons : {item.max_season}</p>
                                    <p className='card-text'>New seasons : {item.new_season}</p>
                                    <ProgressBar animated  now={item.progress_value} label={`${item.progress_value}%`}/>
                                    <br/>
                                    <Button variant="outline-dark" data-user={item.title} onClick={handleShow}>
                                        More Details
                                    </Button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={true}
                                        centered={true}
                                    >
                                            <Modal.Header closeButton>
                                                <Modal.Title>{movieName}</Modal.Title>
                                            </Modal.Header>
                                            {
                                                TvShowListSelected.map((it,ind)=>{
                                                    return <Modal.Body key={ind}>
                                                                {it.title}
                                                            </Modal.Body>
                                                })
                                            }
                                            
                                    </Modal>
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

export default CardTvShow