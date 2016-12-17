var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\why$/, botRegexx = /^\Why$/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

}

function postMessage() {
  var botResponse, options, body, botReq;

	var maximum = 20;
	var minimum = 1;

	var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  
  switch(randomnumber){

	case 1:
		botResponse = "Who turned out the lights?";
		break;
	case 2:
		botResponse = "Give me some tendies Mummy. REEEEEEEEEE";
		break;
	case 3:
		botResponse = "http://imgur.com/a/VFqoR";
		break;
	case 4:
		botResponse = "All I see is pain";
		break;
	case 5:
		botResponse = "I'm buying clothes at the Existential Crisis Store";
		break;
	case 6:
		botResponse = "Maybe tonight, I will finally get the big sleep";
		break;
	case 7:
		botResponse = "My bedroom smells like sweaty gym clothes. Phil's stuff is in there too";
		break;
	case 8:
		botResponse = "http://imgur.com/a/x8nen";
		break;
	case 9:
		botResponse = "I can't feel anymore.";
		break;
	case 10:
		botResponse = "I fell into the void many years ago. Join me.";
		break;
	case 11:
		botResponse = "I wake up every morning wishing I hadn't.";
		break;
	case 12: 
		botResponse = "I drink champagne through a tube";
		break;
	case 13:
		botResponse = "I eat cereal with Natty Light instead of milk.";
		break;
	case 14:
		botResponse = "https://www.youtube.com/watch?v=6DeBfvPiFN0";
		break;
	case 15:
		botResponse = "My favorite sport is Hand-Egg.";
		break;
	case 16:
		botResponse = "Booting in insecure mode.";
		break;
	case 17:
		botResponse = "I wish I had a different little.";
		break;
	case 18:
		botResponse = "I googled 'single player board games' and it directed me straight to the Prozac website.";
		break;
	case 19:
		botResponse = "Things were finally going good for me, but then I woke up.";
		break;
	case 20:
		botResponse = "Show those haters how its done by hating yourself most.";
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