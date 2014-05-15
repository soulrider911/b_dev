
var gitSnip = $("li pre");

//Code Clipboard Function
gitSnip.on("click" , function(){
	var words = ["Boom!" , "Whammy!", "Booya!" , "Holler!", "Broskee!" , "All Good!" , "Right on!"];
	var randomWord = words[Math.floor(Math.random() * words.length)];
	$(".modal strong").text(randomWord);
}).zclip({
	path: 'http://www.steamdev.com/zclip/js/ZeroClipboard.swf',
    copy: function () {
        return $(this).text().substring(2);
        return randomWord;
     },
     afterCopy:function(){
     	console.log($(this).text());
     	$(".overlay").fadeIn().addClass('active');

     	setTimeout(function(){
     		$(".overlay").fadeOut().removeClass('active');
     	},1200);
    }
});
