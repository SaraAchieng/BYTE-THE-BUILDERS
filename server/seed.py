import os
from app import create_app, db
from models import User, Client, Employee, Project, Material, Equipment
from faker import Faker

app = create_app()
fake = Faker()

def create_admin_user():
    """Create an admin user if it does not already exist."""
    with app.app_context():
        existing_admin = User.query.filter_by(email='admin@example.com').first()
        
        if not existing_admin:
            admin_user = User(name='Admin', email='admin@example.com', password='password')
            db.session.add(admin_user)
            db.session.commit()
            print("Admin user created.")
        else:
            print("Admin user already exists.")

def create_clients(num_clients=5):
    """Generate fake client data."""
    clients = []
    for _ in range(num_clients):
        client = Client(
            company_name=fake.company(),
            contact_name=fake.name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            address=fake.address()
        )
        clients.append(client)
    return clients

def create_projects(num_projects=5, client_ids=None):
    """Generate fake project data."""
    projects = []
    for _ in range(num_projects):
        project = Project(
            name=fake.catch_phrase(),
            client_id=fake.random_element(elements=client_ids),
            start_date=fake.date_this_year(),
            end_date=fake.date_this_year() if fake.boolean() else None,
            budget=fake.random_number(digits=6),
            status=fake.random_element(elements=['In Progress', 'Completed', 'On Hold'])
        )
        projects.append(project)
    return projects

def create_employees(num_employees=10, project_ids=None):
    """Generate fake employee data."""
    employees = []
    for _ in range(num_employees):
        employee = Employee(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            role=fake.job(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            hire_date=fake.date_this_decade(),
            salary=fake.random_number(digits=5),
            project_id=fake.random_element(elements=project_ids)
        )
        employees.append(employee)
    return employees

def create_materials(num_materials=10, project_ids=None):
    """Generate fake material data."""
    materials = []
    for _ in range(num_materials):
        material = Material(
            name=fake.word(),
            unit_price=fake.random_number(digits=3),
            quantity=fake.random_number(digits=2),
            project_id=fake.random_element(elements=project_ids)
        )
        materials.append(material)
    return materials

def create_equipment(num_equipment=5):
    """Generate fake equipment data."""
    equipment = []
    for _ in range(num_equipment):
        equip = Equipment(
            name=fake.word(),
            purchase_date=fake.date_this_decade(),
            cost=fake.random_number(digits=5),
            maintenance_date=fake.date_this_decade() if fake.boolean() else None,
            status=fake.random_element(elements=['In Use', 'Under Maintenance'])
        )
        equipment.append(equip)
    return equipment

def seed_database():
    """Seed the database with initial data."""
    with app.app_context():
        db.drop_all()  # WARNING: Drops all tables
        db.create_all()  # Create all tables

        # Create admin user
        create_admin_user()

        # Create clients and save to the database
        clients = create_clients(5)
        db.session.bulk_save_objects(clients)
        db.session.commit()

        # Fetch client IDs after commit
        client_ids = [client.id for client in Client.query.all()]

        # Create projects for the clients
        projects = create_projects(5, client_ids)
        db.session.bulk_save_objects(projects)
        db.session.commit()

        # Fetch project IDs after commit
        project_ids = [project.id for project in Project.query.all()]

        # Create employees
        employees = create_employees(10, project_ids)
        db.session.bulk_save_objects(employees)
        db.session.commit()

        # Create materials for the projects
        materials = create_materials(10, project_ids)
        db.session.bulk_save_objects(materials)
        db.session.commit()

        # Create equipment
        equipment = create_equipment(5)
        db.session.bulk_save_objects(equipment)
        db.session.commit()

        print('Database seeded successfully!')

if __name__ == '__main__':
    with app.app_context():
        seed_database()
