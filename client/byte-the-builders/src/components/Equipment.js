
import React, { useState } from 'react';

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [equipmentData, setEquipmentData] = useState({
    id: '',
    name: '',
    purchase_date: '',
    cost: '',
    maintenance_date: '',
    status: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEquipmentData({ ...equipmentData, [name]: value });
  }

  function addEquipment() {
    setEquipment([...equipment, equipmentData]);
    setEquipmentData({ id: '', name: '', purchase_date: '', cost: '', maintenance_date: '', status: '' });
  }

  function deleteEquipment(id) {
    setEquipment(equipment.filter(item => item.id !== id));
  }

  function updateEquipment(id) {
    // Implement update logic here
  }

  return (
    <div>
      <h2>Equipment</h2>
      <input type="text" name="id" value={equipmentData.id} onChange={handleChange} placeholder="ID" />
      <input type="text" name="name" value={equipmentData.name} onChange={handleChange} placeholder="Name" />
      <input type="date" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} placeholder="Purchase Date" />
      <input type="number" name="cost" value={equipmentData.cost} onChange={handleChange} placeholder="Cost" />
      <input type="date" name="maintenance_date" value={equipmentData.maintenance_date} onChange={handleChange} placeholder="Maintenance Date" />
      <input type="text" name="status" value={equipmentData.status} onChange={handleChange} placeholder="Status" />
      <button onClick={addEquipment}>Add Equipment</button>
      
      <ul>
        {equipment.map(item => (
          <li key={item.id}>
            {item.name} - ${item.cost} ({item.status})
            <button onClick={() => deleteEquipment(item.id)}>Delete</button>
            <button onClick={() => updateEquipment(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
