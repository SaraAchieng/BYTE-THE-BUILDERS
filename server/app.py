import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize the SQLAlchemy object
db = SQLAlchemy()

def create_app():
    # Create a Flask application instance
    app = Flask(__name__)

    # Configuration for the database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Use SQLite for simplicity
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY') or 'supersecretkey'

    # Initialize the database with the app
    db.init_app(app)

    # Create all tables within the app context
    with app.app_context():
        db.create_all()  # Create all tables

    return app
