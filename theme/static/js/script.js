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

    var twitterFetcher=function(){
    var d=null;

    return{
        fetch:function(a,b){
            d=b;
            var c=document.createElement("script");
            c.type="text/javascript";c.src="http://cdn.syndication.twimg.com/widgets/timelines/"+a+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();
            document.getElementsByTagName("head")[0].appendChild(c)
        }, callback:function(a){
            var b=document.createElement("div");
            b.innerHTML=a.body;d(b);
        }}
    }();

    twitterFetcher.fetch('501814308645253120', function(html){
      var element = document.getElementById('tweets');
      element.innerHTML = html.innerHTML;
    });