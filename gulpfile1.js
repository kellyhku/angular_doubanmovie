
var gulp = require("gulp");
var cssmin = require("gulp-cssmin");

var uglify = require("gulp-uglify");

var concat = require("gulp-concat");

var htmlmin = require("gulp-htmlmin");

var imagemin = require("gulp-imagemin");

gulp.task("test",function(){
    console.log("我是test任务呀!");
});
gulp.task("yscss",function(){
    gulp.src("./src/assets/css/reset.css")
    .pipe(cssmin()) 
    .pipe(gulp.dest("./dist"));
});


gulp.task("watchcss",function(){
    gulp.watch("./src/assets/css/reset.css",["yscss"]);
});

gulp.task("ysjs",function(){
  
    gulp.src(["./src/**/*.js","!./src/assets/js/prefixfree.min.js"])
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});



gulp.task("hebing",function(){
    gulp.src(["./src/**/*.js","!./src/assets/js/prefixfree.min.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});



gulp.task("yshtml",function(){
    gulp.src("./src/**/*.html")
    .pipe(htmlmin({
         removeComments: true,//清除HTML注释
         collapseWhitespace: true//压缩HTML
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("ystp",function(){
    gulp.src("./src/assets/img/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist"));
});