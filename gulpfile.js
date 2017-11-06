var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var htmlmin = require("gulp-htmlmin");
var imagemin = require("gulp-imagemin");

//压缩所有的css文件.
gulp.task("yscss", function () {
    gulp.src("./src/**/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("./dist"));
});

//压缩js代码.
gulp.task("ysjs", function () {
    gulp.src(["./src/**/*.js", "!./src/assets/js/prefixfree.min.js"])
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/assets/js"));
});

//压缩html
gulp.task("yshtml", function () {
    gulp.src("./src/**/*.html")
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true//压缩HTML
        }))
        .pipe(gulp.dest("./dist"));
})