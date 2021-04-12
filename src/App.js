import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Product from './components/Product';
import Navbarr from './components/Navbarr';
import AddProducts from './components/AddProducts';

function App() {
  const [add,setAdd]=useState([])

  return (
    
    <Router>
      <Navbarr/>
      <Switch>

        <Route exact path="/">
          <Product/>
        </Route>
        <Route path='/addProduct'>
          <AddProducts/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
