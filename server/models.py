from app import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"User('{self.name}', '{self.email}')"

class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(100), nullable=False)
    contact_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(255), nullable=True)

    projects = db.relationship('Project', backref='client')

    def __repr__(self):
        return f"Client('{self.company_name}', '{self.contact_name}')"

class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(50), nullable=False)  # e.g., Engineer, Foreman, Laborer
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), nullable=True)
    hire_date = db.Column(db.Date, nullable=False)
    salary = db.Column(db.Float, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))  # Employee assigned to a project

    project = db.relationship('Project', backref='employees')

    def __repr__(self):
        return f"Employee('{self.first_name}', '{self.last_name}', '{self.role}')"

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=True)  # Can be NULL for ongoing projects
    budget = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False)  # e.g., 'In Progress', 'Completed', 'On Hold'

    materials = db.relationship('Material', backref='project')

    def __repr__(self):
        return f"Project('{self.name}', '{self.client_id}')"

class Material(db.Model):
    __tablename__ = 'materials'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  # e.g., Cement, Steel
    unit_price = db.Column(db.Float, nullable=False)  # Price per unit (e.g., per kg or per cubic meter)
    quantity = db.Column(db.Float, nullable=False)  # Quantity in stock or used in a project
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))  # Material assigned to a project

    def __repr__(self):
        return f"Material('{self.name}', '{self.unit_price}', '{self.quantity}')"

class Equipment(db.Model):
    __tablename__ = 'equipment'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  
    purchase_date = db.Column(db.Date, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    maintenance_date = db.Column(db.Date, nullable=True)  
    status = db.Column(db.String(50), nullable=False)  

    def __repr__(self):
        return f"Equipment('{self.name}', '{self.cost}', '{self.status}')"
