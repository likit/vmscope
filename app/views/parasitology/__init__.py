from flask import Blueprint

parasitology_blueprint = Blueprint('parasitology', __name__) 

from . import views
