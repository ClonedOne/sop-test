# sop-test

This repository contains some basic examples written in order to provide a working example of the Same Origin Policy. The code was developed using [Flask](http://flask.pocoo.org/) as web server. This code is merely demonstrative of the security features of web browsers and is not intended to be used in any way outside of the user own local network.

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

The second example is aimed at showing the possible security issues resulting from attempts to bypass the Same Origin Policy. This example requires both web servers to be up and running. In this case the honest website `store.local.com:5000` uses JSONP to access a desired service at `attacker.com:5000/luringservice`.

The problem with JSONP is that the client page relies completely on the good intentions of the server. In this particular scenario the server is either malicious or compromised and the returned JavaScript instead of being a wrapped JSON structure, is a cookie stealing script.

The session hijacking script will open a new window with the store page as origin to induce the browser to send cookies and then grabs them form the `window.document` reference it posses. To finally exfiltrate the cookies bypassing SOP restrictions it will create an iframe having as source a fixed route on the malicious server and passing as parameter of the GET method the stolen cookie. The exfiltrated cookie is then logged on a file by the attacker server.
