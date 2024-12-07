import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../components/Loading/Loading';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await fetch('http://localhost:5000/campaigns');
                if (!response.ok) {
                    throw new Error('Failed to fetch campaigns');
                }
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to load campaigns');
            }
        };

        fetchCampaigns();
    }, []);

    if(loading){
        return <Loading />
    }
    if (campaigns.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No campaigns available yet...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">All Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Minimum Donation</th>
                            <th className="px-4 py-2 border">Deadline</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border">{campaign.title}</td>
                                <td className="px-4 py-2 border">{campaign.type}</td>
                                <td className="px-4 py-2 border">${campaign.minDonation}</td>
                                <td className="px-4 py-2 border">
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2 border text-center">
                                    <Link
                                        to={`/campaign/${campaign._id}`}
                                        className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
                                    >
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Campaigns;
