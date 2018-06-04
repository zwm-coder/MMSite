# MMSite
这是一个基于豆瓣电影和QQ音乐的API接口实现的一个练手前端项目。本项目只是利用了jQuery，未基于其他的框架，因为只是处于练手的目的，所以没有选择利用其他的框架来写。

### 效果预览
![](https://temp-1253237582.cos.ap-chengdu.myqcloud.com/1.png)
![](https://temp-1253237582.cos.ap-chengdu.myqcloud.com/2.png)
![](https://temp-1253237582.cos.ap-chengdu.myqcloud.com/3.png)
### 项目目录结构说明
```
│  .babelrc
│  index.html
│  package-lock.json
│  package.json
│  README.md
│  
├─dist
│  └─js
│          common.js
│          jquery-3.3.1.min.js
│          movie.js
│─node_modules
├─src
│  │  base.html
│  │  movie.html
│  │  music.html
│  │  
│  ├─css
│  │      base.css
│  │      movie.css
│  │      style.css
│  │      
│  └─js
│          common.js
│          movie.js
│          
└─static
    ├─bg
    │      background-movie.jpg
    │      background.jpg
    │      movie.jpg
    │      
    └─font
            Caviar dreams.ttf
            尚雅体.otf
```

其中src/js文件夹中是使用ES6编写的JS文件，而dist/js文件夹中是经过Babel转换后的JS文件

### 项目进度
目前已经完成了首页以及电影页面的一部分
