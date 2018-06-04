
let getMovieData = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: url,
            dataType: "jsonp",
            success: function(res) {
                resolve(res)
            }
        })
    })
}

function addItemToDom (name, data) {
    for (var item of data) {
        $('.'+name).append(`
        <div class="cat cat-movie">
        <a href="#"><img src="${item['images']['medium']}" alt=""></a>
        <div>
            <div class="movie-title">${item['title']}
                <div class="movie-year">${item['year']}</div>
            </div>
        </div>
        </div>`);
    }
}

function init () {
    if (!localStorage.getItem('movie_online')) {
        let url = 'http://api.douban.com/v2/movie/in_theaters';
        getMovieData(url).then((res) => {
            addItemToDom('item-movie-online', res['subjects'].slice(0,4));  // 将数据添加到文档中
            localStorage.setItem('movie_online', JSON.stringify(res));  // 将数据存储到localStorage, 避免重复请求
        })
    } else {
        let data = localStorage.getItem('movie_online');
        console.log(data);
        addItemToDom('item-movie-online', JSON.parse(data)['subjects'].slice(0, 4));
    }

    if (!localStorage.getItem('hot_movie')) {
        let url = `http://api.douban.com/v2/movie/top250`;
        getMovieData(url).then(res => {
            addItemToDom('item-movie', res['subjects'].slice(0, 4));
            localStorage.setItem('hot_movie', JSON.stringify(res));
        })
    }else {
        var data = localStorage.getItem('hot_movie');
        addItemToDom('item-movie', JSON.parse(data)['subjects'].slice(0, 4));
    }
}

$(document).ready(() => {
    init();
});