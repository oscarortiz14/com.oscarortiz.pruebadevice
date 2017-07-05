(function ()
{
    'use strict';

    angular
            .module('app.pokedex', [])
            .config(config);

    function config($stateProvider)
    {
        $stateProvider
                .state('app.pokedex', {
                    abstract: true
                })
                .state('app.pokedex.list', {
                    url: '/pokedex',
                    views: {
                        'content@': {
                            templateUrl: 'src/pokedex/pokedex.html',
                            controller: 'PokedexCtrl as list'
                        },
                        'footer@': {
                            templateUrl: 'src/pokedex/footer.html',
                            controller: 'PokedexFooterCtrl as lf'
                        }
                    },
                    data: {
                        backAction: function ($state) {
                            $state.go('app.home');
                        }
                    }
                })
                .state('app.pokedex.details', {
                    url: '/pokedex/{id}',
                    views: {
                        'content@': {
                            templateUrl: 'src/pokedex/templates/details.tmpl.html',
                            controller: 'PokedexDetailsCtrl as ld'
                        }
                    },
                    data: {
                        backAction: function ($state) {
                            $state.go('app.pokedex.list');
                        }
                    }
                });
    }
})();