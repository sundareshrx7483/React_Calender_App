import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    periodicity: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Company name is required!";
    if (!formData.location) newErrors.location = "Location is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCompanies([...companies, formData]);
      setFormData({
        name: '',
        location: '',
        linkedin: '',
        emails: '',
        phoneNumbers: '',
        comments: '',
        periodicity: '',
      });
      setErrors({});
    }
  };

  const handleDelete = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <h2 className="text-3xl font-extrabold text-white">Company Management</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter company name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">LinkedIn Profile</label>
                <input
                  type="text"
                  name="linkedin"
                  placeholder="Enter LinkedIn URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Email Addresses</label>
                <input
                  type="text"
                  name="emails"
                  placeholder="Enter email addresses"
                  value={formData.emails}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Phone Numbers</label>
                <input
                  type="text"
                  name="phoneNumbers"
                  placeholder="Enter phone numbers"
                  value={formData.phoneNumbers}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Communication Periodicity</label>
                <input
                  type="text"
                  name="periodicity"
                  placeholder="Enter communication frequency"
                  value={formData.periodicity}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Comments</label>
                <textarea
                  name="comments"
                  placeholder="Enter additional comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
                />
              </div>
            </div>
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200"
              >
                Add Company
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Companies List</h3>
          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">{company.name}</h4>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {company.location}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleDelete(index)} 
                    className="bg-red-100 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyManagement;