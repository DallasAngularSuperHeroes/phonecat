import * as angular from 'angular';
import 'angular-route';
import '../core/phone/phone.module';

const phoneDetailModule: ng.IModule = angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]);

export = phoneDetailModule;