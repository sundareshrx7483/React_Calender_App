import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import CompanyManagement from './CompanyManagement';
import CommunicationMethodManagement from './CommunicationMethodManagement';

const AdminDashboard = () => {
  const slideIn = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { tension: 220, friction: 120 },
  });

  return (
    <animated.div style={slideIn} className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              Manage your companies and communication methods
            </p>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <CompanyManagement />
            </section>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </footer>
      </div>
    </animated.div>
  );
};

export default AdminDashboard;