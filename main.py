from flask import Flask, jsonify, render_template

server = Flask(__name__)

data = {
  "message": "hello, world!"
}

@server.route('/') # URL
def index():
	return render_template('index.html')

@server.route('/2/') # URL
def two():
	return "Route 2!"

server.run(host='0.0.0.0', port=8080)