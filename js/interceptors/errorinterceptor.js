angular.module('clientApp').factory('errorInterceptor', function ($q,$location,$rootScope) {
    return{
        responseError: function(rejection){
            if(rejection.status == 403){
                $rootScope.currentUser = undefined;
                $location.path('/');
                return $q.reject(rejection);
            }
        }
    };
});