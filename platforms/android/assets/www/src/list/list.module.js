(function ()
{
    'use strict';

    angular
            .module('app.list', [])
            .config(config);

    function config($stateProvider)
    {
        $stateProvider
                .state('app.people', {
                    abstract: true
                })
                .state('app.people.list', {
                    url: '/list',
                    views: {
                        'content@': {
                            templateUrl: 'src/list/list.html',
                            controller: 'ListCtrl as list'
                        },
                        'footer@': {
                            templateUrl: 'src/list/footer.html',
                            controller: 'ListFooterCtrl as lf'
                        }
                    },
                    data: {
                        backAction: function ($state) {
                            $state.go('app.home');
                        }
                    }
                })
                .state('app.people.details', {
                    url: '/list/{id}',
                    views: {
                        'content@': {
                            templateUrl: 'src/list/templates/details.tmpl.html',
                            controller: 'ListDetailsCtrl as ld'
                        }
                    },
                    data: {
                        backAction: function ($state) {
                            $state.go('app.people.list');
                        }
                    }
                });
    }
})();