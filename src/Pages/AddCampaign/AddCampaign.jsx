import { useState } from 'react';
import Swal from 'sweetalert2';

const AddCampaign = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: '',
    description: '',
    minDonation: '',
    deadline: '',
    userEmail: 'user@example.com', 
    userName: 'John Doe',          
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/campaigns", {
        method: 'POST',
        headers: {
          'content-type':'Application/json'
        },
        body: JSON.stringify(formData)
      });
      Swal.fire('Success', 'Campaign added successfully!', 'success');
      setFormData({
        image: '',
        title: '',
        type: '',
        description: '',
        minDonation: '',
        deadline: '',
        userEmail: 'user@example.com',
        userName: 'John Doe',
      });
    } catch (error) {
      Swal.fire('Error', 'Failed to add campaign!', 'error');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select Type</option>
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full border border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Campaign
        </button>
      </form>
    </div>
  );
};

export default AddCampaign;
