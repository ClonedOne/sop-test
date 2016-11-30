from flask import Flask
from flask import render_template

app = Flask(__name__, static_folder='static')
app.add_url_rule('/static/<path:filename>',
                 endpoint='static',
                 subdomain='blog',
                 view_func=app.send_static_file)  
app.add_url_rule('/static/<path:filename>',
                 endpoint='static',
                 subdomain='store',
                 view_func=app.send_static_file)  

app.config['SERVER_NAME'] = 'local.com:5000'

@app.route("/", subdomain="blog")
def blog_home():
    return render_template('blog.html')

@app.route("/", subdomain="store")
def store_home():
    return render_template('store.html')

@app.route('/')
def home_page():
    return render_template('index.html')