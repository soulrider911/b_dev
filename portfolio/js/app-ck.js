// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();$(".rotator span").textrotator({animation:"fade",separator:",",speed:2e3});var $container=$("#gallery");$container.isotope();$("#work nav a").on("click",function(){var e=$(this).attr("data-filter");$container.isotope({filter:e});$("#work nav a").removeClass("active");$(this).addClass("active");return!1});