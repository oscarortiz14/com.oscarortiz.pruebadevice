(function ()
{
    'use strict';

    angular
            .module('app.settings', [])
            .config(config);

    function config($stateProvider)
    {
        $stateProvider
                .state('app.settings', {
                    url: '/settings',
                    views: {
                        'content@': {
                            templateUrl: 'src/settings/settings.html',
                            controller: 'SettingsCtrl as sett'
                        }
                    },
                    data: {
                        backAction: function ($state) {
                            $state.go('app.home');
                        }
                    }
                });
    }
})();