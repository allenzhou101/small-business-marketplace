import React from 'react';
import image from '../images/ab_1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../components/Card.js';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <
    //  className="App"
     >
      <header className="App-header">
        
        
        

      </header>
      <Container fluid>
        <h1 style = {{marginTop: '50px'}}>Small Business Marketplace</h1>
        <Row>
            <CardItem
              title = "Noah Z"
              price = {45}
              imgURL = {image}

            />
            <CardItem
              title = "adsfdsa Z"
              price = {45}
              imgURL = {image}
            />
            <CardItem
              title = "Noah Z"
              price = {45}
              imgURL = {image}

            />
            <CardItem
              title = "adsfdsa Z"
              price = {45}
              imgURL = {image}
            /><CardItem
            title = "Noah Z"
            price = {45}
            imgURL = {image}

          />
          <CardItem
            title = "adsfdsa Z"
            price = {45}
            imgURL = {image}
          />
          </Row>
      </Container>

    </>
  );
}

export default Home;
