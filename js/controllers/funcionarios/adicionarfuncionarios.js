angular.module('clientApp').controller('AdicionarfuncionariosCtrl', function ($timeout,$scope, $http, $rootScope) {

    $(document).ready(function () {
        $('#icel').mask('(99) 99999-9999');
    });



    $scope.postUser = function () {
        //$scope.user.birthDate = new Date($scope.user.birthDate);
        //console.log($scope.user);
        $http({
            url: $rootScope.BASE_URL + '/user/register',
            withCredentials: true,
            method: "POST",
            data: $scope.user,
        }).then(function (response) {
            if (response) {
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.user = {};
                    });
                });
                swal("Cadastrado!", "Funcionário cadastrado com sucesso.", "success");
            } else {
                swal("Erro!", "Erro ao cadastrar o funcionário", "error");
            }
        }, function () {
            swal("Erro!", "Erro ao cadastrar o funcionário.", "error");
        });
    };

});
