import React, {Component} from 'react';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Media from 'react-bootstrap/Media';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class WebTech extends Component {
    render(){
        return(
            <div>
            <div className = "webTechIcons">
            <h3 className = "webTechTitle"><SettingsOutlinedIcon id = "webTechIconOne"/>
            Web Technologies
            <SettingsOutlinedIcon id = "webTechIconTwo"/></h3>
            </div>

            <h5 className = "front"><ImportantDevicesIcon /> Frontend Technologies <ImportantDevicesIcon /></h5>

            <Media className = "media">
 
  <Media.Body className = "mediaBody">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Media.Body>
</Media>



            </div>
            
        )
    }
}


export default WebTech;