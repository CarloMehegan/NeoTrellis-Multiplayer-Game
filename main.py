from flask import Flask, jsonify, render_template, request

server = Flask(__name__)

data = {
  "message": "hello, world!",
  "one": "two!"
}

# create 2d table of true/false to represent lights
lights = []
for x in range(8): 
    col = [] 
    for y in range(4): 
        col.append(False) 
    lights.append(col) 

@server.route('/')
def index():
  return render_template('index.html')

@server.route('/getdata') # URL
def get_data():
	return jsonify(data)

@server.route('/getlights') # URL
def get_lights():
	return jsonify(lights)

@server.route('/2/') # URL
def two():
	return "Route 2!"

@server.route('/press')
def search():
    page = request.args.get('user_name')
    # page = int(page)
    return render_template('about.html', name = page)
    # if page == 1:
    #     return render_template('about.html')
    # if page == 2:
    #     return render_template('donate.html')

server.run(host='0.0.0.0', port=8080)