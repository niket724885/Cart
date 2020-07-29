import React from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Category from './components/Category';
import Content from './components/Content';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import AllCategories from './components/AllCategories';
import Bread from './components/Bread';
import Dairy from './components/Dairy';
import Fruits from './components/Fruits';
import SeasoningAndSpices from './components/SeasoningAndSpices';
import Vegetables from './components/Vegetables';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    
      <Router>
        <Container>
          <Header/>
          <hr/>
          <Row>
            <Col md={4}>
              <Category/> 
            </Col>  
            <Col md={8}>
              
            </Col>
          </Row>    
        </Container>     
      </Router>
  );
}

export default App;
