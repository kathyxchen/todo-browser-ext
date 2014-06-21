angular.module("toDoApp.filters", []).filter("caps", function() {
	return function(input) {
		return _.capitalize(input);
	};
});

