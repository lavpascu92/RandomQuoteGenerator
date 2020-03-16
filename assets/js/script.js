
$(document).ready(function(){
  
    var author;
    var quote;
   
    $.get("https://oasis-ribbon-mask.glitch.me").done(function (response) {
        author = response[0]["author"];
        quote = response[0]["quote"];

        $("#quote").text(quote);
        $("#author").text(" - " + author);
        $("#new_quote_btn").on("click", newQuote(response));
        $("#twitter").on("click", function(event){
            event.preventDefault();
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
        });
    });
   
    function newQuote(response){
        $("#quote").text(quote);
        $("#author").text(" - " + author);
    };
});
