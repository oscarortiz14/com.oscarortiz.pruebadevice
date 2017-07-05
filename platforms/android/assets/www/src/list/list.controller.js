(function ()
{
    'use strict';
    angular
            .module('app.list')
            .controller('ListCtrl', ListCtrl)
            .controller('ListDetailsCtrl', ListDetailsCtrl)
            .controller('ListFooterCtrl', ListFooterCtrl);

    function ListCtrl($scope, DeviceService, $mdToast, $rootScope, ValueLista, $http, SqlService) {
        $rootScope.lista = ValueLista;

        if (!$rootScope.listOptions)
            $rootScope.listOptions = 'name';
    }

    function ListFooterCtrl($scope, $mdToast, $rootScope, $mdDialog, ValueLista) {

        $scope.add = function () {
            $mdDialog.show({
                controller: function ($scope, $mdDialog) {
                    $scope.save = function (obj) {
                        $rootScope.lista.push(obj);
                        $mdDialog.hide();
                        $mdToast.show(
                                $mdToast.simple()
                                .textContent('Añadido: ' + obj.name)
                                .position('bottom')
                                .hideDelay(3000)
                                );
                    };
                    $scope.close = function () {
                        $mdDialog.hide();
                    };
                },
                templateUrl: 'src/list/templates/edit.tmpl.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: true,
                openFrom: '#add-button',
                closeTo: '#add-button'
            });
        };
        
        $scope.filter = function () {
            $mdDialog.show({
                controller: function ($scope, $mdDialog) {
                    var o = $rootScope.listOptions.split('-');
                    if (o.length === 1) {
                        $scope.obj = {atr: o[0], reverse: ''};
                    } else {
                        $scope.obj = {atr: o[1], reverse: '-'};
                    }

                    $scope.filter = function (obj) {
                        $rootScope.listOptions = obj.reverse + obj.atr;
                        $mdDialog.hide();
                    };
                    $scope.close = function () {
                        $mdDialog.hide();
                    };
                },
                templateUrl: 'src/list/templates/filter.tmpl.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: true,
                openFrom: '#filter-button',
                closeTo: '#filter-button'
            });
        };
    }

    function ListDetailsCtrl($scope, $rootScope, $stateParams, ValueLista, $http, $mdToast, $state) {
        $scope.obj = ValueLista[parseInt($stateParams.id)];
        
        if (!$scope.obj)
            $state.go('app.list');
    }
})();