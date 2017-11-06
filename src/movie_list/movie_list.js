
//1. 这个js文件是来写正在热映模块的相关代码的.
(function(angular){
    var app = angular.module("moviecat_movie_list",["ngRoute","heima"]);

    //2. 配置和正在热映模块相关的路由.
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:movieType/:page?",{
            templateUrl:"./movie_list/movie_list.html",
            controller:"movie_listController"
        });
    }]);

    app.controller("movie_listController",["$scope","hmjsonp","$routeParams","$route","$window",function($scope,hmjsonp,$routeParams,$route,$window){

        //1.定义页容量.
        $scope.pageSize = 10;

        //2.页码.
        $scope.pageIndex = ($routeParams.page || "1") - 0; //undefined
        hmjsonp({
            url:"http://api.douban.com/v2/movie/"+$routeParams.movieType,
            params:{
                count:$scope.pageSize, //10
                start:($scope.pageIndex-1)*$scope.pageSize,//0
                q:$routeParams.q //"周星驰"
            },
            callback:function(data){
                $scope.movie = data;
                $scope.pageCount = $window.Math.ceil(data.total / $scope.pageSize)
                $scope.isShow = false;
                $scope.$apply();//告诉视图,数据模型发生变化了.你该刷新视图了.
            }
        });

        $scope.getPage = function(pageIndex){
            if(pageIndex < 1 || pageIndex > $scope.pageCount){
                return;
            }
            $route.updateParams({
                page:pageIndex
            });
        };

        

    }]);
})(angular);