import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mangaImage from '../assets/MangaFooter.webp'
import gamesImage from '../assets/GamesFooter.webp'
import AnimeImage from '../assets/AnimeFooter.png'
import HomePageImage from '../assets/HomePage.jpg'
import TvShowImage from '../assets/TvShowFooter.jpeg'
import MovieImage from '../assets/MovieFooter.jpg'

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
                                <img alt='main page' src={HomePageImage} className='w-100' />
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
                                <img alt='' src={TvShowImage} className='w-100' />
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
                                <img alt='' src={MovieImage} className='w-100' />
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
                                <img alt='' src={AnimeImage} className='w-100' />
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
                                <img alt='' src={mangaImage} className='w-100' />
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
                                <img alt='' src={gamesImage} className='w-100' />
                            </div>
                            </a>
                            </div>
                        </Col>
                        
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