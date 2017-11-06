/*
 1.功能模块分析.
   AngularJS是以模块化的方式来构建应用的.
   分模块来开发.
   有如下几个模块.

   首页模块
   正在热映模块
   即将上映模块
   top250模块.
   电影详情



*/


(function (angular) {

  //1.创建一个模块来管理ng-app指定的区域.
  var app = angular.module("moviecat", [
    "moviecat_home",
    "moviecat_details",
    "moviecat_movie_list"
  ]);

  //设置锚链接以#开头.
  //是设置所有的锚链接都以#开头.
  app.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.hashPrefix("");//#
  }]);


  app.controller("searchCtrl", ["$scope","$window",function ($scope,$window) {
    $scope.query = function () {
      //1.先拿到用户输入的关键字/.
      var kw = $scope.keyWord;
      //2.修改url地址栏的路由.
      $window.location.hash = "#/search?q="+kw;
    }
  }]);

})(angular);