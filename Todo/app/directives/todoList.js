app.directive('todoList', function () {
    return {
        restrict: 'E',
        scope: {
            tasks: '='
        },
        templateUrl: 'app/templates/todoList.tpl.html',
        controller: function ($scope) {
            $scope.tasks.push({
                title: 'This is sample tile'
            });
        }
    };
});