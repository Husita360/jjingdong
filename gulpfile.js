
    // 导入gulp
const gulp = require('gulp');
    // 导入del
const del = require('del');
    // 导入css前缀
const autoprefixer = require('gulp-autoprefixer');
    // 导入css压缩
const cssmin = require('gulp-cssmin');
    // 导入html压缩
const htmlmin =  require('gulp-htmlmin');
    // 导入es6转成es5
const babel =require('gulp-babel');
    // 导入js压缩
const uglify =require('gulp-uglify');
    // 引入sass包
const sass = require('gulp-sass');
    // 服务器
const webserver = require('gulp-webserver');

    // 定义原则

 // 定义html原则
const htmlHandler = () =>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,//移除属性上的双引号
        removeComments:true,//移除注释
        collapseWhitespace:true,//移除所有空格,会变成一行代码
        minifyCSS:true,//把页面里面style标签里面的css样式也去空格
        minifyJS:true,//把页面里面script标签里面的js代码也去空格
        collapseBooleanAttributes:true//把值为布尔值的属性简写
    }))
    .pipe(gulp.dest('./dist/pages'))
}

    // 定义css原则
    const cssHandler = () =>{
        return gulp.src('./src/css/*.css')
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
    }

    // 定义js原则
    const jsHandler = () =>{
        return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
    }

    // 定义插件的移动原则
const libHandler = ()=>{
    return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}

    // 图片的移动原则
const imagesHandler = ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

    // 定义sass的方法
const sassHandler = ()=>{
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./src/css'))

}
const phpHandler =()=>{
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest("./dist/php"))
}

    // 定义删除原则
const delHandler =() =>{
    return  del(['./dist']);
}

    //  定义服务器
const webserverHandler = ()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:8090,
        open:'./pages/index.html',
        livereload:true,
        proxies:[
            {
                source: '/abc', //表示请求的地址
                target: 'http://127.0.0.1/json.php'//你要代理的地址
            },
            {
                source: '/eee', //表示请求的地址
                target: 'http://127.0.0.1/json.php'//你要代理的地址
            } 
        ]
    }))
}

// 自动监视任务
const watchHandler = () =>{
    // 监控css文件
    gulp.watch('./src/css/*.css',cssHandler);
    // 监控js文件
    gulp.watch('./src/js/*.js',jsHandler);
    // 监控html文件
    gulp.watch('./src/pages/*.html',htmlHandler);
    // 监控图片文件
    gulp.watch('./src/images/**',imagesHandler);
    // 监控sass
    gulp.watch('./src/sass/*.scss',sassHandler);
    gulp.watch('./src/php/*.php',phpHandler)
    // 监视框架文件
    gulp.watch('./src/lib/**',libHandler)
  
}
// 优化任务导出，优先导出delhander
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(libHandler,imagesHandler,cssHandler,htmlHandler,jsHandler,sassHandler,phpHandler),
    webserverHandler,
    watchHandler
)
