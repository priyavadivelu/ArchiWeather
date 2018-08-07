 import React from 'react';
import {Grid,Segment} from 'semantic-ui-react';
// var geolib = require('geolib');
// var moment = require('moment');
import Cards from './weatherCard.jsx';
import './cardMap.css';

const divStyle = {
 width: '90%',
 margin: 'auto',
 marginBottom:'20px',
};

class DisplayComponent extends React.Component {

    constructor(props) {
        super(props);

      }



      render()
      {
        let lat=this.props.lat
        let lon=this.props.lon
        let jsarray
        if(this.props.weatherArrProp.list)
        {
          let arr = this.props.weatherArrProp.list

          //dt_txt=n;
          var dum = arr[0].dt_txt.split(' ')[0]
          var jsobj = {}
          jsobj[dum] =[]
          arr.forEach(function(objs){

            if(dum == objs.dt_txt.split(' ')[0])
            {
              jsobj[objs.dt_txt.split(' ')[0]].push(objs)
          }
            else{
              jsobj[objs.dt_txt.split(' ')[0]] = []
              jsobj[objs.dt_txt.split(' ')[0]].push(objs)
              dum = objs.dt_txt.split(' ')[0]
              }
          });



          jsarray= Object.keys(jsobj).map((dat,i)=>{

            var a = jsobj[dat].map(objs=>{




              return(

                      <Cards className="card"
                      id={objs.dt_txt}
                      time = {objs.dt_txt}
                      weatherDescp = {objs.weather[0].description}
                      wind = {objs.wind}
                      maxTemp = {Math.round(objs.main.temp_max-273.15)}
                      minTemp = {Math.round(objs.main.temp_min-273.15)}
                      temp = {Math.round(objs.main.temp-273.15)}
                      humidity = {objs.main.humidity}
                      pressure = {objs.main.pressure}
                      DailyAveragePressure={objs.main.pressure/8}
                      />

              )
            })
            console.log(a);
            return(
              <Segment id='cardBg' style = {divStyle}>

              <h3 style = {{color: 'PALETURQUOISE'}}>{(i == 0) ? 'Today' : (i == 1) ? 'Tomorrow' : dat} </h3>



              <Grid centered>
                {a}
              </Grid>

            </Segment>)
          })
          console.log(jsobj);
        }


        return(
          <div>

          {jsarray}
        </div>
        );
      }
}
DisplayComponent.propTypes = {
 name: React.PropTypes.object
}
module.exports=DisplayComponent;
