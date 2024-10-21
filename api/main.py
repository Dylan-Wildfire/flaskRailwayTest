from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# API route to double the number
@app.route('/double', methods=['POST'])
def double_number():
    data = request.get_json()
    number = data.get('number', 0)
    doubled = number * 2
    return jsonify({'result': doubled})

if __name__ == '__main__':
    app.run(debug=True)
