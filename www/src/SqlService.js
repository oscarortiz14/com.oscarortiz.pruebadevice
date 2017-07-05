(function ()
{
    'use strict';
    angular.module('app')
            .service('SqlService', SqlService);

    function SqlService($filter) {
        var service = this;

        service.getByProperty = function (container, property, propertyValue, exactSearch) {
            if (!Array.isArray(container))
                return [];

            return container.filter(function (e) {
                if (exactSearch) {
                    return e[property] === propertyValue;
                } else {
                    return angular.lowercase(e[property]).indexOf(angular.lowercase(propertyValue)) !== -1;
                }
            });
        };

        service.filter = function (array, expression, comparator, anyPropertyKey) {
            return $filter('filter')(array, expression, comparator, anyPropertyKey);
        };

        service.filterArr = function (array, key, val) {
            return array.filter(function (e) {
                return val.length === _.intersection(val, e[key]).length;
            });
        };

        service.order = function (array, expression, reverse, comparator) {
            return $filter('orderBy')(array, expression, reverse, comparator);
        };

        return service;
    }

})();