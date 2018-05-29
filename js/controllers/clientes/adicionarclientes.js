angular.module('clientApp').controller('AdicionarclientesCtrl', function ($scope, $http, $rootScope, $timeout) {

    $scope.postCustomer = function () {
        $http({
            url: $rootScope.BASE_URL + '/customer',
            withCredentials: true,
            method: "POST",
            data: $scope.customer,
        }).then(function (response) {
            if (response) {
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.customer = {};
                    });
                });
                swal("Cadastrado!", "Cliente cadastrado com sucesso.", "success");
            } else {
                swal("Erro!", "Erro ao cadastrar o cliente", "error");
            }
        }, function () {
            swal("Erro!", "Erro ao cadastrar o cliente.", "error");
        });
    }
    var cidades = {};
    $(document).ready(function () {
        //json de cidades e estados
        $.getJSON('js/custom/cidades_estados.json', function (data) {
            $scope.estados = data;
            for (var i = 0; i < data.length; i++) {
                cidades[data[i].sigla] = data[i].cidades;
            }
        });

        //mascaras
        $('#icpf').mask("999.999.999-99");
        $('#icnpj').mask("99.999.999/9999-99");
        $('#icep').mask("99999-999");
        $('#ifone').mask("(99) 9999-9999");
        $('#icel').mask("(99) 99999-9999");

    });
    $scope.setCidades = function (sigla) {
        $scope.cidades = cidades[sigla];
    };
});
