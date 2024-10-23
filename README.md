# BYTE-THE-BUILDERS

# Description
BYTE-THE-BUILDERS is an online construction management system that connects employees (contractors) with clients. The project encompasses models for projects, materials, clients, equipment and employees, streamlining communication and resource management in the construction industry.

# Features
1. Landing page:
   Registration page:
   Here you are prompted to register if not a user or login if you are an existing user

2. Home page
   Here you are able to see a slide view of all undergoing projects
   You are also able to see associated clients and employees

3. Search bar
   On the search bar you are able to query any project,employee,client,material and equipment available in the site.

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

# Technologies
1. Frontend: React, CSS
2. Backend: Flask, SQLAlchemy,CORS

# Installation Instructions

1. clone the repository:
https://github.com/SaraAchieng/BYTE-THE-BUILDERS

2. Open in Visual Studio Code or your preferred IDE:
   bash
   $ code .

3. Navigate to the project directory:
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

1. Make sure you have Python installed
2. Navigate to the server directory:
   cd server
3. Install the necessary packages:
   pip install -r requirements.txt
   pipenv install
   pipenv shell
4. Run the seed file to populate the database:
   python seed.py

5. Start the Flask server:
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


## API Endpoints
- GET /episodes: Retrieve all episodes.
[
  {
    "id": 1,
    "date": "1/11/99",
    "number": 1
  },
  {
    "id": 2,
    "date": "1/12/99",
    "number": 2
  }
]
- GET /episodes/<id>: Retrieve an episode by ID.
{
  {
    "id": 1,
    "date": "1/11/99",
    "number": 1,
    "appearances": [
        {
            "episode_id": 1,
            "guest": {
                "id": 1,
                "name": "Michael J. Fox",
                "occupation": "actor"
            },
            "guest_id": 1,
            "id": 1,
            "rating": 4
        }
    ]
  }
}

- GET /guests: Retrieve all guests.
[
  {
    "id": 1,
    "name": "Michael J. Fox",
    "occupation": "actor"
  },
  {
    "id": 2,
    "name": "Sandra Bernhard",
    "occupation": "Comedian"
  },
  {
    "id": 3,
    "name": "Tracey Ullman",
    "occupation": "television actress"
  }
]

- POST /appearances: Create a new appearance association.
{
  "rating": 5,
  "episode_id": 100,
  "guest_id": 123
}

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

If you wish to contribute, follow the steps below:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## Support & Contact
- Email: achieng997@gmail.com

## License
Licensed under the MIT License. Copyright (c) 2024 *Sara Achieng*

