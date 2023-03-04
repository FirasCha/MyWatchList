import React, { useState } from 'react'
import NavBarMenu from './NavBarMenu';
import FooterWatchList from './FooterWatchList';
import dataManga from './CardMangaData'


const CardManga = () => {
    const [ noOfElement, setnoOfElement ] = useState(7);
    const loadMore = () => {
        setnoOfElement(noOfElement+5);
    }
    const slice = dataManga.slice(0,noOfElement);
    let i=0;
    let ListSortNameManga = []
    let ListSortReverseNameManga = []
    while(i<dataManga.length)
    {
        ListSortNameManga.push(dataManga[i])
        //ListSortReverseNameManga.push(dataManga[i].title)
        i++
    }
    console.log(ListSortNameManga)
    for(let i=0;i<ListSortNameManga.length;i++)
    {
        console.log(ListSortNameManga[i].title)
    }
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.title < b.title ? -1 : 1) },
        descending: { method: (a, b) => (a.title > b.title ? -1 : 1)},
      };
    // console.log("List Sort reverse Manga",sortReverse)
    // console.log("List Sort Manga",sort)
    // const data = ["Banana", "Orange", "Apple", "Mango"];
    // const sort = data.sort()
    // console.log(sort)
  return (
    <div>
        <NavBarMenu/>
        <section className='capy-4 container'>
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                <option value="DEFAULT" disabled></option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <ul>
                {ListSortNameManga.sort(sortMethods[sortState].method).map((el, i) => (
                <li key={i}>{el.title}</li>
                ))}
            </ul>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
                {ListSortNameManga.sort(sortMethods[sortState].method).map((item, index) =>{
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-5' key={index}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} alt="" className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{textAlign:'center'}} className='row justify-content-center'>
                {slice.map((item,index)=>{
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