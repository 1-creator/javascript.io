 $(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
// Use the following for a TRUE redirect, that will not throw the user forward on hitting the back button.
//window.location.replace('http://example.com');

$('#link1').on('click', function(ev) {
    // options for opening new windows:  
    //   https://w3schools.com/jsref/met_win_open.asp
    window.open(this.href,"my_window", "width=400, height=400");
});
$('#link2').on('click', function(ev) {
    // Best suited for sending the user somewhere in response to an event
    window.location.href = this.href;
});
$('#link3').on('click', function(ev) {
    console.log('location href: ', window.location.href);
    console.log('location protocol: ', window.location.protocol);
    console.log('location hostname: ', window.location.hostname);
    console.log('location pathname: ', window.location.pathname);
    console.log('location port: ', window.location.port);
    console.log('location search: ', window.location.search);
    console.log('location hash: ', window.location.hash);

    ev.preventDefault(); // Prevent the synacor.com link from working
});
