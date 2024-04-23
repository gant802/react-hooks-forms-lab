import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

 
  const [formData, setFormData] = useState({  
    id: uuid(),
    name: "",
    category: ""
  })
console.log(formData)


  function handleChange(event) {
    const key = event.target.name 
    const value = event.target.value
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }

  function handleSubmit(){
      onItemFormSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value={formData.name} onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
