window.onload = function () {
    $(".to-movie").click(() => {
        let ele = $(".to-movie").attr("href");
        let pos = $(ele).offset().top;
        $("html, body").animate({scrollTop: pos}, 1000);
        return false;
    })
}

function selectItem(name) {
    let ele_name = ["icon-movie", "icon-music"];
    ele_name.forEach(item => {
        var element = $('.'+item);
        if (name === item) {
            let tmp = element.attr("class");
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