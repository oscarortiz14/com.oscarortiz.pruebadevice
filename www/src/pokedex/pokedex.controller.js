(function ()
{
    'use strict';
    angular
            .module('app.pokedex')
            .controller('PokedexCtrl', PokedexCtrl)
            .controller('PokedexDetailsCtrl', PokedexDetailsCtrl)
            .controller('PokedexFooterCtrl', PokedexFooterCtrl);

    function PokedexCtrl($scope, $rootScope, Pokedex, $state) {
        $rootScope.lista = Pokedex;

        if (!$rootScope.listOptions)
            $rootScope.listOptions = 'name';

        $scope.$state = $state;
    }

    function PokedexFooterCtrl($scope, $mdToast, $rootScope, $mdDialog, ValueLista) {

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

    function PokedexDetailsCtrl($scope, $rootScope, $stateParams, Pokedex, $http, $mdToast, $state) {
        $scope.obj = Pokedex[$stateParams.id];
        
        console.log($scope.obj);

        if (!$scope.obj)
            $state.go('app.pokedex.list');
    }
})();