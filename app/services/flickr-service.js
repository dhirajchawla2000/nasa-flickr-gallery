'use strict';

var app = angular.module('nasaFlickrApp');

app.factory('Flickr', function($http) {

  var _apiKey = 'a5e95177da353f58113fd60296e1d250';
  var _userId = '24662369@N07';
  var _baseURL = 'https://api.flickr.com/services/rest/';
  var _method = 'flickr.people.getPublicPhotos';
  var _extraArgs = '&format=json&nojsoncallback=1';
  var _recordsPerPage = 20;
  var _totalPages = 10;
  var _currentPage = 1;

  var Flickr = function() {
    this.items = [];
    this.busy = false;
    this.complete = false;
  };

  Flickr.prototype.loadNext = function() {
    var that = this;

    if (this.busy){
      return;
    }

    if (_currentPage > _totalPages){
      this.complete = true;
      return;
    }

    this.busy = true;

    var url = _baseURL + '?method=' + _method
        + '&api_key=' + _apiKey
        + '&user_id=' + _userId
        + '&per_page=' + _recordsPerPage
        + '&page=' + _currentPage
        + _extraArgs;

    $http.get(url)
      .success(function(data) {
        var items = data.photos.photo;
        for (var i = 0; i < items.length; i++) {
          that.items.push(items[i]);
        }
        that.busy = false;
        _currentPage++;
      });
  };

  return Flickr;
});