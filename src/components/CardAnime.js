import React , { useState } from 'react'
import NavBarMenu from './NavBarMenu';
import FooterWatchList from './FooterWatchList';
import dataAnime from './CardAnimeData'
import Button from 'react-bootstrap/Button';
import { Form, InputGroup } from 'react-bootstrap';

const CardAnime = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const [search, setSearch] = useState('');

    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    //console.log(dataAnime)
    var slice = dataAnime.slice(0,noOfElement);
    /**Check Madhouse Studio*/ 
    // const MadhouseStudioButton = () =>{
    //     const MadhouseStudio = dataAnime => dataAnime.Studio === "Madhouse";
    //     const checkMadhouseStudio = dataAnime.filter(MadhouseStudio);
    //     console.log(checkMadhouseStudio);
    // }
    /**Check Sport Genres */
    // const SportsGenreButton = () =>{
    //     const SportsGenres = dataAnime => dataAnime.Genres.includes("Sports");
    //     const checkSportsGenres = dataAnime.filter(SportsGenres);
    //     console.log(checkSportsGenres);
    // }
    
  return (
    <div>
        <NavBarMenu/>
        {/* <section className='capy-4 container' style={{display: "flex"}}>
            <div>
                <Button 
                    variant="secondary"
                    className='btn d-block w-10'
                    onClick={() => MadhouseStudioButton()}
                >
                    Madhouse Studio
                </Button>
                <Button
                    variant="secondary"
                    className='btn d-block w-10'
                    onClick={() => SportsGenreButton()}
                >
                    Sports Genres
                </Button>
            </div>
        </section> */}
        <section className='capy-4 container'>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Anime'
            />
          </InputGroup>
        </Form>
        </section>
        <section className='capy-4 container'>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
                {slice
                .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.title.toLowerCase().includes(search);
                  })
                .map((item,index)=>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} alt="" className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>Genres : {item.Genres}</p>
                                    <p className='card-text'>Studio : {item.Studio}</p>
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

export default CardAnime