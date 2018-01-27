//Demo/example code.

var outerBot = new Bot("outerBot", "|", "1.1");

function initializeBots() {
  outerBot.register();
}

outerBot.executeCommand =  function(data) {
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  const versionNum = 1.0;
  if (message.startsWith("throw ")) {
    outerBot.respond(poster + " throws " + rawMessage.substring(7) + " away.");
  }
  if (message.startsWith("promote ")) {
    var randMessage = ["a thing that exists that you can find.", "absolutely fantastic!", "pitifully mediocre.", "not worthy of this message.", "so perfect it will make you hate reality."];
    var randSubject = ["product", "service", "idea", "religion", "corporate money grab"];
    var randNumber1 = Math.floor(Math.random() * randMessage.length);
    var randNumber2 = Math.floor(Math.random() * randSubject.length);
    outerBot.respond(poster + "'s new " + randSubject[randNumber2] + ", " + rawMessage.substring(9) + ", is " + randMessage[randNumber1]);
  }
  if (message.startsWith("destroy ")) {
    outerBot.respond(poster + " destroys " + rawMessage.substring(9) + ".");
  }
  if (message == "status") {
    outerBot.respond((poster == "123outerme" ? "Welcome back, sir. " : "") + "At version " + outerBot.version + ", I am fully operational." + (Math.floor(Math.random() * 3) == 1 ? " Probably." : ""));
  }
}
