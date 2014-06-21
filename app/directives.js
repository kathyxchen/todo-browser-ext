angular.module("toDoApp.directives", []).directive("checkbox", function() {
  var directive = { };
  directive.restrict = 'AE';
  
  directive.scope = {
    score: '=score'
  };

  directive.templateUrl = "app/templates/done.html";
  
  directive.link = function(scope, elements, attr) {
    
    scope.updateCheck = function() {
      scope.check = [ ];
      scope.check.push({
          full: scope.score > 0
        });
    };
    
    scope.hover = function(idx) {
      scope.hoverIdx = idx;
    };
    
    scope.stopHover = function() {
      scope.hoverIdx = -1;
    };
    
    scope.checkColor = function(idx) {
      var checkClass = 'done-normal';
      if (idx <= scope.hoverIdx) {
       checkClass = 'done-highlight'; 
      }
      return checkClass;
    };
    
    scope.checkClass = function(check, idx) {
      var checkClass = 'fa-square-o';
      if (check.full) {
        checkClass = 'fa-check';
      }
      return checkClass;
    };
    
    scope.setCheck = function(idx) {
      scope.score = -scope.score;
      scope.stopHover();
    };
    
    scope.$watch('score', function(newValue, oldValue) {
      if (newValue !== null && newValue !== undefined) {
        scope.updateCheck();
      }
    });
  };
  
  return directive;
});