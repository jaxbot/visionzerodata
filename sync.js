var request = require('request');

request("https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=date_trunc_y(date)%20as%20year,%20sum(number_of_pedestrians_killed)%20as%20number_of_pedestrians_killed,%20sum(number_of_cyclist_killed)%20as%20number_of_cyclists_killed,%20sum(number_of_pedestrians_injured)%20as%20number_of_pedestrians_injured,%20sum(number_of_cyclist_injured)%20as%20number_of_cyclists_injured&$group=year", function(err, res, body) {
	console.log(body);
});
