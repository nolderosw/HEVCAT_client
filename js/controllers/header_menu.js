angular.module('clientApp').controller('Header_menuCtrl', function ($scope,$location,$cookies,$rootScope,$http,$route) {
    $scope.logout = function () {
        $cookies.remove('currentUser');
        $rootScope.currentUser = undefined;
        $location.path('/');
        $http({
            url: $rootScope.BASE_URL + '/logout',
            method: "POST",
            withCredentials: true,
        }).then(function (response) {
            $route.reload();
        }).catch((error)=>{
            $route.reload();
        });
    }
});