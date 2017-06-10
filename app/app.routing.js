routing.$inject = ['$locationProvider', '$routerProvider',];

export default function routing($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  $routeProvider.when('/phones', {
    template: '<phone-list></phone-list>'
  }).when('/phones/:phoneId', {
    template: '<phone-detail></phone-detail>'
  }).otherwise('/phones');
};
