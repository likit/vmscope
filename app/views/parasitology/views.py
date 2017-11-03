from flask import render_template
from . import parasitology_blueprint as parasitology


@parasitology.route('/')
def index():
    return render_template('parasitology/index.html')


@parasitology.route('/practice/index')
def practice_index():
    return render_template('parasitology/practice/index.html')


@parasitology.route('/practice/level1')
def practice_level1():
    return render_template('parasitology/practice/level1.html')
