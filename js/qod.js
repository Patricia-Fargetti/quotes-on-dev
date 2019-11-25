(function ($) {
    let lastPage = '';

    // 1: get request to grab random post and append to the DOM
    function getRandomQuote() {


        lastPage = document.URL;

        $.ajax({
            method: "GET",
            url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        }).done(function (data) {

            $(".source").empty();

            let postObject = data[0]//.shift() and [0] is the same

            const postSource = data[0];
            const postUrl = data[0];
            $('.entry-content').html(postObject.content.rendered);
            $('.entry-title').html(postObject.title.rendered);

            // check if _qod_quote_source is an empty string before appending or using .html  !== ''
            function addsource() {
                const s = data[0]._qod_quote_source;

                if (s !== "") {
                    $('.source').html(`<a href="${postUrl._qod_quote_source_url}">${postSource._qod_quote_source}</a>`);

                } else {

                }

            }
            addsource();

            history.pushState(null, null, postObject.slug);
            //1st value is an object hwich manages state
            //2nd value is the url title browser tab
            // 3rd value is the url in the browser



        }).fail(function (error) {
            console.log("an error occurred", error);
        }); // ajax


    }



    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        getRandomQuote();

    });//the end of button click


    $('#quote-submission-form').on('submit', function (event) {
        event.preventDefault(); // prevent reload

        $.ajax({
            method: 'post',
            url: window.api_vars.rest_url + 'wp/v2/posts/',
            data: {
                title: $("#quote-author").val(),
                content: $("#quote-content").val(),
                _qod_quote_source: $("#quote-source").val(),
                _qod_quote_source_url: $("#quote-source-url").val(),
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-WP-Nonce', window.api_vars.wpapi_nonce);
            }
        }).done(function (response) {
            console.log(response);
            alert('Success! ');
        }).fail(function (response) {
            alert('please fill out all the required fields.');
        })
    });
    $(window).on('popstate', function () {
        //update the url
        window.location.replace(lastPage);

    });
})(jQuery);


// IIFE Immediatley Invoked Function Expression
// Invoked also means calling a function or just running a function
