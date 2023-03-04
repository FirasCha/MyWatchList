import React, { useState } from 'react'
import dataTvShow from './CardTvShowData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavBarMenu from './NavBarMenu';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FooterWatchList from './FooterWatchList';
import { ModalBody, ModalFooter } from 'react-bootstrap';

const CardTvShow = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [ movieName, setmovieName ] = useState();
    const TVShowLength = dataTvShow.length
    let TvShowListSelected = [];
    const slice = dataTvShow.slice(0,noOfElement);

    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const handleShow =  (e, data) => {
        setShow(true);
        setmovieName (e.target.dataset.user)
    }
    let i=0;
    while(i<TVShowLength)
    {
        if(dataTvShow[i].title === movieName)
        {
            TvShowListSelected.push(dataTvShow[i])
        }
        i++
    }
    
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
                                        size="lg"
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={true}
                                        centered={true}
                                        fullscreen="sm-down"
                                        
                                    >
                                            
                                            {
                                                TvShowListSelected.map((it,ind)=>{
                                                    return (<div key={ind}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>{it.title}</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <img src={it.img} alt="" className='card-img-top'/>
                                                            </Modal.Body>
                                                            <Modal.Body scrollable={true}>
                                                                <h4>Storyline : </h4>
                                                                <p>{it.storyline}</p>
                                                                <h6>Genres : </h6> {it.Genres}
                                                                <h6>Release Date : </h6>{it.Release_date}<br/>
                                                                <h6>Country of origin : </h6>{it.Country_of_origin}
                                                            </Modal.Body>
                                                            <ModalFooter>
                                                                {it.progress}
                                                            </ModalFooter>
                                                            </div>
                                                            )
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