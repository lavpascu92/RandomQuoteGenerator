
$(document).ready(function()
{
    const QUOTES_ARR =
    [
        {
            quote:"Programming isn't about what you know; it's about what you can figure out.",
            author:"Chris Pine"
        },
        {
            quote:"The only way to learn a new programming language is by writing programs in it.",
            author:"Dennis Ritchie"
        },
        {
            quote:"Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
            author:"Joyce Wheeler"
        },
        {
            quote:"Testing leads to failure, and failure leads to understanding.",
            author:"Burt Rutan"
        },
        {
            quote:"The best error message is the one that never shows up.",
            author:"Thomas Fuchs"
        },
        {
            quote:"It’s not a bug – it’s an undocumented feature.",
            author:"Anonymous"
        },
        {
            quote:"A good programmer is someone who always looks both ways before crossing a one-way street.",
            author:"Doug Linder"
        },
        {
            quote:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            author:"Martin Golding"
        },
        {
            quote:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
            author:"Edsger Dijkstra"
        },
        {
            quote:"Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.",
            author:"Anonymous"
        },
        {
            quote:"There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
            author:"Bjarne Stroustrup"
        },
        {
            quote:"In order to understand recursion, one must first understand recursion.",
            author:"Anonymous"
        },
        {
            quote:"The best performance improvement is the transition from the nonworking state to the working state.",
            author:"J. Osterhout"
        },
        {
            quote:"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
            author:"Seymour Cray"
        },
        {
            quote:"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
            author:"Mosher’s Law of Software Engineering"
        }
    ];
    const NR_OF_QUOTES = QUOTES_ARR.length;
    let index = randomize(NR_OF_QUOTES);
    let quote = QUOTES_ARR[index]["quote"];
    let author = QUOTES_ARR[index]["author"];
    //Random quotes appear when page refreshes
    $("#quote").text(quote).hide().fadeIn(1200);
    $("#author").text(" - " + author).hide().fadeIn(1200);
    //Random quotes apper when NEW QUOTE button is clicked
    $("#new_quote_btn").on("click", function()
    {
        index = randomize(NR_OF_QUOTES);
        quote = QUOTES_ARR[index]["quote"];
        author = QUOTES_ARR[index]["author"];
        $("#quote").text(quote).hide().fadeIn(1200);
        $("#author").text(" - " + author).hide().fadeIn(1200);
        $("#twitter").off().on("click", function(event)
        {
            event.preventDefault();
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
        });
    });
    $("#twitter").off().on("click", function(event)
    {
        event.preventDefault();
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
    });
    //Randomizes a number and rounds it to nearest lower integer
    function randomize(nrOfQuotes)
    {
        return Math.floor(Math.random()*nrOfQuotes);
    };

    
});