// we add controller to app module
app.controller('HomeController', function HomeController($scope) {
   
    $scope.taskList = [];

    $scope.taskTitle = '';

    $scope.title = 'Awesome ToDo';

    $scope.addTask = function(){
        $scope.taskList.push({
            title : $scope.taskTitle // ng-model
        });

        console.log($scope.taskList);
    }
});
