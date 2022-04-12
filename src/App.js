// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { moviesData } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaree from './components/Navbaree';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Info } from './components/Info';




function App() {
  const [list, setList] = useState(moviesData)
  return (
    <div className="App">
      <Router>
      <Navbaree/>
        <Routes>
      <Route path='/' element={<ProductList  product={list}/>} />
     <Route path='/About' element={ <About/>}  />
      <Route path='/Contact '  element={<Contact/>} />
      <Route path='/info/:id' element={<Info product={list}/>} ></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
