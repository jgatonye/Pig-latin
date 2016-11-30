$(document).ready(function() {
  $('#latin-translator').submit(function(event){
    event.preventDefault();
    var word = $("#sentence").val();
    var word2 = word.split("");
    var vowels = ['a','e','i','o','u'];
    for(var i=0; i<vowels.length; i++){
      if(word2[0]===vowels[i]){
        word2.push("ay");
      }else if(word2[0] != vowels[i] && word2[1] === vowels[i]) {
        word2.push(word2[0], "ay")
        word2.shift()
      }
    }
  var joined = word2.join("")
  alert(joined)
  });
});
