(function ()
{
    'use strict';

    angular
            .module('app')
            .controller('SidenavCtrl', SidenavCtrl);

    function SidenavCtrl($mdSidenav, $scope, $state, $rootScope) {
        $scope.$state = $state;

        $scope.navList = [
            {
                text: 'Inicio',
                icon: 'home',
                sref: 'app.home'
            },
            {
                text: 'Lista',
                icon: 'sword',
                sref: 'app.people.list'
            },
            {
                text: 'Pokedex',
                icon: 'pokeball',
                sref: 'app.pokedex.list'
            }
        ];

        $rootScope.$on('$locationChangeStart', function ()
        {
            if ($mdSidenav('left').isOpen())
                $mdSidenav('left').close();
        });
    }
})();