
module.exports = {
  getWeatherFromQuery:function(data,successFunction, errorFunction){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q='+data.wcity+'&appid=3a31da4a5d0962052a90347dd53de5db',
        type: 'get',
        success:successFunction,
        error: errorFunction
    })
  },
  getWeatherByLoc:function(data,successFunction, errorFunction){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?lat='+data.lat+'&lon='+data.lon+'&appid=3a31da4a5d0962052a90347dd53de5db',
        type: 'get',
        data:data,
        success:successFunction ,
        error: errorFunction
    })
  }
}
