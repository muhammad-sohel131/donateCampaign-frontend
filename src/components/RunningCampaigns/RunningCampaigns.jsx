import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRunningCampaigns = async () => {
            try {
                const response = await fetch('http://localhost:5000/running');
                if (!response.ok) {
                    throw new Error('Failed to fetch running campaigns');
                }
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRunningCampaigns();
    }, []);

    return (
        <div className="py-10 mx-container">
            <h2 className="text-2xl font-bold mb-6 text-center">Running Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <div key={campaign._id} className="border rounded-lg shadow-lg p-4">
                        <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-xl font-semibold">{campaign.title}</h3>
                        <p className="text-gray-600">{campaign.description.slice(0, 100)}...</p>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={() => navigate(`/campaign/${campaign._id}`)}
                        >
                            See More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RunningCampaigns;
