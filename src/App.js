import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuOfWatchList from './components/MenuOfWatchList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MenuOfWatchList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
