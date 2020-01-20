/*-------------- app -------------*/
var app = angular.module("blog", []);


/*---------- controller ----------*/
app.controller('gallery', ['$scope', function($scope) { 
    $scope.gallery = [
        { 
            imgSrc: 'https://images.pexels.com/photos/302740/pexels-photo-302740.jpeg'
        },
        { 
            imgSrc: 'https://images.pexels.com/photos/274035/pexels-photo-274035.jpeg'
        },
        { 
            imgSrc: 'https://images.pexels.com/photos/119714/pexels-photo-119714.jpeg'
        },
        { 
            imgSrc: 'https://images.pexels.com/photos/158185/fallow-deer-hirsch-animal-nature-158185.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/201269/pexels-photo-201269.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/11746/pexels-photo-11746.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/192579/pexels-photo-192579.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339968/pexels-photo-339968.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339814/pexels-photo-339814.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/199773/pexels-photo-199773.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/247903/pexels-photo-247903.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/81863/night-roof-blue-sky-81863.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/199201/pexels-photo-199201.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/116194/pexels-photo-116194.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/301279/pexels-photo-301279.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339119/pexels-photo-339119.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339118/pexels-photo-339118.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339567/pexels-photo-339567.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/339153/pexels-photo-339153.jpeg'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/300829/pexels-photo-300829.jpeg'
        }
        
    ];
}]);