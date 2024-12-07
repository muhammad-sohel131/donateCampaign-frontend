import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
