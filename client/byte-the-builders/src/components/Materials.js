
// import React, { useState } from 'react';

// function Materials() {
//   const [materials, setMaterials] = useState([]);
//   const [materialData, setMaterialData] = useState({
//     id: '',
//     unit_price: '',
//     quantity: '',
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setMaterialData({ ...materialData, [name]: value });
//   }

//   function addMaterial() {
//     setMaterials([...materials, materialData]);
//     setMaterialData({ id: '', unit_price: '', quantity: '' });
//   }

//   function deleteMaterial(id) {
//     setMaterials(materials.filter(material => material.id !== id));
//   }

//   function updateMaterial(id) {
//     // Implement update logic here
//   }

//   return (
//     <div>
//       <h2>Materials</h2>
//       <input type="text" name="id" value={materialData.id} onChange={handleChange} placeholder="ID" />
//       <input type="number" name="unit_price" value={materialData.unit_price} onChange={handleChange} placeholder="Unit Price" />
//       <input type="number" name="quantity" value={materialData.quantity} onChange={handleChange} placeholder="Quantity" />
//       <button onClick={addMaterial}>Add Material</button>
      
//       <ul>
//         {materials.map(material => (
//           <li key={material.id}>
//             <strong>ID:</strong> {material.id} <br />
//             <strong>Unit:</strong> {material.unit} <br />
//             <strong>Unit Price:</strong> {material.unit_price} <br />
//             <strong>Quantity:</strong> {employee.quantity} <br />
//             <button onClick={() => deleteMaterial(material.id)}>Delete</button>
//             <button onClick={() => updateMaterial(material.id)}>Update</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Materials;
import React, { useState } from 'react';

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [materialData, setMaterialData] = useState({
    name: '',
    id: '',
    unit: '',
    unit_price: '',
    quantity: '',
  });
  const [isUpdating, setIsUpdating] = useState(false); // Track update mode
  const [currentMaterialId, setCurrentMaterialId] = useState(null); // Track the material being updated

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  }

  // Add a new material
  function addMaterial() {
    setMaterials([...materials, materialData]);
    setMaterialData({ name: '', id: '', unit: '', unit_price: '', quantity: '' });
  }

  // Delete a material
  function deleteMaterial(id) {
    setMaterials(materials.filter(material => material.id !== id));
  }

  // Prepare to update a material
  function updateMaterial(id) {
    const material = materials.find(material => material.id === id);
    setMaterialData(material); // Pre-fill the form with material's data
    setIsUpdating(true); // Enable update mode
    setCurrentMaterialId(id); // Set the material being updated
  }

  // Handle the update process
  function handleUpdate() {
    setMaterials(materials.map(material =>
      material.id === currentMaterialId ? { ...material, ...materialData } : material
    ));
    setIsUpdating(false); // Exit update mode
    setMaterialData({  name: '', id: '', unit: '', unit_price: '', quantity: '' }); // Clear form
  }

  return (
    <div>
      {/* Form for adding or updating materials */}
      <h2>{isUpdating ? "Update Material" : "Add Material"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={materialData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={materialData.id}
        onChange={handleChange}
        disabled={isUpdating} // Disable ID change when updating
      />
      <input
        type="text"
        name="unit"
        placeholder="Unit"
        value={materialData.unit}
        onChange={handleChange}
      />
      <input
        type="text"
        name="unit_price"
        placeholder="Unit Price"
        value={materialData.unit_price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={materialData.quantity}
        onChange={handleChange}
      />


      {/* Conditionally render the 'Add' or 'OK' button */}
      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addMaterial}>Add Material</button> // Add Material button
      )}

      {/* List of materials */}
      <ul>
        {materials.map(material => (
          <li key={material.id}>
            <strong>Name:</strong> {material.name} <br />
            <strong>ID:</strong> {material.id} <br />
            <strong>Unit:</strong> {material.unit} <br />
            <strong>Unit Price:</strong> {material.unit_price} <br />
            <strong>Quantity:</strong> {material.quantity} <br />
            <button onClick={() => deleteMaterial(material.id)}>Delete</button>
            <button onClick={() => updateMaterial(material.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
