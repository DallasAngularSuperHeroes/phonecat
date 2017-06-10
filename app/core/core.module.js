"use strict";
var angular = require("angular");
require("./phone/phone.module");
var coreModule = angular.module('core', [
    'core.phone'
]);
module.exports = coreModule;
//# sourceMappingURL=core.module.js.map