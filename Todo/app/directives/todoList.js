app.directive('todoList', function () {
    return {
        restrict: 'AE',
        scope: {
            tasks: '='
        },
        templateUrl: 'app/templates/todoList.tpl.html',
        controller: function ($scope) {
            $scope.tasks.push({
                title: 'This is sample tile'
            });

            $scope.removeTodo = function(rowCount){
                //alert(rowCount);
                $scope.tasks.splice(rowCount, 1);
            }
        }
    };
});