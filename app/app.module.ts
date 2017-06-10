import * as angular from 'angular';
import 'angular-animate';
import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';

const phonecatAppModule: ng.IModule = angular.module('phonecatApp', [
  'ngRoute',
  'ngAnimate',
  'core',
  'phoneDetail',
  'phoneList'
])
  .config(routeConfig);

routeConfig.$inject = ["$routeProvider"];
const phonesRoute: angular.route.IRoute = { template: '<h2>phonelist router</h2><phone-list></phone-list>' };

function routeConfig($routeProvider: ng.route.IRouteProvider):void {
      $routeProvider
      .when('/', phonesRoute)
      .when('/phones', phonesRoute)
      .when('/phones/:phoneId', { template: '<phone-detail></phone-detail>' })
      .otherwise({ redirectTo: '/' });
}

export = phonecatAppModule;