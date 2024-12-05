import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
const MyDonation = () => {
  const { user } = useContext(AuthContext)
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const userEmail = user.email;
    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch(`http://localhost:5000/myDonations?email=${userEmail}
                `);

                if (!response.ok) {
                    throw new Error('Failed to fetch donations');
                }

                const data = await response.json();
                setDonations(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching donations:', error);
                toast.error('Failed to fetch donations');
                setLoading(false);
            }
        };

        fetchDonations();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My Donations</h1>
            {loading ? (
                <p>Loading...</p>
            ) : donations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                        <div key={donation.donationId} className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src={donation.image || 'https://via.placeholder.com/150'}
                                alt={donation.campaignTitle}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">{donation.campaignTitle}</h2>
                            <p className="text-gray-600 mt-2">{donation.description}</p>
                            <p className="text-gray-800 font-bold mt-2">
                                Donated Amount: ${donation.amount}
                            </p>
                            <p className="text-gray-500 text-sm mt-2">Donated At: {new Date(donation.donatedAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No donations found.</p>
            )}
        </div>
    );
};

export default MyDonation;
