angular.module("toDoApp.controllers", []).controller("listCtrl", function($scope, taskService) {
	$scope.tasks = taskService.get();
	$scope.newTask = { };

	$scope.isEmpty = function(str) {
		return _.isBlank(str);
	};

	$scope.addTask = function(main, detail) {
		$scope.tasks.push({
			main: main,
			detail: detail,
			score: -1
		});
		$scope.newTask.main = "";
		$scope.newTask.detail ="";
	};

	$scope.deleteTask = function(idx) {
		$scope.tasks.splice(idx, 1);
	};

	$scope.editTask = function(idx) {
		/*enable editing!*/
	};

	$scope.deleteAll = function() {
		$scope.tasks = [];
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
	}

	$scope.$watch('tasks', function(newValue, oldValue) {
		if (newValue !== oldValue) {
			taskService.put($scope.tasks);
		}
	}, true);

});