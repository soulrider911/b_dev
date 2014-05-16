
var gitSnip = $("li pre");
//Random Success messages
var words = ["Boom!" , "Whammy!", "Booya!" , "Holler!", "Broskee!" , "All Good!" , "Right on!"];

// Zero Clip Function
ZeroClipboard.config({ forceHandCursor: true });
var client = new ZeroClipboard( gitSnip, {
    moviePath: "ZeroClipboard.swf"
});

client.on( "load", function(client) {
   console.log( "movie is loaded" );

  client.on( "complete", function(client, args) {
    var randomWord = words[Math.floor(Math.random() * words.length)];
        $(".modal strong").text(randomWord);

        $(".overlay").fadeIn().addClass('active');
        setTimeout(function(){
            $(".overlay").fadeOut().removeClass('active');
        },1200);
  });
});