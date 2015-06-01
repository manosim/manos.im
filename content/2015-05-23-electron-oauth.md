Title: Electron. oAuth authentication with GitHub
Date: 2015-06-01 14:24
Modified: 2015-06-02 14:24
Category: Tutorials
Tags: electron, atom-shell, atom, github, oAuth, authentication, gitify
Slug: electron-oauth-with-github
Authors: Emmanouil Konstantinidis
Cover: electron-oauth-github.png
Summary: It has been a while since I read about [Electron](http://electron.atom.io/) and I couldn't wait to get my hands on it. Electron is an open source project made by [GitHub](http://www.github.com/) that allows you to build cross platform desktop apps with Web Technologies - in my case with [React](https://facebook.github.io/react/). Imagine hybrid mobile apps ([React Native](https://facebook.github.io/react-native/), [Ionic](http://www.ionicframework/)) but for desktops. Sounds pretty awesome and it is!


### Getting started with Electron
This is not an Electron tutorial (as per title, oAuth authentications in Electron) so I will just give you a couple of links to get you started. Unfortunately Electron is pretty new and you will not find too many tutorials on the internet but the good news is that you can stick to the documentation which is really helpful.

  - [Documentation](https://github.com/atom/electron/tree/master/docs#readme)
  - [Quick Start](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md)
  - [API - Browser Window](https://github.com/atom/electron/blob/master/docs/api/browser-window.md)
  - [Gitify - GitHub Notifications on your menu bar](https://github.com/ekonstantinidis/gitify)
  - [Electron & React - Starter Template](https://github.com/DenisVuyka/electron-react)


### Diving into oAuth
There were several cases where I had to implement oAuth Authentication (one of those is [Trevor Mobile App](http://www.trevorapp.com/)) and I can say that it was never that simple since it always depends on the platform - hybrid apps, web apps and now Electron!

So once you have you project setup, you will need a button "Login with GitHub". That button will open an Electron `BrowserWindow` (see [API - Browser Window](https://github.com/atom/electron/blob/master/docs/api/browser-window.md)) and that is where the user will "Authorize your app" (create a [Github Application](https://github.com/settings/developers)). Below you can find how I implemented the oAuth authentication. I've added several comments to it so that it will make more sense if you are new to oAuth authentication.

    // Your GitHub Applications Credentials
    var options = {
        client_id: 'your_client_id',
        client_secret: 'your_client_secret',
        scopes: ["user:email", "notifications"] // Scopes limit access for OAuth tokens.
    };

    // Build the OAuth consent page URL
    var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
    var githubUrl = 'https://github.com/login/oauth/authorize?';
    var authUrl = githubUrl + 'client_id=' + options.client_id + '&scope=' + options.scopes;
    authWindow.loadUrl(authUrl);
    authWindow.show();

    // Handle the response from GitHub
    authWindow.webContents.on('did-get-redirect-request', function(event, oldUrl, newUrl) {

      var raw_code = /code=([^&]*)/.exec(newUrl) || null,
        code = (raw_code && raw_code.length > 1) ? raw_code[1] : null,
        error = /\?error=(.+)$/.exec(newUrl);

      if (code || error) {
        // Close the browser if code found or error
        authWindow.close();
      }

      // If there is a code in the callback, proceed to get token from github
      if (code) {
        requestGithubToken(options, code);
      } else if (error) {
        alert("Oops! Something went wrong and we couldn't log you in using Github. Please try again.");
      }

    });

    // Reset the authWindow on close
    authWindow.on('close', function() {
        authWindow = null;
    }, false);


### What's next? Request the token from GitHub
So by that time you will have the code from the callback or an error. If everything is implemented correctly, there will be no errors and all you have to do is request the token from github by posting the code you received from the callback - `requestGithubToken(options, code)`. I am using [Superagent](https://www.npmjs.com/package/superagent) from [NPM](https://www.npmjs.com/) but feel free to make the request the way you want to. Below is an abstraction of where to make the `POST` request, how and what to post.

    requestGithubToken: function (options, code) {

      apiRequests
        .post('https://github.com/login/oauth/access_token', {
          client_id: options.client_id,
          client_secret: options.client_secret,
          code: code,
        })
        .end(function (err, response) {
          if (response && response.ok) {
            // Success - Received Token.
            // Store it in localStorage maybe?
            window.localStorage.setItem('githubtoken', response.body.access_token);
          } else {
            // Error - Show messages.
            console.log(err);
          }
        });

    }


### That's all folks!
In case you were actually trying to implement oAuth authentication with GitHub I hope it worked! You can find a full implementation of oAuth GitHub authentication in [Gitify](https://github.com/ekonstantinidis/gitify), an app I made with Electron and shows GitHub notifications on your menu bar. Also if you were looking to implement oAuth authentication in Electron with other websites like Facebook or Twitter, it should be pretty similar so give it a try!
