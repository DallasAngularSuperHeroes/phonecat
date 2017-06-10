import * as angular from 'angular';
import './phone/phone.module';

const coreModule: ng.IModule = angular.module('core', [
  'core.phone'
]);

export = coreModule;