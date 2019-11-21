(function ($) {


    // 1: get request to grab random post and append to the DOM
    function getRandomQuote() {
        $.ajax({
            method: "GET",
            url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        }).done(function (data) {
            // console.log(data);
            $(".source").empty();

            let postObject = data[0]//.shift() and [0] is the same
            console.log(postObject);

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



        }).fail(function (error) {
            console.log("an error occurred", error);
        });
    }


    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        getRandomQuote();
    });


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
            alert('Success! Comments are closed for this post.');
        }).fail(function (response) {
            alert('please fill out all the required fields.');
        })
    });
})(jQuery);

// IIFE Immediatley Invoked Function Expression
// Invoked also means calling a function or just running a function
