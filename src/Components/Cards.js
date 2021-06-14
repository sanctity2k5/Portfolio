import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Cards extends Component{
    render(){
        return(
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.cardImg} />
  <Card.Body>
    <Card.Title>{this.props.cardTitle}</Card.Title>
    <Card.Text>
      {this.props.cardText}
    </Card.Text>
    <Button variant="primary">{this.props.cardButtonText}</Button>
  </Card.Body>
</Card>
           

            </div>
        )
    }
}



export default Cards;