//Demo/example code.

var outerBot = new Bot("outerBot", "|");

//when UniChat is ready to load bots, register the bot(s). If you are doing multiple bots, you should put the registerBot commands in the same initializeBots block. Syntax: registerBot(bot_username, bot_header_char, callback). Note that callback is the name of the function *in quotes* to be called whenever a message starts with the command header.
function initializeBots() {
  outerBot.register();
}

//this is the function called whenever a message starts with the command header. We recommend function names of the format execute<bot_username> to prevent overlap.
outerBot.executeCommand =  function(data) {
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  const var versionNum = 1.0;
  //if the first 4 characters of the message (starting from 0), minus the command header, are "ping", then highlight the user and say, "Pong!".
  if (message.substring(0,6) == "throw ") {
  	this.respond(poster + " throws " + message.substring(6) + " away.");
  }
  if (message.substring(0, 8) == "promote ") {
	var randMessage = ["a thing that exists that you can find.", "absolutely fantastic!", "pitifully mediocre.", "not worthy of this message.", "so perfect it will make you hate reality."];
	var randSubject = ["product", "service", "idea", "religion", "corporate money grab"];
	var randNumber1 = Math.floor(Math.random() * 5);
	var randNumber2 = Math.floor(Math.random() * 5);
	this.respond(poster + "'s new " + randSubject[randNumber2] + ", " + message.substring(8) + ", is " + randMessage[randNumber1]);
  }
  if (message.substring(0, 8) == "destroy ") {
	this.respond(poster + " destroys " + message.substring(8) + ".");
  }
  if (message.substring(0) == "status") {
	this.respond(poster == "123outerme" ? "Welcome back, sir. " : "" + "At version " + versionNum + ", I am fully operational." + (Math.floor(Math.random() * 3) == 1 ? " Probably." : ""));
  }

}
