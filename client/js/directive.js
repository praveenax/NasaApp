myApp.directive('batScorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/battingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('bowlscorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/bowlingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('headerbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/headerBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});


myApp.directive('battingcontrol', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/battingControls.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('bowlingcontrol', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/bowlingControls.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('progressbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/progressBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;
            
            console.log(attrs);



        }
    };


});