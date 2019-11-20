(function ($) {


    // 1: get request to grab random post and append to the DOM
    function getRandomQuote() {
        $.ajax({
            method: "GET",
            url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        }).done(function (data) {
            // console.log(data);

            const postObject = data[0];

            console.log(postObject);

            $('.entry-content').html(postObject.content.rendered);

            // check if _qod_quote_source is an empty string before appending or using .html  !== ''

            // append the quote to the DOM
        }).fail(function (error) {
            console.log("an error occurred", error);
        });
    }

    // add a click event for the "Show Me Another" btn and then run the AJAX code below

    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        getRandomQuote();
        // 2: post a new quote using the post method
        // using a form to submit a quote so a .submit event
    });

})(jQuery);

// IIFE Immediatley Invoked Function Expression
// Invoked also means calling a function or just running a function
