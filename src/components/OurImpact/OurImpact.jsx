import React from 'react';

const OurImpact = () => {
    return (
        <div className="py-16">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-800">
                Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://i.ibb.co.com/Ltp3j9C/marketing.png"
                            alt="Campaigns"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 text-center">
                        500+ Campaigns
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Successfully hosted over 500 impactful campaigns across various sectors.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://img.icons8.com/external-outline-juicy-fish/64/000000/external-heart-love-outline-outline-juicy-fish.png"
                            alt="Lives Changed"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 text-center">
                        10,000+ Lives Changed
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Together, we've positively impacted countless lives worldwide.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://i.ibb.co.com/1Qt9yPB/reach.png"
                            alt="Global Reach"
                            className="h-16"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 text-center">
                        Global Reach
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Extended our support to communities in over 30 countries worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;
