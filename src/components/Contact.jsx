import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">Have a question or suggestion? We'd love to hear from you!</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1AA4D]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1AA4D]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1AA4D]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#404040] text-white px-4 py-2 rounded-lg hover:bg-[#C58940] transition-colors flex items-center"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-[#404040] p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">Feel free to reach out to us using the contact information below:</p>
              <div className="mb-4">
                <h3 className="font-semibold">Address</h3>
                <p>123 Wisdom Street, Knowledge City, 12345</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Email</h3>
                <p>info@campuscloud.com</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}