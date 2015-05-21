// Code goes here
angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function($scope) {

            function range(start, stop, step) {
                $scope.resullt = "";
                var a = [start],
                    i = start;
                while (i < stop) {
                    if ((i % 3) === 0 && (i % 5 !== 0)) {
                        $scope.result = $scope.result + i + "Fizz" + "\n" ;

                    } else if ((i % 3 === 0) && (i % 5 === 0)) {
                        $scope.result = $scope.result + i + "FizzBuzz" + "\n";
                    } else if ((i % 5) === 0 && (i % 3 !== 0)) {

                        $scope.result = $scope.result + i + "Buzz" + "\n";
                    } else 
                    {
                        $scope.result = $scope.result + i + "\n";
                    }
                i += step;
                a.push(i)
            }
            return a;
        }
        $scope.numbers = range(1, 100, 1);

    }]);