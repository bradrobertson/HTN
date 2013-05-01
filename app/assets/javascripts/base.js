// Docs at http://simpleweather.monkeecreate.com
$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '4125',
    location: '',

    success: function(weather) {
      
      html = '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li>'+weather.tempAlt+'&deg;C</li>';
      html += '<li class="currently">'+weather.currently+'</li></ul>';

  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});



/* 
 * simpleWeather - http://simpleweather.monkeecreate.com
 * Version 2.1 - Last updated: January 11 2013
 */
(function($){"use strict";$.extend({simpleWeather:function(m){m=$.extend({zipcode:'',woeid:'2357536',location:'',unit:'f',success:function(a){},error:function(a){}},m);var n=new Date();var o='http://query.yahooapis.com/v1/public/yql?format=json&rnd='+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+'&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=';if(m.location!==''){o+='select * from weather.forecast where location in (select id from weather.search where query="'+m.location+'") and u="'+m.unit+'"'}else if(m.zipcode!==''){o+='select * from weather.forecast where location in ("'+m.zipcode+'") and u="'+m.unit+'"'}else if(m.woeid!==''){o+='select * from weather.forecast where woeid='+m.woeid+' and u="'+m.unit+'"'}else{m.error("No location given. Please provide either a US zip code, WOEID or location.");return false}$.getJSON(o,function(l){if(l!==null&&l.query.results!==null){$.each(l.query.results,function(i,a){if(a.constructor.toString().indexOf("Array")!==-1){a=a[0]}var b=new Date();var c=new Date(b.toDateString()+' '+a.astronomy.sunrise);var d=new Date(b.toDateString()+' '+a.astronomy.sunset);if(b>c&&b<d){var e='d'}else{var e='n'}var f=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW','N'];var g=f[Math.round(a.wind.direction/22.5)];if(a.item.condition.temp<80&&a.atmosphere.humidity<40){var h=-42.379+2.04901523*a.item.condition.temp+10.14333127*a.atmosphere.humidity-0.22475541*a.item.condition.temp*a.atmosphere.humidity-6.83783*(Math.pow(10,-3))*(Math.pow(a.item.condition.temp,2))-5.481717*(Math.pow(10,-2))*(Math.pow(a.atmosphere.humidity,2))+1.22874*(Math.pow(10,-3))*(Math.pow(a.item.condition.temp,2))*a.atmosphere.humidity+8.5282*(Math.pow(10,-4))*a.item.condition.temp*(Math.pow(a.atmosphere.humidity,2))-1.99*(Math.pow(10,-6))*(Math.pow(a.item.condition.temp,2))*(Math.pow(a.atmosphere.humidity,2))}else{var h=a.item.condition.temp}if(m.unit==="f"){var j=Math.round((5.0/9.0)*(a.item.condition.temp-32.0))}else{var j=Math.round((9.0/5.0)*a.item.condition.temp+32.0)}var k={title:a.item.title,temp:a.item.condition.temp,tempAlt:j,code:a.item.condition.code,todayCode:a.item.forecast[0].code,units:{temp:a.units.temperature,distance:a.units.distance,pressure:a.units.pressure,speed:a.units.speed},currently:a.item.condition.text,high:a.item.forecast[0].high,low:a.item.forecast[0].low,forecast:a.item.forecast[0].text,wind:{chill:a.wind.chill,direction:g,speed:a.wind.speed},humidity:a.atmosphere.humidity,heatindex:h,pressure:a.atmosphere.pressure,rising:a.atmosphere.rising,visibility:a.atmosphere.visibility,sunrise:a.astronomy.sunrise,sunset:a.astronomy.sunset,description:a.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.condition.code+e+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.condition.code+e+".png",tomorrow:{high:a.item.forecast[1].high,low:a.item.forecast[1].low,forecast:a.item.forecast[1].text,code:a.item.forecast[1].code,date:a.item.forecast[1].date,day:a.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.forecast[1].code+"d.png"},city:a.location.city,country:a.location.country,region:a.location.region,updated:a.item.pubDate,link:a.item.link};m.success(k)})}else{if(l.query.results===null){m.error("Invalid location given.")}else{m.error("Weather could not be displayed. Try again.")}}});return this}})})(jQuery);



$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#backtotop').fadeIn();
    } else {
      $('#backtotop').fadeOut();
    }
  });

  $('#backtotop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

$(function() {
    $('.slider').unslider();
});