//Fucntion Hello
(function (window){

  var speakWord = "Hello";
  var helloSpeaker = {};

  helloSpeaker.speak = function (name){
    console.log(speakWord + " " + name);
};

})(window);
