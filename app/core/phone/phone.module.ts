import * as angular from 'angular';
import 'angular-resource';

const phoneModule: ng.IModule = angular.module('core.phone', [
  'ngResource'
]);

export = phoneModule