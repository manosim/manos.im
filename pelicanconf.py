#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Emmanouil Konstantinidis'
SITENAME = u'I am Emmanouil'
SITEURL = 'http://www.iamemmanouil.com'

PATH = 'content'

TIMEZONE = 'Europe/London'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Menu
MENUITEMS = (
    ('About', 'about'),
    ('Home', 'start'),
    ('Get in touch', 'get-in-touch'),
)

# Theme
OUTPUT_PATH = "output"
THEME = "theme"
THEME_STATIC_DIR = "static"

# Blogroll
LINKS = (
    ('Pelican', 'http://getpelican.com/'),
    ('Python.org', 'http://python.org/'),
    ('Jinja2', 'http://jinja.pocoo.org/'),
    ('You can modify those links in your config file', '#'),
)

# Social widget
SOCIAL = (
    ('fa-twitter', 'http://twitter.com/ekondis'),
    ('fa-github', 'http://github.com/ekonstantinidis'),
    ('fa-linkedin', 'http://uk.linkedin.com/in/ekonstantinidis'),
    ('fa-rss', '#'),
)

DEFAULT_PAGINATION = 5

# Google Analytics
GOOGLE_ANALYTICS= "UA-6891078-38"

# Disqus Comments
DISQUS_SITENAME = "iamemmanouil"

# Twitter Settings
TWITTER_USERNAME = "ekondis"

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
