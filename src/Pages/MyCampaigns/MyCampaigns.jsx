import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyCampaigns = () => {
    const { user } = useContext(AuthContext)
    const [campaigns, setCampaigns] = useState([]);
    const userEmail = user.email; 

    useEffect(() => {
        const fetchUserCampaigns = async () => {
            try {
                const response = await fetch(`https://donate-campaign-backend.vercel.app/myCampaigns?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch your campaigns');
                }
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to load your campaigns');
            }
        };

        fetchUserCampaigns();
    }, [userEmail]);

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this campaign?");
        if (!confirm) return;

        try {
            const response = await fetch(`https://donate-campaign-backend.vercel.app/campaigns/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete the campaign');
            }

            setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
            toast.success('Campaign deleted successfully');
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Failed to delete campaign');
        }
    };

    if (campaigns.length === 0) {
        return <p className="text-center text-gray-500 mt-10">You have not added any campaigns yet...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">My Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Minimum Donation</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border">{campaign.title}</td>
                                <td className="px-4 py-2 border">{campaign.type}</td>
                                <td className="px-4 py-2 border">${campaign.minDonation}</td>
                                <td className="px-4 py-2 border text-center">
                                    <Link
                                        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2"
                                        to={`/update-campaign/${campaign._id}`}
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                                        onClick={() => handleDelete(campaign._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaigns;
