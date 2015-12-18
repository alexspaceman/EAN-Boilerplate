function MainController ($scope, $http) {
  console.log('main controller loaded')

  $scope.templates = {
    mainView: 'templates/mainView.html'
  }

  $scope.testArray = [1, 2, 3, 4, 'I declare thumb war']
}

angular
  .module('app')
  .controller('MainController', MainController)