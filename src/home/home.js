/*
1. 豆瓣电影
   优化
   搜索

2. gulp


3. 小的工具.
   

4. hexo



*/


//1.这个js文件是来处理首页模块相关的逻辑的.
(function(angular){

    //1.创建1个首页模块.
    var app = angular.module("moviecat_home",["ngRoute"]);


    //2.配置和首页相关的路由.
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home",{
            templateUrl:"./home/home.html"
        }).when("/",{
            redirectTo:"/home"
        });
    }]);


})(angular);