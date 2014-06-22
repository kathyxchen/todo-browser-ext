angular.module("toDoApp.controllers", []).controller("listCtrl", function($scope, taskService) {
	$scope.tasks = taskService.get();
	$scope.newTask = { };
	
	$scope.currentPage = 0;
	$scope.pageSize = 10;

	$scope.isEmpty = function(str) {
		return _.isBlank(str);
	};

	$scope.addTask = function(m, d) {
		if (m.length > 0) {
			$scope.tasks.push({
				main: m,
				detail: d,
				score: -1
			});
		};	
		$scope.newTask.main = "";
		$scope.newTask.detail ="";
	};

	$scope.deleteTask = function(idx) {
		$scope.tasks.splice(idx, 1);
	};

	$scope.deleteAll = function() {
		$scope.tasks = [];
		$scope.currentPage = 0;
	};

	$scope.deleteChecked = function(arr, i) {
		var pos = i;
		for (pos = i; pos < $scope.tasks.length; pos++) {
			if($scope.tasks[pos].score == 1) {
				$scope.tasks.splice(pos, 1);
				break;
			}
		}
		if (pos < $scope.tasks.length) {
			$scope.deleteChecked($scope.tasks, pos);
		}
	};

	$scope.$watch('tasks', function(newValue, oldValue) {
		if (newValue !== oldValue) {
			taskService.put($scope.tasks);
		}
	}, true);

	$scope.numberOfPages = function() {
		var pgs = Math.ceil($scope.tasks.length / $scope.pageSize);
		if (pgs !== 0) {
			return pgs;
		}
		return 1;
	};

	$scope.getDate = function() {
		var d = new Date();
		return (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear();
	}
});