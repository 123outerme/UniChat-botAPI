outerBot.executeCommand =  function(data) {
  //load version number from outerBotVersion.txt dynamically. It's a mess, don't ask how it works, but it does.
  var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){if(4==xhr.readyState){outerBot.version=xhr.responseText}},xhr.open("GET","https://123outerme.github.io/UniChat-botAPI/outerBotVersion.txt",!0),xhr.send();
  //outerBot.version = outerBot.version.substring(0, outerBot.version.length - 1);
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  const versionNum = 1.0;
  if (message.startsWith("throw "))
  {
	  if (message.substring(6, 14) == "outerbot")
		  outerBot.respond("You can't pick me up, " + poster + ", I'm too heavy.");
		else
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
    if (message.substring(8,16) == "outerbot")
      outerBot.respond("Nice try, " + poster + ", but I'm invulnerable.");
	else
      outerBot.respond(poster + " destroys " + rawMessage.substring(9) + ".");
  }
  if (message == "status" || message == "version")
    outerBot.respond((poster == "123outerme" ? "Welcome back, sir. " : "") + "At version " + outerBot.version + ", I am fully operational." + (Math.floor(Math.random() * 3) == 1 ? " Probably." : ""));
  
  if (message.startsWith("sarcasm "))
    outerBot.respond(poster + " says \"" + rawMessage.substring(9) + "\" sarcastically.");
    
  if (message.startsWith("echo"))
    outerBot.respond(rawMessage.substring(5));
}
