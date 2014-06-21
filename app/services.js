angular.module("toDoApp.services", []).factory("taskService", function() {
	var STORAGE_ID = 'toDoApp.tasks', factory = { };
	
	factory.get = function() {
		return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');		
	};

	factory.put = function(tasks) {
		localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
	};

	return factory;
});