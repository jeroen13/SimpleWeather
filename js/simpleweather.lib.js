/* Ver 1.0  -- SimpleWeather API By Jeroen_13 -- */


//global api_url
var api_url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='
var api_url_gcw = 'http://api.openweathermap.org/data/2.5/weather?q='

var SimpleWeather = {
	GetCurrentWeather: function(name, location, units, language, timeout, onSuccess, onError){
		console.log('[SW.lib] GetCurrentWeather("'+name+'", "'+location+'", "'+units+'", "'+language+'", "'+timeout+'", "'+onSuccess+'", "'+onError+'")');
		var GCWweather_url = api_url_gcw + location + '&mode=json&units=' + units + '&cnt=1&lang=' + language ;
		console.log('[SW.lib] '+GCWweather_url);
		var GCWSW_name = name;
		var GCWSW_timeout = timeout;
		var GCWoS = onSuccess;
		var GCWoE = onError;
		$.ajax({
        		type : "GET",
        		dataType : "jsonp",  
 		 		url: GCWweather_url, 
 				success: function(response){
 					console.log('[SW.lib] GET = Success');
                    localStorage.setItem('SW.lib.' + GCWSW_name, JSON.stringify({timestamp:(new Date()).getTime(), data: response}));
 					console.log('[SW.lib] Stored Cache for "' + GCWSW_name + '"');
 					console.log('[SW.lib] Calling onSuccess function: "'+GCWoS+'()"');
 					window[GCWoS]();
 				}, 
  				timeout: GCWSW_timeout,
  				error: function(e){
  					throw new Error('[SW.lib] ' + e);
  					throw new Error('[SW.lib] ERROR @ fetching weather - Connection timed out');
  					throw new Error('[SW.lib] Calling onError function: "'+GCWoE+'()"');
 					window[GCWoE]();
  				} 
			}); 
	},
	GetWeather: function(name, location, count, units, language, timeout, onSuccess, onError){
		console.log('[SW.lib] GetWeather("'+name+'", "'+location+'", "'+count+'", "'+units+'", "'+language+'", "'+timeout+'", "'+onSuccess+'", "'+onError+'")');
		var weather_url = api_url + location + '&mode=json&units=' + units + '&cnt=' + count + '&lang=' + language ;
		console.log('[SW.lib] '+weather_url);
		var SW_name = name;
		var SW_timeout = timeout;
		var oS = onSuccess;
		var oE = onError;
		$.ajax({
        		type : "GET",
        		dataType : "jsonp",  
 		 		url: weather_url, 
 				success: function(response){
 					console.log('[SW.lib] GET = Success');
                    localStorage.setItem('SW.lib.' + SW_name, JSON.stringify({timestamp:(new Date()).getTime(), data: response}));
 					console.log('[SW.lib] Stored Cache for "' + SW_name + '"');
 					console.log('[SW.lib] Calling onSuccess function: "'+oS+'()"');
 					window[oS]();
 				}, 
  				timeout: SW_timeout,
  				error: function(e){
  					throw new Error('[SW.lib] ' + e);
  					throw new Error('[SW.lib] ERROR @ fetching weather - Connection timed out');
  					throw new Error('[SW.lib] Calling onError function: "'+oE+'()"');
 					window[oE]();
  				} 
			}); 

	}
}
