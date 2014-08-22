// Sidebar Toggle

    $(function() {
        $('.toggle-nav').click(function() {
            toggleNav();
        });
    });

    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            $('#site-wrapper').removeClass('show-nav');
        } else {
            $('#site-wrapper').addClass('show-nav');
        }
    }

// Latest Tweets

