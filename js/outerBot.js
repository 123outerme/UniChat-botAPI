outerBot.executeCommand = function (data) {
  //load version number from outerBotVersion.txt dynamically. It's a mess, don't ask how it works, but it does.

var x=new XMLHttpRequest;x.onreadystatechange=function(){4==x.readyState&&(outerBot.version=x.responseText.replace(/\n/g,""))},x.open("GET","https://123outerme.github.io/UniChat-botAPI/outerBotVersion.txt",!0),x.send();
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
  if (message.startsWith("throw ")) {
    if (message.substring(6, 14) == "outerbot") {
      outerBot.respond("You can't pick me up, " + poster + ", I'm too heavy.");
    } else {
      outerBot.respond(poster + " throws " + rawMessage.substring(7) + " away.");
    }
  }
  if (message.startsWith("promote ")) {
    var randMessage = ["a thing that exists that you can find.", "absolutely fantastic!", "pitifully mediocre.", "not worthy of this message.", "so perfect it will make you hate reality.", "basically the reason WWIII was started.", "probably taking candy from babies.", "acceptable.", "what your entire life has been leading up to.", "the best thing around town.", "worse than expected.", "currently in a huge fireball on the launch pad.", "even more mediocre than UniChat."];
    var randSubject = ["product", "service", "idea", "religion", "corporate money grab", "non-corporeal entity", "sense of pride and accomplishment"];
    var randNumber1 = Math.floor(Math.random() * randMessage.length);
    var randNumber2 = Math.floor(Math.random() * randSubject.length);
    outerBot.respond(poster + "'s new " + randSubject[randNumber2] + ", " + rawMessage.substring(9) + ", is " + randMessage[randNumber1]);
  }

  if (message.startsWith("options")) {
    var options = 1 * (message.match(/[1-9]/) ? message.match(/[1-9]/)[0] : Math.floor(1+Math.random() * 8));
    options = Math.min(options,9);
    var randOps = ["find a rubber ducky raft", "release the hounds", "strap rockets to a baby carriage", "tuck and roll", "stop, drop, and roll", "replace your kidneys", "execute Order 66", "explode thirteen tons of TNT", "go nuclear", "strategically carpet-bomb every square inch", "enlist at least 450 men, 5 jets, 2 bombers, and 6 tanks", "revert back to trench warfare", "become war profiteers", "repurpose outerBot to fight ninjas", "spam to our hearts delight", "highlight 123outerme", "go into a new chatroom", "PM _iPhoenix_", "actually use some of the message tags", "download the Internet", "throw a segfault error", "exploit Spectre", "create a UniChat bot with the bot API", "create a website", "create a GitHub repo", "start WWIII", "send a tweet", "chase and pursue", "smile and wave", "launch a brick into space with rubber bands", "send in a few more men"];
    var allOptions = "";
    var punct = ".";
    //I guess I went too far in the "compression" process. Small portions of the code were found on StackOverflow.
    (function(r){for(var f,n=r.length,o=0;n--;)o=Math.floor(Math.random()*(n+1)),f=r[n],r[n]=r[o],r[o]=f;return r})([...Array(options||0)].map((v,i)=>i)).forEach(function(i,j){punct = ".", j < options - 1 && (punct = ", or "), j < options - 2 && (punct = ", "); allOptions += "" + randOps[i] + punct;});
    outerBot.respond("Well, " + poster + ", we could " + allOptions);
  }

  if (message == "analysis") {
    var allAnalyses = ["it's gone from critical to super-critical", "whoever THAT is is responsible", "it's a mixture of crime-fighting and sleep-walking", "not all heroes wear capes", "I miscalculated by a factor of 100", "we are on the moon", "you forgot your paperwork", "it was just a misunderstanding","we still aren't fully sure what went wrong, but it went wrong."];
    var randNumber = Math.floor(Math.random() * allAnalyses.length);
    outerBot.respond("Well " + poster + ", it appears that " + allAnalyses[randNumber] + ".");
  }

  if (message.startsWith("destroy ")) {
    if (message.substring(8, 16) == "outerbot")
      outerBot.respond("Nice try, " + poster + ", but I'm invulnerable.");
    else
      outerBot.respond(poster + " destroys " + rawMessage.substring(9) + ".");
  }
  if (message == "status" || message == "version")
    outerBot.respond((poster == "123outerme" ? "Welcome back, sir. " : "") + "At version " + outerBot.version + ", I am fully operational." + (Math.random()<.3? " Probably." : ""));

  if (message.startsWith("sarcasm "))
    outerBot.respond(poster + " says \"" + rawMessage.substring(9) + "\" sarcastically.");

  if (message.startsWith("echo ") && (message.substring(5, 6) != "/") && (poster == "123outerme"))
    outerBot.respond(rawMessage.substring(6));
}
