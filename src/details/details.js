(function(angular){

    var app = angular.module("moviecat_details",["ngRoute","heima"]);

    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailsController"
        });
    }]);

    app.controller("detailsController",["$scope","$routeParams","hmjsonp",function($scope,$routeParams,hmjsonp){
        hmjsonp({
            url:"http://api.douban.com/v2/movie/subject/"+$routeParams.id,
            params:{},
            callback:function(data){
               $scope.movie = data;
               $scope.isShow = false;
               $scope.$apply();
            }
        });
    }]);



})(angular);