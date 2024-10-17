from flask import Blueprint, request, jsonify
from models import db, User, Project, Client, Employee, Material, Equipment

routes_bp = Blueprint('routes', __name__)

# Employee Routes
@routes_bp.route('/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([
        {
            'id': employee.id,
            'first_name': employee.first_name,
            'last_name': employee.last_name,
            'role': employee.role
        } for employee in employees
    ])

@routes_bp.route('/employees', methods=['POST'])
def create_employee():
    data = request.get_json()
    new_employee = Employee(
        first_name=data['first_name'],
        last_name=data['last_name'],
        role=data['role'],
        email=data['email'],
        phone_number=data.get('phone_number'),  # Optional field
        hire_date=data['hire_date'],
        salary=data['salary'],
        project_id=data.get('project_id')  # Optional field
    )
    db.session.add(new_employee)
    db.session.commit()
    return jsonify({'message': 'Employee created successfully!'}), 201

@routes_bp.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = Employee.query.get(employee_id)
    if employee:
        return jsonify({
            'id': employee.id,
            'first_name': employee.first_name,
            'last_name': employee.last_name,
            'role': employee.role,
            'email': employee.email,
            'phone_number': employee.phone_number,
            'hire_date': employee.hire_date.isoformat(),
            'salary': employee.salary,
            'project_id': employee.project_id
        })
    else:
        return jsonify({'error': 'Employee not found'}), 404

# Client Routes
@routes_bp.route('/clients', methods=['GET'])
def get_clients():
    clients = Client.query.all()
    return jsonify([
        {
            'id': client.id,
            'company_name': client.company_name,
            'contact_name': client.contact_name,
            'email': client.email,
            'phone_number': client.phone_number,
            'address': client.address
        } for client in clients
    ])

@routes_bp.route('/clients', methods=['POST'])
def create_client():
    data = request.get_json()
    new_client = Client(
        company_name=data['company_name'],
        contact_name=data['contact_name'],
        email=data['email'],
        phone_number=data['phone_number'],
        address=data.get('address')  # Optional field
    )
    db.session.add(new_client)
    db.session.commit()
    return jsonify({'message': 'Client created successfully!'}), 201

@routes_bp.route('/clients/<int:client_id>', methods=['GET'])
def get_client(client_id):
    client = Client.query.get(client_id)
    if client:
        return jsonify({
            'id': client.id,
            'company_name': client.company_name,
            'contact_name': client.contact_name,
            'email': client.email,
            'phone_number': client.phone_number,
            'address': client.address
        })
    else:
        return jsonify({'error': 'Client not found'}), 404

# Add similar routes for Projects, Materials, and Equipment as needed
