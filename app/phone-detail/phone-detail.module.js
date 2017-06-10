"use strict";
var angular = require("angular");
require("angular-route");
require("../core/phone/phone.module");
var phoneDetailModule = angular.module('phoneDetail', [
    'ngRoute',
    'core.phone'
]);
module.exports = phoneDetailModule;
//# sourceMappingURL=phone-detail.module.js.map