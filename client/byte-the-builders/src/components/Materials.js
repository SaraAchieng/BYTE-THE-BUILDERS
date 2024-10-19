// import React, { useState, useEffect } from 'react';

// function Materials() {
//   const [materials, setMaterials] = useState([]);
//   const [newMaterial, setNewMaterial] = useState('');
//   const [editMaterial, setEditMaterial] = useState(null);

//   useEffect(() => {
//     fetch('/api/materials')
//       .then((res) => res.json())
//       .then((data) => setMaterials(data));
//   }, []);

//   function addMaterial() {
//     const material = { name: newMaterial };
//     fetch('/api/materials', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(material),
//     })
//       .then((res) => res.json())
//       .then((newMat) => {
//         setMaterials([...materials, newMat]);
//         setNewMaterial('');
//       });
//   }

//   function deleteMaterial(id) {
//     fetch(`/api/materials/${id}`, { method: 'DELETE' })
//       .then(() => setMaterials(materials.filter((m) => m.id !== id)));
//   }

//   function updateMaterial(id) {
//     const updatedMaterial = { name: editMaterial };
//     fetch(`/api/materials/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedMaterial),
//     })
//       .then((res) => res.json())
//       .then((updated) => {
//         setMaterials(materials.map((m) => (m.id === id ? updated : m)));
//         setEditMaterial(null);
//       });
//   }

//   return (
//     <div>
//       <h2>Materials</h2>
//       <ul>
//         {materials.map((material) => (
//           <li key={material.id}>
//             {editMaterial === material.id ? (
//               <input
//                 type="text"
//                 value={editMaterial.name}
//                 onChange={(e) => setEditMaterial(e.target.value)}
//               />
//             ) : (
//               <span>{material.name}</span>
//             )}
//             <button className="edit" onClick={() => updateMaterial(material.id)}>Edit</button>
//             <button className="delete" onClick={() => deleteMaterial(material.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newMaterial}
//         onChange={(e) => setNewMaterial(e.target.value)}
//       />
//       <button onClick={addMaterial}>Add Material</button>
//     </div>
//   );
// }

// export default Materials;


// src/Materials.js
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
