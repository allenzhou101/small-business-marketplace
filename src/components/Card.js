import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardItem(props) {
    return(
        <>
        <Col md = {3}>
          <a style={{ cursor: 'pointer' }} 
            href = "https://google.com"
          // onClick={siteSelectedCallback}
          >
            <Card >
              <Card.Img variant="top" width = "200px" src={props.imgURL} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </a>
          </Col>
        </>
    );
}

export default CardItem;