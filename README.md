# ekonstantinidis.github.io [![Build Status](https://travis-ci.org/ekonstantinidis/ekonstantinidis.github.io.svg?branch=src)](https://travis-ci.org/ekonstantinidis/ekonstantinidis.github.io)
Repository containing the source of my personal website. Domain: [iamemmanouil.com](http://www.iamemmanouil.com/)


## Project Setup
First create a virtual environment and activate it. Then install requirements file along with the npm dependencies.

	virtualenv env
	source env/bin/activate
	pip install -r requirements.txt
	npm install


## Development
In order to develop, you only have to use:

	grunt serve

This will clean the build, generate css from less, generate the static files, copy them and finally launch the browser at [http://0.0.0.0:9000/](http://0.0.0.0:9000/).


## Deployment

Travis CI will handle the upload. For every commit on the branch `src`, Travis CI will publish the site with any changes (if the build passes). This will also remove the previous build from `master` branch. Pull requests will not deploy the website to `master` branch.


## More Information

This is a static website build with [Pelican](http://www.getpelican.com/) in Python. The frontend is built [Bootstrap](http://www.getbootstrap.com/). The website is hosted on [Github Pages](http://pages.github.com/).