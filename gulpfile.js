var gulp = require('gulp');
var $ = require('gulp-load-plugins')();//自动帮加载package.json文件里的gulp插件

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

//复制文件
/*gulp.task('copy-html',function () {
 return gulp.src('app/index.html')
 .pipe(gulp.dest('dist'));
 })

 gulp.task('copy-images',function () {
 return gulp.src('app/imgs/!**!/!*.{jpg,png}')
 .pipe(gulp.dest('dist'));
 })

 gulp.task('copy-other',function () {
 return gulp.src(['app/css/!*.css','app/js/!*.js','app/js/!*.tmp.js'],{base:'app'})
 .pipe(gulp.dest('dist'));
 })

 gulp.task('default',['copy-html','copy-images','copy-other'],function () {
 console.log('全部拷贝完毕！')
 })*/

//压缩文件
gulp.task('concat', function () {
    return gulp.src(['app/js/*.js', '!app/js/*.tpm.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('concat', function () {
    return gulp.src(['app/js/*.js', '!app/js/*.tmp.js'])//指定要合并的文件glob
        .pipe(concat('app.js'))//进行合并并指定合并后的文件名
        .pipe(gulp.dest('dist/js'));//输出到目标路径
});

gulp.task('uglify', function () {
    return gulp.src(['app/js/*.js', '!app/js/*.tmp.js'])//指定要处理的文件
        .pipe(concat('app.js'))//合并成一个文件
        .pipe(gulp.dest('dist/js'))//保存此文件
        .pipe(uglify())//进行压缩
        .pipe(rename('app.min.js'))//对此文件进行重命名
        .pipe(gulp.dest('dist/js'));//再输出一次
});

gulp.task('minify', function () {
    return gulp.src('app/css/*.css')
        .pipe(minify())//对 css再进行压缩
        .pipe(rename('style.min.css'))//重命名
        .pipe(gulp.dest('dist/css'));//输出到目的地
});

/*gulp.task('copy-images', function () {
    return gulp.src('app/imgs/!**!/!*.{jpg,png}')//指定要压缩的图片
        .pipe(imagemin()) //进行图片压缩
        .pipe(gulp.dest('dist/img'));//输出目的地
});*/

gulp.task('pngquant', function () {
    gulp.src('app/imgs/**/*.{jpg,png}')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['concat', 'uglify', 'minify', 'pngquant']);





