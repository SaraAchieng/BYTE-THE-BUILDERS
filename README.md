# BYTE-THE-BUILDERS

# Description
BYTE-THE-BUILDERS is an online construction management system that connects employees (contractors) with clients. The project encompasses models for projects, materials, clients, equipment, and employees, streamlining communication and resource management in the construction industry.

# Features
1. landing page:
   Registration page:
   Here you are prompted to register if not a user or login if you are an existing user

2. Home page
   here you are able to see a slide view of all undergoing projects
   You are also able to see associated clients and employees

3. search bar
   On the search bar yo are able to query any project,eployee,client,material and equipment available in the site.

4. Client page
   On here you are able to see all existing clients and their associated projects you are also able to add and patch clients recommended you have authority.

5. Employees page
   On this page you are able to add,delete,get and patch employees as required.
   The employee page contains a form that acts as a way to guide in perforing the tasks.
   Below the branch show a list of all existing employees on the database.

6. Materials page
   This page contins a form that allows for the query and patching of materials.
   Below the form it shows a full list of all the materials with their features as entities for instance their name and quantity

7. Equipment page
   The equipment page also contains a form necessary for adding or patching an equipment.After any functionality is carried out the material is added to the database and displayed below the form alongside theother equipment.


# Installation Instructions

1. clone the repository:
https://github.com/SaraAchieng/BYTE-THE-BUILDERS

2. Navigate to the project directory:
   1.initialize the Backend first.
   2.initialize the front-end second.

# Backend Setup

server/
├── .venv/
├── alembic/
├── instance/
├── migrations/
├── app.py
├── config.py
├── db.py
├── models.py
├── routes.py
├── run.py
└── seed.py

1. Make sure you have Python and pip installed.
2. Install the necessary packages:
   pip install -r requirements.txt
   pipenv install
   pipenv shell
3. Run the seed file to populate the database:
   python seed.py

4. Start the Flask server:
   flask run

# Frontend Setup

byte-the-builders/
├── node_modules/
├── public/
└── src/
    ├── components/
    │   ├── app.css
    │   ├── app.js
    │   ├── app.test.js
    │   ├── index.css
    │   ├── index.js
    │   └── setupTests.js


1. Navigate to the client directory:
   cd client
   cd byte-the-builders

2. Install the dependencies:
   npm install

3. Start the React application:
   npm start

# USAGE
The application is user-friendly. First, register to create an account. Once registered, you can access the home page to view ongoing projects. You can also navigate to the employees or clients sections to see which clients are using specific equipment and materials.



# Technologies
1. Frontend: React, CSS
2. Backend: Flask, SQLAlchemy,CORS

# CONTRIBUTION
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

# LICENSE
This project is licensed under the MIT License. See the LICENSE file for details.

# CONTACT INFORMATION
For questions or support, please reach out via [pkemoimethodius@gmail.com].