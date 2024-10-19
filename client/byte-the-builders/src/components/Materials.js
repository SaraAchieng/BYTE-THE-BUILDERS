
import React, { useState } from 'react';

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [materialData, setMaterialData] = useState({
    id: '',
    unit_price: '',
    quantity: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  }

  function addMaterial() {
    setMaterials([...materials, materialData]);
    setMaterialData({ id: '', unit_price: '', quantity: '' });
  }

  function deleteMaterial(id) {
    setMaterials(materials.filter(material => material.id !== id));
  }

  function updateMaterial(id) {
    // Implement update logic here
  }

  return (
    <div>
      <h2>Materials</h2>
      <input type="text" name="id" value={materialData.id} onChange={handleChange} placeholder="ID" />
      <input type="number" name="unit_price" value={materialData.unit_price} onChange={handleChange} placeholder="Unit Price" />
      <input type="number" name="quantity" value={materialData.quantity} onChange={handleChange} placeholder="Quantity" />
      <button onClick={addMaterial}>Add Material</button>
      
      <ul>
        {materials.map(material => (
          <li key={material.id}>
            {material.id} - ${material.unit_price} (Qty: {material.quantity})
            <button onClick={() => deleteMaterial(material.id)}>Delete</button>
            <button onClick={() => updateMaterial(material.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
