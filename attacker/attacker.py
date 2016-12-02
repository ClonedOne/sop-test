from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__, static_folder='static')

app.config['SERVER_NAME'] = 'attacker.com'

@app.route('/attack')
def attack():
	user = request.args.get('cookie')
	with open("test.txt","wb") as fo:
   		fo.write("This is Test Data")


@app.route('/')
def home_page():
    return render_template('index.html')

