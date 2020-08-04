import React from 'react';
import AddProduct from './Product/Add';
import ListProduct from './Product/List';
import EditProduct from './Product/Edit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/AddProduct' component={AddProduct} />
        <Route path='/edit/:id' component={EditProduct} />
        <Route path='/' exact component={ListProduct} />
      </Switch>
    </Router>
  );
}

export default App;  