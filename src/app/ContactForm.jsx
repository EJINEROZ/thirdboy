import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Name <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full resize-none focus:ring focus:ring-blue-300" />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full resize-none focus:ring focus:ring-blue-300" />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Message <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-2 border rounded-md w-full resize-none focus:ring focus:ring-blue-300"/>
        </label>
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
      </div>
    </form>
    </div>      
  );
};

export default ContactForm;
