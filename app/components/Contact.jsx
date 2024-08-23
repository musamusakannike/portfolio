"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdknpeez", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("There was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto py-10 px-4">
      <h2 className="text-4xl text-center text-purple-800 font-bold mb-8">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-purple-800 text-white font-semibold rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 transition duration-150"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {successMessage && (
        <p className="mt-4 text-green-500 text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default Contact;
