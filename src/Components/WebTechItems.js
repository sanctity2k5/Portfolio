import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



class WebTechItems extends Component {
    render() {
        return (
<Col lg = {3} md={4} sm={1}>
                 <Card className='cards' style={{width: '18rem', height:"90%"}}>
                    <Card.Img variant="top" src={this.props.img} id = {this.props.id} />
                    <Card.Body className = "card-body">
                        <Card.Text className="cardText"> {this.props.cardText} </Card.Text>

                        
                    </Card.Body>
                </Card>

                



</Col>

        )
    }
}




export default WebTechItems;