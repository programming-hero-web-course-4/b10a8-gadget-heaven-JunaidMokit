


import React from "react";
import { Helmet } from "react-helmet";

const Support = ({ title }) => {
    console.log(title);
  // Make sure to return the Helmet component to update the title
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-500 text-white px-6">
        <h1 className="text-5xl font-bold mb-10">Gadget Hub</h1>
        <h1 className="text-4xl font-bold mb-4">How can I help?</h1>
        <p className="text-lg text-center mb-8"> If you face any type problem or if needs any types support then contact with us.We are contact within 24 hours.Thnaks
         
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("my_modal_7").checked = true;
          }}
          className="bg-pink-600 p-6 rounded-lg shadow-lg max-w-md w-full"
        >
          <div className="mb-4">
            <label htmlFor="topic" className="block text-sm mb-2">
              I’d like to chat about...
            </label>
            <select
              id="topic"
              className="w-full p-2 border border-pink-400 bg-pink-500 text-white rounded"
            >
              <option>Gadget Related Issue</option>
              <option>Contact with Customer Service</option>
              <option>Another Service</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-pink-400 bg-pink-500 text-white rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-pink-400 bg-pink-500 text-white rounded"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-2">
              Message <span className="italic">(remember, short & sweet please)</span>
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-pink-400 bg-pink-500 text-white rounded"
              placeholder="Your message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-pink-500 font-bold py-2 rounded hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>

        {/* Modal */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Congrats</h3>
            <p className="py-4">Your form has been submitted successfully!</p>
            <div className="modal-action">
              <label htmlFor="my_modal_7" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;

