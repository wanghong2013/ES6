var gulp = require('gulp');
var babel
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件

//创建一个任务，起名为server
gulp.task('server',function () {

    //初始化服务\创建服务器
    browserSync.init({
        server: "03"
    });
    //监视文件中所有的js文件
    gulp.watch("03/*.js").on('change',reload);
    //监视文件中所有的html文件
    gulp.watch("03/*.html").on('change', reload);
   // console.log('hello')
});

//执行默认任务
gulp.task('default',['server']);