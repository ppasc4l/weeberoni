var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\!PREVIEW JoJo$/, botReg = /^\!Preview JoJo$/,
	  botR = /^\!preview JoJo$/, botReturn = /^\weeb$/;
	  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

  if(request.text && botReg.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botR.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botReturn.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

	var maximum = 5;
	var minimum = 1;

	var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  
  switch(randomnumber){

	case 1:
		botResponse = ">Poses Menacingly";
		break;
	case 2:
		botResponse = "UWRRRYYYYYYYYYYYYYYYYYY";
		break;
	case 3:
		botResponse = "Joestar-san~~~~";
		break;
	case 4:
		botResponse = "This is the work of an enemy stand!";
		break;
	case 5:
		botResponse = "Everything, and I mean EVERYTHING, is a JoJo Reference";
		break;
  }

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;
