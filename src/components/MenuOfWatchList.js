import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FooterWatchList from './FooterWatchList';
import NavBarMenu from './NavBarMenu';

const MenuOfWatchList = () => {
  return (
    // <div>
    //   <Link to="/" > Menu</Link>
    //   <Link to="/tvshow" > TV Shows</Link>
    //   <Link to="/mymovies" > Movies</Link>
    // </div>
    <>
      <NavBarMenu/>       
      <FooterWatchList/>     
    </>        
  )
}

export default MenuOfWatchList