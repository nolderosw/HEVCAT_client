angular.module('clientApp').controller('LoginCtrl', function ($location,$scope,$cookies,$http,$route,$rootScope) {
    $scope.app = 'Bem vindo (a)';
    $scope.login_error = false;
    $scope.login = function (username,password) {
        $http({
            url: $rootScope.BASE_URL + '/auth',
            method: "POST",
            data: {
                "username": username,
                "password": password,
            },
            withCredentials: true,
            headers: { 'Content-Type': 'application/json'}
        }).then(function (response) {
            $cookies.putObject('currentUser',response.data);
            $rootScope.currentUser = response.data;
            console.log(response.data);
            $route.reload();
            $scope.login_error = false;
        }).catch((error)=>{
            $scope.login_error = true;
        });
    }
});