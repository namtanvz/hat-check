import flask
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    if request.method == 'POST':
        try:
            n = int(request.form['number'])
            result = derangements(n)
        except ValueError:
            result = "Please enter a valid integer."
    return render_template('index.html', result=result)

def derangements(n):
    if n <= 1:
        return 0
    T = [0] * (n + 1)
    T[1], T[2] = 0, 1
    for i in range(3, n + 1):
        T[i] = (i - 1) * (T[i - 1] + T[i - 2])
    return T[n]

if __name__ == '__main__':
    app.run(debug=True)
