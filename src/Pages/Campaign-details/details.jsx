import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from '../../Provider/AuthProvider';

const Details = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [campaign, setCampaign] = useState(null);
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`https://donate-campaign-backend.vercel.app/campaign/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch campaign details');
                }
                const data = await response.json();
                setCampaign(data);

                // Check if the campaign deadline has passed
                const currentDate = new Date();
                const campaignDeadline = new Date(data.deadline);
                if (campaignDeadline < currentDate) {
                    setIsDeadlinePassed(true);
                }
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to load data');
            }
        };

        fetchCampaign();
    }, [id]);

    const handleDonate = async () => {
        if (isDeadlinePassed) {
            toast.error('The campaign deadline has passed. You cannot donate anymore.');
            return;
        }

        try {
            const donationData = {
                campaignId: id,
                userEmail: user.email,
                userName: user.displayName,
            };

            const response = await fetch('https://donate-campaign-backend.vercel.app/donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donationData),
            });

            if (response.ok) {
                toast.success('Donation successful!');
                navigate("/campaigns");
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to donate');
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Donation failed');
        }
    };

    if (!campaign) {
        return <p className="text-center text-gray-500 mt-10">Loading campaign details...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-64 object-cover rounded-lg"
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">{campaign.title}</h1>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <p className="text-gray-600 font-semibold mt-2 capitalize">Type: {campaign.type}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 font-semibold">
                    Minimum Donation: ${campaign.minDonation}
                </span>
                <span className="text-gray-500">
                    Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </span>
            </div>

            {isDeadlinePassed ? (
                <div className="mt-6 text-center text-red-600 font-semibold">
                    The campaign deadline has passed. Donations are no longer accepted.
                </div>
            ) : (
                <button
                    onClick={handleDonate}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Donate
                </button>
            )}
        </div>
    );
};

export default Details;
