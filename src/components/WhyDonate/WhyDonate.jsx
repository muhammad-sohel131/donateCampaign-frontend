import React from 'react';

const WhyDonate = () => {
    return (
        <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-800">
                Why Donate?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://i.ibb.co.com/S77Pb1B/healthcare.png"
                            alt="Make a Difference"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 text-center">
                        Make a Difference
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Your donations help those in need and bring positive change to their lives.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://i.ibb.co.com/qWd1xWp/taxes.png"
                            alt="Tax Benefits"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 text-center">
                        Tax Benefits
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Contributions to our campaigns may be eligible for tax deductions.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-heart-love-flatart-icons-outline-flatarticons.png"
                            alt="Support Communities"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 text-center">
                        Support Communities
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Your support builds stronger communities by empowering individuals and families.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyDonate;
