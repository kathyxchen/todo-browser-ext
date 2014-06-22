angular.module("toDoApp.filters", []).filter("caps", function() {
	return function(input) {
		return _.capitalize(input);
	};
});

angular.module("toDoApp.filters").filter("startFrom", function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	};
});

