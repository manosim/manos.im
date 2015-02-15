# ekonstantinidis.github.io [![Build Status](https://travis-ci.org/ekonstantinidis/ekonstantinidis.github.io.svg?branch=src)](https://travis-ci.org/ekonstantinidis/ekonstantinidis.github.io)
Repository containing the source for my website. Domain: iamemmanouil.com.


## Project Setup
First create a virtual environment and activate it. Then install requirements file.

	virtualenv env
	source env/bin/activate
	pip install -r requirements.txt


## Development
Using fabric's `serve` to serve port 8000 and `regenerate`.

	fab regenerate
	fab serve


## Deployment

Travis CI will handle the upload. For every commit on the branch `src`, Travis CI will publish the site with any changes (if the build passes).


## More Information

This is a static website build with [Pelican](http://www.getpelican.com/) in Python. The frontend is using [Bootstrap](http://www.getbootstrap.com/). It is hosted on [Github Pages](http://pages.github.com/).