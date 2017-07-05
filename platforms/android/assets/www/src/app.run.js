(function ()
{
    'use strict';

    angular
            .module('app')
            .run(init);

    function init($state, $rootScope, DeviceService, $mdSidenav, $mdDialog) {
        /*************** Eventos Cordova *****************/
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            $rootScope.device = device;
            $rootScope.$apply();

            //Atrás
            ManageBackButton();
        }

        function ManageBackButton() {
            document.addEventListener("backbutton", onBackKeyDown, false);
            function onBackKeyDown(e) {
                e.preventDefault();

                //Cierra la barra de navegación si está abierta
                if ($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                    return;
                }

                //Si hay algún modal abierto, lo cierra
                if (angular.element(document).find('md-dialog').length > 0) {
                    $mdDialog.cancel();
                    return;
                }

                if ($state.current.name === 'app.home') {
                    DeviceService.confirm('', function (btn) {
                        if (btn === 1)
                            navigator.app.exitApp();
                    }, '¿Salir?', ['Si']);
                    return;
                } else {
                    $state.current.data.backAction($state);
                }

                //Según en qué sección estemos, vamos hacia atrás.
//                switch ($state.current.name) {
//                    case 'app.home':
//                        DeviceService.confirm('', function (btn) {
//                            if (btn === 1)
//                                navigator.app.exitApp();
//                        }, '¿Salir?', ['Si']);
//                        break;
//
////                    case 'app.settings':
////                        $state.go('app.home');
////                        break;
//
////                    case 'app.people.list':
////                        $state.go('app.home');
////                        break;
////
////                    case 'app.people.details':
////                        $state.go('app.people.list');
////                        break;
//
//                    default:
//                        history.back();
//                }
            }
        }

        $rootScope.$on('$locationChangeStart', function (event) {
            console.log($state.current);
        });
    }


})();