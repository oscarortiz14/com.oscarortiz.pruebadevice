(function ()
{
    'use strict';

    angular
            .module('app')
            .controller('ToolbarCtrl', ToolbarCtrl);

    function ToolbarCtrl($mdSidenav, $scope, $state) {
        $scope.$state = $state;

        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        $scope.isOpenLeft = function () {
            return $mdSidenav('left').isOpen();
        };

        $scope.navList = {
            "app.home": "Inicio",
            "app.settings": "Opciones",
            "app.people.list": "Lista",
            "app.people.details": "Detalles",
            "app.pokedex.list": "Pokedex",
            "app.pokedex.details": "Pokedex"
        };
    }
})();