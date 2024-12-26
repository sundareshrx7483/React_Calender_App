import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from '@react-spring/web';

const CommunicationActionModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');

  const zoomIn = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.5)' },
    config: { tension: 250, friction: 50 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ communicationType, communicationDate, notes });
    resetForm();
  };

  const resetForm = () => {
    setCommunicationType('');
    setCommunicationDate('');
    setNotes('');
    onRequestClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <animated.div style={zoomIn} className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl mx-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Log Communication</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Type of Communication</label>
            <select
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
            >
              <option value="">Select type...</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Date of Communication</label>
            <input
              type="date"
              value={communicationDate}
              onChange={(e) => setCommunicationDate(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 resize-none"
              placeholder="Enter your notes here..."
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4 border-t">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </animated.div>
    </Modal>
  );
};

export default CommunicationActionModal;