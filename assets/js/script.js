
$(document).ready(function(){
    var quote = '';
    var author = '';
    //GET Quote on first load from API
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json").done(function(response)
    {
        quote = response["quote"];
        author = response["author"];
        $("#quote").text(quote).hide().fadeIn(1500);
        $("#author").text(" - " + author).hide().fadeIn(1500);
        $("#twitter").off().on("click", function(event)
        {
             event.preventDefault();
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
        });
    });
    //GET Quote from API when button is clicked
    $("#new_quote_btn").on("click", function()
    {
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json").done(function(response)
        {
            quote = response["quote"];
            author = response["author"];
            $("#quote").text(quote).hide().fadeIn(1500);
            $("#author").text(" - " + author).hide().fadeIn(1500);
            $("#twitter").off().on("click", function(event)
            {
                event.preventDefault();
                window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
            });
        });
    });
});


