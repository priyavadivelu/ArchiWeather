import React, {Component} from 'react'
import {Input, Menu, Segment, Button, Header, Icon, Image} from 'semantic-ui-react'
let {hashHistory, Link} = require('react-router');

class MenuExamplePointing extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }
   render() {
       return (
           <div>    

              <Image style={{float:'left',height:'100px'}} src = {require('./logo.png')} />                
                  
                  <div style={{float:'right',marginRight:'5px'}}>

                  <p style={{color:'orange',marginTop:'15px',textAlign:'center'}}>Follow us on</p>
                    <a href='https://www.facebook.com/groups/openweathermap/about/'>
                    <Button color='facebook'>
                      <Icon name='facebook'/> 
                    </Button>
                    </a>

                    <a href='https://twitter.com/OpenWeatherMap'>
                    <Button color='twitter'>
                      <Icon name='twitter'/>
                    </Button>
                    </a>

                    <a href='https://www.linkedin.com/company/9816754/'>
                    <Button color='linkedin'>
                      <Icon name='linkedin'/>
                    </Button>
                    </a>
                    
                    <a href='https://www.instagram.com/openweathermap/'>
                    <Button color='instagram'>
                      <Icon name='instagram'/>
                    </Button>
                    </a>

                    <a href='https://github.com/search?q=openweathermap&ref=cmdform'>
                    <Button color='orange'>
                      <Icon name='github'/>
                    </Button>
                    </a>
                  </div>
           </div>
       )
   }
}
module.exports = MenuExamplePointing;
