import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FooterWatchList = () => {
    return (
        <footer className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
            <Container className='p-3'>
                <section className=''>
                    <Row>
                        <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            <a href='/'>
                            <div
                                
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            >
                                <img src='https://cdn2.hubspot.net/hubfs/53/homepage-web-design.jpg' className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            <a href='/tvshow'>
                            <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            >
                                <img src='https://ggsc.s3.amazonaws.com/images/uploads/Greater_Goodies_TV_2022.jpeg' className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            
                            <a href='/mymovies'>
                            <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            >
                                <img src='https://telegraphstar.com/wp-content/uploads/2020/04/9x.jpg' className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            
                            <a href='/myanime'>
                            <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            >
                                <img src='https://unbumf.com/wp-content/uploads/2018/09/thumb.jpg' className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            
                            <a href='#!'>
                            <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            >
                                <img src='https://geekflare.com/wp-content/uploads/2022/10/Manga.webp' className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        {/* <Col lg='2' md='12' className='mb-4 mb-md-0'>
                            <div color='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                            <a href='#!'>
                            <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                            ></div>
                            </a>
                            </div>
                        </Col> */}
                        
                    </Row>
                </section>
            </Container>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright Firas Chaouch
                {/* <a className='text-white'>
                    Firas Chaouch
                </a> */}
            </div>
        </footer>
    )
    }

export default FooterWatchList