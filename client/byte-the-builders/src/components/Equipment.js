import React, { useState } from 'react';

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [equipmentData, setEquipmentData] = useState({
    id: '',
    name: '',
    purchase_date: '',
    cost: '',
    maintenance_date: '',
    quantity: '',
    status: '',
  });
  const [isUpdating, setIsUpdating] = useState(false); // Track update mode
  const [currentEquipmentId, setCurrentEquipmentId] = useState(null); // Track the equipment being updated

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setEquipmentData({ ...equipmentData, [name]: value });
  }

  // Add new equipment
  function addEquipment() {
    setEquipment([...equipment, equipmentData]);
    setEquipmentData({ id: '', name: '', purchase_date: '', cost: '', maintenance_date: '', quantity: '', status: '' });
  }

  // Delete equipment
  function deleteEquipment(id) {
    setEquipment(equipment.filter(item => item.id !== id));
  }

  // Prepare to update equipment
  function updateEquipment(id) {
    const item = equipment.find(item => item.id === id);
    setEquipmentData(item); // Pre-fill the form with the equipment's data
    setIsUpdating(true); // Enable update mode
    setCurrentEquipmentId(id); // Set the equipment being updated
  }

  // Handle update process
  function handleUpdate() {
    setEquipment(equipment.map(item =>
      item.id === currentEquipmentId ? { ...item, ...equipmentData } : item
    ));
    setIsUpdating(false); // Exit update mode
    setEquipmentData({ id: '', name: '', purchase_date: '', cost: '', maintenance_date: '', quantity: '', status: '' }); // Clear form
  }

  return (
    <div>
      {/* Form for adding or updating equipment */}
      <h2>{isUpdating ? "Update Equipment" : "Add Equipment"}</h2>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={equipmentData.id}
        onChange={handleChange}
        disabled={isUpdating} // Disable ID field when updating
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={equipmentData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="purchase_date"
        placeholder="Purchase Date"
        value={equipmentData.purchase_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cost"
        placeholder="Cost"
        value={equipmentData.cost}
        onChange={handleChange}
      />
      <input
        type="date"
        name="maintenance_date"
        placeholder="Maintenance Date"
        value={equipmentData.maintenance_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={equipmentData.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={equipmentData.status}
        onChange={handleChange}
      />

      {/* Conditionally render the 'Add' or 'OK' button */}
      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addEquipment}>Add Equipment</button> // Add Equipment button
      )}

      {/* List of equipment */}
      <ul>
        {equipment.map(item => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>Name:</strong> {item.name} <br />
            <strong>Purchase Date:</strong> {item.purchase_date} <br />
            <strong>Cost:</strong> {item.cost} <br />
            <strong>Maintenance Date:</strong> {item.maintenance_date} <br />
            <strong>Quantity:</strong> {item.quantity} <br />
            <strong>Status:</strong> {item.status} <br />
            <button onClick={() => deleteEquipment(item.id)}>Delete</button>
            <button onClick={() => updateEquipment(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
