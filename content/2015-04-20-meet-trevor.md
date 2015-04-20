Title: Meet Trevor. A hybrid mobile app for Travis CI
Date: 2015-04-20 18:58
Modified: 2015-04-20 19:00
Category: Projects
Tags: trevor, mobile, hybrid, application, appstore, google play store, travis, travis ci, continuous, integration
Slug: meet-trevor-mobile-hybrid-app
Authors: Emmanouil Konstantinidis
Cover: meet-trevor.png
Summary: [Trevor](http://www.trevorapp.com/) is a mobile app that brings Travis CI to your phone and tablet. You can download it for **free** from the [App Store](http://itunes.apple.com/app/id962155187) and [Google Play](http://play.google.com/store/apps/details?id=com.iamemmanouil.trevor). It is a hybrid app based on [Ionic Framework](http://www.ionicframework.com/) that utilizes the amazing [Travis CI API](http://docs.travis-ci.com/api/).

### Ionic is awesome and gets event better
Written in [AngularJS](http://www.angularjs.com/), Ionic Framework wraps [Apache Cordova](http://www.cordova.io/), allowing you to use all the goodies and plugins that Cordova offers. In simple words, you write Javascript, HTML and CSS and Ionic converts your code to a native looking app with great performance.

Following Ionic since its first releases, while I've also used it for a couple of projects(work and personal projects), my opinion is that it keeps getting better and better with the Ionic Community getting bigger day by day.

### The Travis API: great docs, awesome results
Most of the projects that I'm working on at [DabApps](http://www.dabapps.com) involve a mobile app and a web server([Django](http://www.djangoproject.com/) & [Django Rest Framework](http://www.djangorestframework.com/)) and from my experience with APIs I can only say that the Travis API is just perfect.  I'm using Travis CI for about a year and when I first read the [API documentation](http://docs.travis-ci.com/api/), it was pretty clear on how to retrieve everything from accounts to repos, builds, logs etc.

    # Get my repositories and latest builds
    curl -X GET https://api.travis-ci.org/repos/ekonstantinidis

    # Get the builds for a particular repository
    curl -X GET https://api.travis-ci.org/builds?repository_id=2855496/builds/

Since Trevor started as an experiment (Friday night,  let's give it a try), I believe the app would not be in the stores if the API wasn't that clear. It all started with the login (which was the *toughest* part since it involved authentication with Github) but once I got the Travis token, I was then able to get my accounts, repositories, builds and pretty much everything Travis' web interface provides.

### The future of Trevor
A new version has been already submitted and includes many many changes. New improved design (inspired by the new awesome Travis UI), ready for Travis CI for Education, many fixed bugs and of course it's more stable and faster. I plan to add more features such as access to both Travis CI for Open Source and Travis Pro at the same time, push notifications and more! Download it for [free](http://www.trevorapp.com/) and watch for the upcoming updates!

This is a guest blog post that I wrote for the [Travis CI blog](http://blog.travis-ci.com/2015-04-06-meet-trevor-hybrid-app/).