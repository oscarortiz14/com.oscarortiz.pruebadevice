(function ()
{
    'use strict';

    angular
            .module('app.settings')
            .controller('SettingsCtrl', SettingsCtrl);

    function SettingsCtrl($scope, $mdTheming, $mdToast) {
        $scope.themeList = Object.keys($mdTheming.THEMES);
        $scope.theme = $mdTheming.defaultTheme();
        console.log($mdTheming.THEMES);

        $scope.saveTheme = function (theme) {
            localStorage.selectedTheme = theme;

            location.reload();
            $mdToast.show($mdToast.simple().textContent('Tema "' + theme + '" establecido'));
        };
    }
})();