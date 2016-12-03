# sop-test

This repository contains some basic code written in order to provide a working example of the Same Origin Policy. The code was developed using [Flask](http://flask.pocoo.org/) as web server.

To run a server with Flask it is sufficient to install it with `pip`, set the desired [name].py file as flask application and execute it. The following commands in the chosen server subdirectory will work on Linux (tested on Arch and Ubuntu):

    mkvirtualenv soptest # optional: assuming virtualenv is available
    pip install flask
    export FLASK_APP=[name].py
    export FLASK_DEBUG=1 # optional: allows modifications without server restart
    flask run --host=0.0.0.0 # the default port in flask is 5000
  
The repository contains two web sites, one legitimate (`honest`) and one malicious (`attacker`). The honest server has a domain `local.com` and two subdomains: `store.local.com` and `blog.local.com`.
All the examples have been tested with the Google Chrome web browser.


####Same Origin Example

The first example included in the repository shows the correct behavior of the Same Origin Policy applied to a very simple test website. This example will use the `honest` server with the `local.com` and `blog.local.com` domains. 

Accessing blog.local.com will cause it to open a new tab in the browser loading `local.com:5000/index.html` and try to access the DOM of the new page. Now the Same Origin Policy blocks this kind of behavior. In order for it to work, in fact, both pages have to explicitly set their `document.domain` attribute to the value of the super-domain (`local.com`). It is easy to see the correct behavior of the policy: if one of the two (or both) assignation is commented out the attempt will fail, otherwise an alert will notify the successful access to the `local.com/index.html` div.


####Session Hijacking Example


