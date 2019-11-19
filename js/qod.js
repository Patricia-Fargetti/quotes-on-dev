(function ($) {

    $('body').append('hello world');
    // your code goes here

    // 1: get request to grab random post and append to the DOM

    // add a click event for the "Show Me Another" btn and then run the AJAX code below
    $.ajax({
        method: "GET",
        url: // qod_vars.rest_url + /wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1
    }).done(function (data) {
            console.log(data);
            // append the quote to the DOM
        }).fail(function (error) {
            console.log("an error occurred", error);
        });

    // 2: post a new quote using the post method
    // using a form to submit a quote so a .submit event

})(jQuery);

// IIFE Immediatley Invoked Function Expression
// Invoked also means calling a function or just running a function
