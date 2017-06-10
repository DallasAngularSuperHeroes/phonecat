"use strict";
var angular = require("angular");
require("angular-animate");
require("./core/core.module");
require("./phone-detail/phone-detail.module");
require("./phone-list/phone-list.module");
var phonecatAppModule = angular.module('phonecatApp', [
    'ngRoute',
    'ngAnimate',
    'core',
    'phoneDetail',
    'phoneList'
])
    .config(routeConfig);
routeConfig.$inject = ["$routeProvider"];
var phonesRoute = { template: '<h2>phonelist router</h2><phone-list></phone-list>' };
function routeConfig($routeProvider) {
    $routeProvider
        .when('/', phonesRoute)
        .when('/phones', phonesRoute)
        .when('/phones/:phoneId', { template: '<phone-detail></phone-detail>' })
        .otherwise({ redirectTo: '/' });
}
module.exports = phonecatAppModule;
//# sourceMappingURL=app.module.js.map