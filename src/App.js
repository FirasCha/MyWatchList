import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuOfWatchList from './components/MenuOfWatchList';
import CardMovie from './components/CardMovie';
import CardTvShow from './components/CardTvShow';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MenuOfWatchList/>}></Route>
          <Route path='/tvshow' element={<CardTvShow/>}></Route>
          <Route path='/mymovies' element={<CardMovie/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
