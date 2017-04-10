angular.module('web.storage', [])
    .factory('localStorage', function() {return WebStorageFactory();})
    .factory('sessionStorage', function() {return WebStorageFactory();});

function WebStorageFactory() {
    return {};
}