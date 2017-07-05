(function ()
{
    'use strict';
    angular.module('app')
            .factory('JsonService', function ($resource) {
                return {
                    get: function (filePath, callback) {
                        $resource(filePath).get(callback);
                    }
                };
            })

            .factory('DeviceService', function () {

                return {
                    vibrate: function (time) {
                        navigator.vibrate(time);
                    },
                    alert: function (message, callback, title, buttonText) {
                        navigator.notification.alert(message, callback, title, buttonText);
                    },
                    confirm: function (message, callback, title, buttonLabels) {
                        navigator.notification.confirm(message, callback, title, buttonLabels);
                    },
                    prompt: function (message, callback, title, buttonLabels, defaultText) {
                        navigator.notification.prompt(message,
                                callback, //Objeto 'results'
                                title,
                                buttonLabels, //[Ok, Exix]
                                defaultText);
                    },
                    beep: function (times) {
                        navigator.notification.beep(times);
                    },

                    deviceInfo: function () {
                        return device;
                    },
//                    c: function () {
//                        function onSuccess(contact) {
//                            alert("Save Success");
//                        }
//
//                        function onError(contactError) {
//                            alert("Error = " + contactError.code);
//                        }
//
//                        // create a new contact object
//                        var contact = navigator.contacts.create();
//                        contact.displayName = "Plumber";
//                        contact.nickname = "Plumber";            // specify both to support all devices
//
//                        // populate some fields
//                        var name = new ContactName();
//                        name.givenName = "Jane";
//                        name.familyName = "Doe";
//                        contact.name = name;
//
//                        var phone = [];
//                        phone[0] = new ContactField('mobile', '9999-444-5-62', true);
//                        contact.phoneNumbers = phone;
//
//                        // save to device
//                        contact.save(onSuccess, onError);
//                    },

                    battery: function () {
                        window.addEventListener("batterystatus", onBatteryStatus, false);
                        function onBatteryStatus(status) {
                            return status;
                        }
                    }

                };
            });
})();