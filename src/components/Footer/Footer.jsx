import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Crowdcube. All Rights Reserved.</p>
        <p>
          <span className="hover:underline">
            Privacy Policy
          </span>{" "}
          |{" "}
          <span className="hover:underline">
            Terms of Service
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
