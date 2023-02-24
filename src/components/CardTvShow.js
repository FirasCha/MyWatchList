import React, { useState } from 'react'
import dataTvShow from './CardTvShowData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CardTvShow = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const slice = dataTvShow.slice(0,noOfElement);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
  return (
    <section className='capy-4 container'>
    <div style={{textAlign:'center'}} className='row justify-content-center'>
        {slice.map((item,index)=>{
            return(
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={item.img} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.title}</h5>
                            <p className='card-text'>My progress : {item.progress}</p>
                            <p className='card-text'>Seasons : {item.max_season}</p>
                            <p className='card-text'>New seasons : {item.new_season}</p>
                            <Button variant="outline-dark" onClick={handleShow}>
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
                                    <Modal.Title>{item.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {item.title}
                                </Modal.Body>
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
</section>
  )
}

export default CardTvShow