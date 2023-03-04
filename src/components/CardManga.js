import React, { useState } from 'react'
import NavBarMenu from './NavBarMenu';
import FooterWatchList from './FooterWatchList';
import dataManga from './CardMangaData'


const CardManga = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    let i=0;
    let ListSortNameManga = []
    while(i<dataManga.length)
    {
        ListSortNameManga.push(dataManga[i])
        i++
    }
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        SortA_ZName: { method: (a, b) => (a.title < b.title ? -1 : 1) },
        SortZ_AName: { method: (a, b) => (a.title > b.title ? -1 : 1)},
      };
      
    let slice = ListSortNameManga.slice(0,noOfElement);
  return (
    <div>
        <NavBarMenu/>
        <section className='capy-4 container'>
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                <option value="DEFAULT" disabled></option>
                <option value="SortA_ZName">Sort A-Z by Name</option>
                <option value="SortZ_AName">Sort Z-A by Name</option>
            </select>
            <ul>
                {ListSortNameManga.sort(sortMethods[sortState].method).map((el, i) => (
                <li key={i}>{el.title}</li>
                ))}
            </ul>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
                {slice.sort(sortMethods[sortState].method).map((item, index) =>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} alt="" className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>Author(s) : {item.Author}</p>
                                    <p className='card-text'>Status : {item.Status}</p>
                                    <p className='card-text'>Genres : {item.Genres}</p>
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

export default CardManga