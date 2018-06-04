"use strict";

window.onload = function () {
    $(".to-movie").click(function () {
        var ele = $(".to-movie").attr("href");
        var pos = $(ele).offset().top;
        $("html, body").animate({ scrollTop: pos }, 1000);
        return false;
    });
};

function selectItem(name) {
    var ele_name = ["icon-movie", "icon-music"];
    ele_name.forEach(function (item) {
        var element = $('.' + item);
        if (name === item) {
            var tmp = element.attr("class");
            if (!tmp.includes('active')) {
                element.addClass('active');
            }
        } else {
            if (element.attr('class').includes('active')) {
                element.removeClass('active');
            }
        }
    });
}