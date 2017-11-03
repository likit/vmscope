from flask import Flask, render_template
import views

app = Flask(__name__)

@app.route('/')
def main_index():
    return render_template('index.html')

from views.parasitology import parasitology_blueprint
app.register_blueprint(parasitology_blueprint, url_prefix="/parasitology")


if __name__ == '__main__':
    app.run(debug=True)
