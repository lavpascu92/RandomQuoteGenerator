
$(document).ready(function(){
    var author;
    var quote;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
            "x-rapidapi-key": "eb928f619cmshba06b4347b509f7p1ec0f2jsnd31971782297",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {}
    }
    
    $.ajax(settings).done(function (response) {
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
