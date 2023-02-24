import React from 'react'
import CardTvShow from './CardTvShow'
import CardMovie from './CardMovie'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

const MenuOfWatchList = () => {
  return (
    // <Nav defaultActiveKey="/" className="flex-column">
    //   <Nav.Link to="/">Active</Nav.Link>
    //   <Nav.Link eventKey="link-1">Link</Nav.Link>
    //   <Nav.Link eventKey="link-2">Link</Nav.Link>
    // </Nav>
    <div>
      <Link to="/" > Menu</Link>
      <Link to="/tvshow" > TV Shows</Link>
      <Link to="/mymovies" > Movies</Link>
    </div>
                        
  )
}

export default MenuOfWatchList