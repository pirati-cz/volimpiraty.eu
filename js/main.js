require.config(
{
	paths:
	{
		'jquery': 'jquery/jquery-1.10.2.min',
        'jquery-flexslider': 'jquery/jquery.flexslider'
    },
    shim:
	{
        'jquery-flexslider': ['jquery']
	}
});

require(['jquery', 'jquery-flexslider'], function($) {
  
    var ss = true;
    var num = 0;
    if ($('#c1').length) {
      ss = false;
      num = parseInt($('#c1').text()) - 1;
      num = (num < 0) ? 0 : num;
    }
  
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        startAt: num,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
      
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: ss,
        startAt: num,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
});

