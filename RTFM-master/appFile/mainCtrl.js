angular.module('rtfm-master')
.controller('mainCtrl', function($scope) {
	$scope.person = 'Steve likes hamburgers';
	$scope.meat = 'Cows';
	
	$scope.killPerson = function () {
		$scope.person = 'Steve is dead now';
	}
});