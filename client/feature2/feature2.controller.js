addCustomRoute({
    'path': '/feature2',
    'action': {
        templateUrl: '/feature2/feature2.html',
        controller: 'Feature2Controller'
    }
});

app.controller('Feature2Controller', function ($scope) {
    $scope.message = 'Feature #2';
});

