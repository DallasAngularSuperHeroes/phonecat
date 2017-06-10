import * as angular from 'angular';
import '../core/phone/phone.module';

const phoneListModule: ng.IModule = angular.module('phoneList', [
  'core.phone'
]);

export = phoneListModule;