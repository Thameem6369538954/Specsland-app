import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    mainImage: "",
    subImage: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Product Name is required.";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.mainImage)
      newErrors.mainImage = "Main Image URL is required.";
    if (!formData.subImage) newErrors.subImage = "Sub Image URL is required.";
    if (!formData.category) newErrors.category = "Category is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://specsland-backend.onrender.com/api/v1/products",
          formData
        );
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Request failed:", error);
      }
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://specsland-backend.onrender.com/api/v1/products"
      );
      setData(res.data); // Make sure to use res.data if your data is in the `data` property of the response
      console.log(res.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
   

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Product Name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Price"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="mainImage"
        >
          Main Image
        </label>
        <input
          type="text"
          id="mainImage"
          value={formData.mainImage}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Main Image URL"
        />
        {errors.mainImage && (
          <p className="text-red-500 text-sm">{errors.mainImage}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="subImage"
        >
          Sub Image
        </label>
        <input
          type="text"
          id="subImage"
          value={formData.subImage}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Sub Image URL"
        />
        {errors.subImage && (
          <p className="text-red-500 text-sm">{errors.subImage}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Category"
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-9 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
