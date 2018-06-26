$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".ads-vr").addClass("ads-vr-sticky");
    } else {
        $(".ads-vr").removeClass("ads-vr-sticky");
    }
});