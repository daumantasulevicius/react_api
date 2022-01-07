var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res){
	fs.readFile( __dirname + "/" + "cities.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
	var result = [];
    fs.readFile( __dirname + "/" + "cities.json", 'utf8', function (err, data) {
    var cities = JSON.parse( data );
	for(const element of cities){
		if(element.id == req.params.id){
			result.push(element);
			console.log(element);
		}
	}
      res.end( JSON.stringify(result));
	  
   });
})

app.post('/', function(req, res){
    var reqid = req.body.id;
	var reqname = req.body.name;
	var reqstate_id = req.body.state_id;
	var reqstate_code = req.body.state_code;
	var reqcountry_id = req.body.country_id;
	var reqcountry_code = req.body.country_code;
	var reqlatitude = req.body.latitude;
	var reqlongitude = req.body.longitude;
	var reqwikiDataId = req.body.wikiDataId;
	
	fs.readFile( __dirname + "/" + "cities.json", 'utf8', function (err, data) {
		var cities = JSON.parse( data );
		cities.push({id:reqid, state_id:reqstate_id, state_code:reqstate_code, country_id:reqcountry_id, country_code:reqcountry_code, latitude:reqlatitude, longitude:reqlongitude, wikiDataId:reqwikiDataId});
		json = JSON.stringify(cities);
		fs.writeFile('cities.json', json, 'utf8', callback);
	});
    res.end(json);
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})