import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8">
      <h2 className="text-xl font-bold">Gadget Heaven</h2>
      <p className="text-sm text-gray-600 mt-2 mb-6">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-12 text-left">
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
