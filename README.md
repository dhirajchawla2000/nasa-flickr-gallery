# NASA Flickr Gallery App
A simple NASA Flickr Gallery App developed using AngularJS. This is a small app that fethces the public images published by NASA on its Flickr account. This app fetches the latest 200 images from NASA Flickr account.

This is a responsive web application and has been tested on the latest version of the 4 major browser:
1. Chrome
2. Firefox
3. Safari
4. IE Edge

For mobile and tablet view the app has been tested using Chrome's developer tools and seems to wokr fine.

To improve load time I have used the ng-infinite-scroll directive. This directive allows to load more content as we scroll down the page. I have used this directive in conjunction with ng-repeat to improve the load time and as well as maintain the sort order of the images by their title (name).

I have implemented sorted in ascending and decending order for this app. I have implemented filter using the title (name) of the image as we get from the json data structure.

## Installation
To install the app perform the following steps:
* Clone this repository in your webserver root folder:
```
git clone https://github.com/dhirajchawla2000/nasa-flickr-gallery.git
```
or download the code of this repository and copy it to your webserver root folder.

* Run bower install command:
```
bower install
```
which will download all the dependencies required by this application.

You can then use this application.
