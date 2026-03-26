"use client";

import React, { useState } from 'react';

const BillingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    transactionId: '',
    proofOfTransaction: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, proofOfTransaction: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('transactionId', formData.transactionId);
    formDataToSend.append('proofOfTransaction', formData.proofOfTransaction);

    try {
      const response = await fetch('/api/billing', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Billing Form</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="proofOfTransaction" className="block text-sm font-medium text-gray-700">Proof of Transaction</label>
          <input
            type="file"
            id="proofOfTransaction"
            name="proofOfTransaction"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <img src="/images/PHOTO-2026-03-26-11-36-51.jpg" alt="QR Code" className="w-full h-auto" />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingForm;