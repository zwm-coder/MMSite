'use strict';

var getMovieData = function getMovieData(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'get',
            url: url,
            dataType: "jsonp",
            success: function success(res) {
                resolve(res);
            }
        });
    });
};

function addItemToDom(name, data) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            $('.' + name).append('\n        <div class="cat cat-movie">\n        <a href="#"><img src="' + item['images']['medium'] + '" alt=""></a>\n        <div>\n            <div class="movie-title">' + item['title'] + '\n                <div class="movie-year">' + item['year'] + '</div>\n            </div>\n        </div>\n        </div>');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function init() {
    if (!localStorage.getItem('movie_online')) {
        var url = 'http://api.douban.com/v2/movie/in_theaters';
        getMovieData(url).then(function (res) {
            addItemToDom('item-movie-online', res['subjects'].slice(0, 4)); // 将数据添加到文档中
            localStorage.setItem('movie_online', JSON.stringify(res)); // 将数据存储到localStorage, 避免重复请求
        });
    } else {
        var _data = localStorage.getItem('movie_online');
        console.log(_data);
        addItemToDom('item-movie-online', JSON.parse(_data)['subjects'].slice(0, 4));
    }

    if (!localStorage.getItem('hot_movie')) {
        var _url = 'http://api.douban.com/v2/movie/top250';
        getMovieData(_url).then(function (res) {
            addItemToDom('item-movie', res['subjects'].slice(0, 4));
            localStorage.setItem('hot_movie', JSON.stringify(res));
        });
    } else {
        var data = localStorage.getItem('hot_movie');
        addItemToDom('item-movie', JSON.parse(data)['subjects'].slice(0, 4));
    }
}

$(document).ready(function () {
    init();
});