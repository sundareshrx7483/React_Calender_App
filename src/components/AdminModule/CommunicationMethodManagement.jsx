import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
    { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
    { name: 'Email', description: 'Send an email', sequence: 3, mandatory: true },
    { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
    { name: 'Other', description: 'Any other method', sequence: 5, mandatory: false },
  ]);

  const [editingMethod, setEditingMethod] = useState(null);
  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    sequence: 0,
    mandatory: false
  });

  const handleAddMethod = () => {
    if (newMethod.name && newMethod.description) {
      setMethods([...methods, {
        ...newMethod,
        sequence: methods.length + 1
      }]);
      setNewMethod({
        name: '',
        description: '',
        sequence: 0,
        mandatory: false
      });
    }
  };

  const handleEditMethod = (index) => {
    setEditingMethod({
      ...methods[index],
      index
    });
  };

  const handleUpdateMethod = () => {
    if (editingMethod && editingMethod.name && editingMethod.description) {
      const updatedMethods = methods.map((method, index) =>
        index === editingMethod.index ? {
          name: editingMethod.name,
          description: editingMethod.description,
          sequence: editingMethod.sequence,
          mandatory: editingMethod.mandatory
        } : method
      );
      setMethods(updatedMethods);
      setEditingMethod(null);
    }
  };

  const handleDeleteMethod = (index) => {
    const updatedMethods = methods.filter((_, i) => i !== index).map((method, i) => ({
      ...method,
      sequence: i + 1
    }));
    setMethods(updatedMethods);
  };

  const handleInputChange = (e, type) => {
    const { name, value, checked } = e.target;
    if (type === 'new') {
      setNewMethod(prev => ({
        ...prev,
        [name]: name === 'mandatory' ? checked : value
      }));
    } else if (type === 'edit') {
      setEditingMethod(prev => ({
        ...prev,
        [name]: name === 'mandatory' ? checked : value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <h2 className="text-3xl font-extrabold text-white">Communication Method Management</h2>
          </div>
          
          {/* Add New Method Form */}
          <div className="p-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Add New Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Method Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter method name"
                    value={newMethod.name}
                    onChange={(e) => handleInputChange(e, 'new')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={newMethod.description}
                    onChange={(e) => handleInputChange(e, 'new')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white shadow-sm"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="mandatory"
                      checked={newMethod.mandatory}
                      onChange={(e) => handleInputChange(e, 'new')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-700">Mandatory</span>
                  </label>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleAddMethod}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
                  >
                    Add Method
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Method Form */}
          {editingMethod && (
            <div className="px-8 pb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Method Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editingMethod.name}
                      onChange={(e) => handleInputChange(e, 'edit')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Description</label>
                    <input
                      type="text"
                      name="description"
                      value={editingMethod.description}
                      onChange={(e) => handleInputChange(e, 'edit')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white shadow-sm"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="mandatory"
                        checked={editingMethod.mandatory}
                        onChange={(e) => handleInputChange(e, 'edit')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-700">Mandatory</span>
                    </label>
                  </div>
                  <div className="flex items-end space-x-4">
                    <button
                      onClick={handleUpdateMethod}
                      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditingMethod(null)}
                      className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Methods Table */}
          <div className="px-8 pb-8">
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-gray-900">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Sequence</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mandatory</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {methods.map((method, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{method.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{method.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{method.sequence}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${method.mandatory ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {method.mandatory ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleEditMethod(index)}
                            className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 focus:ring-2 focus:ring-amber-300 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteMethod(index)}
                            className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationMethodManagement;