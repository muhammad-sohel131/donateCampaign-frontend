import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCampaign = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState({
        image: '',
        title: '',
        type: '',
        description: '',
        minDonation: '',
        deadline: '',
        userEmail: '',
        userName: ''
    });

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`http://localhost:5000/campaigns/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch campaign details');
                }
                const data = await response.json();
                setCampaign(data);
            } catch (error) {
                console.error(error);
                toast.error('Failed to load campaign details');
            }
        };

        fetchCampaign();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampaign({ ...campaign, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/campaigns/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...campaign,
                    deadline: new Date(campaign.deadline),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update the campaign');
            }

            toast.success('Campaign updated successfully!');
            navigate('/my-campaigns');
        } catch (error) {
            console.error(error);
            toast.error('Failed to update campaign');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Campaign</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={campaign.image}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        placeholder="Enter Image URL"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={campaign.title}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Type</label>
                    <select
                        name="type"
                        value={campaign.type}
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
                <div>
                    <label className="block text-gray-700 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={campaign.description}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Minimum Donation</label>
                    <input
                        type="number"
                        name="minDonation"
                        value={campaign.minDonation}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={campaign.deadline.split('T')[0]}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">User Email</label>
                    <input
                        type="email"
                        name="userEmail"
                        value={campaign.userEmail}
                        readOnly
                        className="w-full border rounded px-4 py-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        value={campaign.userName}
                        readOnly
                        className="w-full border rounded px-4 py-2 bg-gray-100"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateCampaign;
