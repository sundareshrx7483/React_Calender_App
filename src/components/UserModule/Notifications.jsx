import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Notifications = ({ overdueCommunications = [], dueToday = [] }) => {
  const slideUp = useSpring({
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    config: { tension: 180, friction: 60 },
  });

  return (
    <animated.div style={slideUp} className="p-8 bg-white shadow-xl rounded-xl max-w-2xl mx-auto my-6 border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Notifications</h2>
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-700">Overdue Communications</h3>
          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
            {overdueCommunications.length} overdue
          </span>
        </div>
        {overdueCommunications.length === 0 ? (
          <p className="text-gray-500 italic">No overdue communications.</p>
        ) : (
          <ul className="space-y-3">
            {overdueCommunications.map((communication, index) => (
              <li key={index} className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-800">{communication.companyName}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{communication.type}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500">{communication.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-700">Today's Communications</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {dueToday.length} today
          </span>
        </div>
        {dueToday.length === 0 ? (
          <p className="text-gray-500 italic">No communications due today.</p>
        ) : (
          <ul className="space-y-3">
            {dueToday.map((communication, index) => (
              <li key={index} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-800">{communication.companyName}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{communication.type}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500">{communication.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </animated.div>
  );
};

export default Notifications;