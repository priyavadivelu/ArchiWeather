import React from 'react'
import {Button} from 'semantic-ui-react'
import { Card, Icon, Image, Input, Container} from 'semantic-ui-react'

class WeatherCard extends React.Component {
    constructor() {
        super();
        this.state={

        }
      }
      render()
      {
        return(

  <Card style = {{height: 'auto',backgroundColor:'#D8EEF6', boxShadow: '3px 3px blue, 6px 6px green'}}>
  <Card.Content>
    <Card.Header style ={{color: '#2185d0'}}>{this.props.time.split(' ')[1]}</Card.Header><br/>
    <Card.Meta style = {{fontSize: '20px',color:'MEDIUMTURQUOISE',textTransform:'capitalize',fontStyle:'bold'}}>{this.props.weatherDescp}</Card.Meta>
    <Card.Description className="desc" as = 'h3' style = {{color: 'CORAL'}}>
    Temperature : {this.props.temp} °C <br/>
    </Card.Description>
  </Card.Content>
  <Card.Content extra style = {{color: 'darkorange',fontSize:'12px'}}>
  Min Temp : {this.props.minTemp} °C <br/>
  Max Temp : {this.props.maxTemp} °C <br/>
    Humidity :  {this.props.humidity} %
    <div className="commentText">
    </div>
  </Card.Content>
  </Card>
        )
      }
    }
    WeatherCard.propTypes = {
      id: React.PropTypes.object,
      name: React.PropTypes.object,
}
module.exports=WeatherCard;
