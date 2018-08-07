import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather/';
import weatherCalls from '../interactors/services/weatherCalls.js';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
var NavBar = require('./navbar/NavBar.jsx');
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            jsonarray: [],
            lat: 0,
            lon: 0
        };
       
      }



      componentDidMount(){
        this.getCurrentCoordinates();
      }
      success(p){
      this.getWeatherByLoc(p.coords.latitude,p.coords.longitude);
      }
      options(){
               enableHighAccuracy: true
      }
      getCurrentCoordinates() {
        navigator.geolocation.getCurrentPosition(this.success.bind(this),this.options.bind(this));
      }
      getWeatherFromQuery(wcity)
      {
              var stateData = {
                'wcity': wcity
              }
              var successFunction = function(data) {
                console.log(data);
                this.setState({jsonarray: data});
              }.bind(this)
              var errorFunction = function(err) {
                
                toast.error("Please enter valid city name !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000
                  });
                  console.log('error occurred on AJAX');
                  console.log(err);
              }.bind(this)
          weatherCalls.getWeatherFromQuery(stateData, successFunction, errorFunction)

      }
      getWeatherByLoc(lat,lon)
      {
        this.setState({
          lat: lat,
          lon: lon
        });
              var stateData = {
                'lat': lat,
                'lon': lon
              }
              var successFunction = function(data) {
                console.log(data);
                this.setState({jsonarray: data});
              }.bind(this)
              var errorFunction = function(err) {
                  console.log('error occurred on AJAX');
                  toast.error("Sorry City Not Found !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                    });
                  console.log(err);
              }.bind(this)
              weatherCalls.getWeatherByLoc(stateData, successFunction, errorFunction)
      }

    render()
    {
        return (
            <div >
                <ToastContainer closeButton={false} hideProgressBar/>
                <NavBar activeItem = 'home'/>
                <br/>
                <Weather.searchTab getWeatherFromQueryProp={this.getWeatherFromQuery.bind(this)} getCurrentCoordinates={this.getCurrentCoordinates.bind(this)}/>

                  
                
                <h1 
                style = {{marginLeft: '5%', color: 'lime',fontSize:'20px'}}>
                {this.state.jsonarray['city'] ?
                 this.state.jsonarray['city']['name']: ''} 
                 </h1>              
                 
                <Weather.cardMap weatherArrProp={this.state.jsonarray} lat={this.state.lat} lon={this.state.lon}/>
            </div>

        );
    }

}
module.exports = MainComponent;
