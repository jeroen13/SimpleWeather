SimpleWeather **ALPHA** 
=============

SimpleWeather, Create Weather Apps and Widgets.

Getting Started
===============

1. Download the files
2. Add ``` simpleweather.lib.js ``` to your file
3. Add ``` jquery and jquery ajax ``` as dependency

Done!

Basic usage:
============

``` SimpleWeather.GetWeather('<name>', '<search param>', '<amount of days>', '<units: metric - imperial>', '<language !SEE WIKI!>', '<timeout in ms>', '<onSuccess func>', '<onError func>');```

It should look like this:  
```SimpleWeather.GetWeather('weatherforlondon', 'london,gb', '4', 'metric', 'en', '2000', 'mysuccess', 'myerror');```

```
<name>: Specifies your Cache name
<search param>: City name
<amount of days>: number of days to fetch
<units>: metric OR imperial
<language>: SUPPORTED LANGUAGES:

 English - en, Russian - ru, Italian - it, Spanish - sp, Ukrainian - ua, 
 German - de, Portuguese - pt, Romanian - ro, Polish - pl, Finnish - fi, 
 Dutch - nl, French - fr, Bulgarian - bg, Swedish - se, 
 Chinese Traditional - zh_tw, Chinese Simplified - zh_cn, Turkish - tr 
 
 <timeout>: Timeout in ms, like: 2000
 <onSuccess func>: this function will run when the API successfully retrieves the data (Used for displaying the weather)
 <onError func>: this fuction will run when the API failes to retrieve the data. No connection ??
 
 ```
 




