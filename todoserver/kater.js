var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var requests = {};

app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send(JSON.stringify(requests));
})

app.post('/add', function (req, res) {
   console.log("Got a POST request for the homepage");
   console.log(req.body)
   var obj = req.body
   const id = "" + Math.random();
   obj = {
    ...obj, 
    id, 
    address: null,
    vehicle: null,
    startTime: null,
    endTime: null,
    details: null
  }
   requests[id] = obj
   console.log(obj)
   setTimeout(function(){
    res.send(obj);
   }, 2000);
})

app.get('/jsontest', function(req, res) {
  setTimeout(function() {
    res.send(JSON.stringify({
      "home_page_url": "http://roadfiresoftware.com",
      "title": "Roadfire Software",
      "items": [
        {
          "id": "http://roadfiresoftware.com/2018/01/whats-the-best-way-to-learn-ios-development-with-swift/",
          "url": "http://roadfiresoftware.com/2018/01/whats-the-best-way-to-learn-ios-development-with-swift/",
          "title": "What’s the best way to learn iOS development with Swift?"
        },
        {
          "id": "http://roadfiresoftware.com/2018/01/how-to-write-a-singleton-in-swift/",
          "url": "http://roadfiresoftware.com/2018/01/how-to-write-a-singleton-in-swift/",
          "title": "How to write a singleton in Swift"
        }
      ]
    }))  
  }, 2000);
})

var server = app.listen(2334, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Kater app listening at http://%s:%s", host, port)
})