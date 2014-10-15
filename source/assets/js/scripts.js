//= require "ga"
//= require "jquery-1.8.3.min"
//= require "jquery.easing-1.3.pack"
//= require "jquery.biggerlink.min"

/*
 * searchua
 * version: 0.1.0
 * lastupdate: 2014-01-20
 * author: Masaki Hongo
 * git: https://github.com/masakihongo/searchUA
 * license: MIT
 */
! function(a, b) {
    "use strict";
    a.ua = {};
    var c = a.ua;
    c.name = a.navigator.userAgent.toLowerCase(), c.isIE = c.name.indexOf("msie") >= 0 || c.name.indexOf("trident") >= 0, c.isiPhone = c.name.indexOf("iphone") >= 0, c.isiPod = c.name.indexOf("ipod") >= 0, c.isiPad = c.name.indexOf("ipad") >= 0, c.isiOS = c.isiPhone || c.isiPod || c.isiPad, c.isAndroid = c.name.indexOf("android") >= 0, c.isTablet = c.isiPad || c.isAndroid && c.name.indexOf("mobile") < 0, c.isIE && (c.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isiOS && (c.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isAndroid && (c.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isIE && b("body").addClass("ie ie_" + c.ver), c.isiPhone && b("body").addClass("iPhone"), c.isiPod && b("body").addClass("iPod"), c.isiPad && b("body").addClass("iPad"), c.isiOS && b("body").addClass("iOS iOS_" + c.ver), c.isAndroid && b("body").addClass("android android_" + c.ver), c.isTablet && b("body").addClass("tablet")
}(this, jQuery);
if (ua.isIE) {
    $('body').addClass('ie ie_' + ua.ver);
}
if (ua.isiPhone) {
    $('body').addClass('iPhone');
}
if (ua.isiPod) {
    $('body').addClass('iPod');
}
if (ua.isiPad) {
    $('body').addClass('iPad');
}
if (ua.isiOS) {
    $('body').addClass('iOS iOS_' + ua.ver);
}
if (ua.isAndroid) {
    $('body').addClass('android android_' + ua.ver);
}
if (ua.isTablet) {
    $('body').addClass('tablet');
}

// biggerlink
$('.project-box').biggerlink();

// social button
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.___gcfg = {
    lang: 'ja'
};
(function() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');



// scroll top
var topBtn = $('.pagetop');
var sideNav = $('.side-nav');

topBtn.click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});

// side-nav
$(function() {
    var offsetTopArray = new Array(4);
    $('section').each(function(index, el) {
        offsetTopArray[index] = $(this).offset().top;
    });
    $(document).scroll(function(event) {
        for (var i = offsetTopArray.length - 1; i >= 0; i--) {
            if (offsetTopArray[i] <= $(document).scrollTop()) {
                sideNav.find('i').css('color', '#666');
                sideNav.find('i').eq(i).css('color', "#00A3ED");
                break;
            }
        }
    });
});

// scroll blocks
$('a[href*="#"]').click(function(event) {
    if (!$(this).hasClass('noscr')) {
        event.preventDefault();
        var f = this.href;
        var p = f.split('#');
        var t = p[1];
        var to = $('#' + t).offset();
        var tt = to.top;
        $('html, body').animate({
            scrollTop: tt
        }, 700, 'easeOutCubic');
    }
});

// video
if (typeof window.orientation != "undefined") {
    $('video').remove();
    $('.screen').addClass('device-bg');
};


// header
var header = $('header');
$(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
        header.addClass('header-scroll');
    } else {
        header.removeClass('header-scroll');
    }
});

// hover fade
$('a img, .fade').hover(
    function() {
        $(this).stop().fadeTo(200, 0.6);
    },
    function() {
        $(this).stop().fadeTo(200, 1.0);
    });

// rollover
$(".rollover").mouseover(function() {
    $(this).attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
}).mouseout(function() {
    $(this).attr("src", $(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
}).each(function() {
    $("<img>").attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
});
