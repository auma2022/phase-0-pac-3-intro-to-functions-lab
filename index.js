function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
 const string = "Hello";
 function logShout() {
  console.log(string.toUpperCase());
 }
 
function logWhisper() {
  console.log(string.toLowerCase());
 }
 logShout();
 logWhisper();

 
 
 function sayHiToHeadphonedRoommate (heyYou) {
  var cantHear = "I can't hear you!";
  var yesIhear = "YES INDEED!";
  var loveTogo = "I would love to!";
  if (heyYou.toLowerCase(heyYou) === heyYou) {
    return cantHear;
  }
  else if (heyYou.toUpperCase(heyYou) === heyYou) {
    return yesIhear;
  }
  else if ("Let's have dinner together!" === heyYou) {
    return loveTogo
  }
}
