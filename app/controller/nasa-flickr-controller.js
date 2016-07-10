'use strict';

var app = angular.module('nasaFlickrApp');

app
  .controller('nasaFlickrController', ['$scope', 'Flickr', function($scope, Flickr) {
    $scope.flickrPhotos = new Flickr();
    $scope.photoOrder = 'title';
  }])
  .directive('flickrPhoto', function () {
    return {
      templateUrl: 'templates/flickr-photo.html',
      restrict: 'E'
    };
  });
