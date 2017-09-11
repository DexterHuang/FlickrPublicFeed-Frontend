# Flickr Public Feed

Live and hosted version of this app is [HERE](https://flickr-search-a8da6.firebaseapp.com/)

This project displays Flickr's public feed at home page, and a search function allows user to search images by tags

An Simple Express.js is included in this project, because I have decided to let the client side to use JSONP to retrive data from Flickr, the Express banckend only need to host the static single page app, which is the main part of this project. 

## To run the app

Run `npm run serve` to build and host on an express.js server.

## Simple Demo

### Public Feed

On landing page, flickr public feed is shown
![home page img](https://github.com/DexterHuang/FlickrPublicFeed-Frontend/blob/master/Demo%20Images/HomePage.jpg?raw=true)

### Search by Tag

In the search bar, type in strings wish to search, and click the "Go!" button (or press enter)
![search img](https://github.com/DexterHuang/FlickrPublicFeed-Frontend/blob/master/Demo%20Images/Search.jpg?raw=true)

