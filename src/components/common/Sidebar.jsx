import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white w-64 p-6 space-y-6 transition-all duration-300 ease-in-out hover:w-72 shadow-2xl border-r border-gray-700/50 backdrop-blur-lg">
      <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-tight">Navigation</h2>
      <ul className="space-y-3">
        {/* Admin Section */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold pl-3">Admin Controls</p>
          <li className="group">
            <Link to="/admin/dashboard" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-purple-300 group-hover:text-purple-100">Admin Dashboard</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/admin/company-management" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-purple-300 group-hover:text-purple-100">Company Management</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/admin/communication-methods" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-purple-300 group-hover:text-purple-100">Communication Methods</span>
            </Link>
          </li>
        </div>

        {/* User Section */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold pl-3">User Area</p>
          <li className="group">
            <Link to="/user/dashboard" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-blue-500/10">
              <span className="text-blue-300 group-hover:text-blue-100">User Dashboard</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/user/notifications" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-blue-500/10">
              <span className="text-blue-300 group-hover:text-blue-100">Notifications</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/user/calendar" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-blue-500/10">
              <span className="text-blue-300 group-hover:text-blue-100">Calendar View</span>
            </Link>
          </li>
        </div>

        {/* Reports Section */}
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold pl-3">Reports</p>
          <li className="group">
            <Link to="/reporting/communication-frequency" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-pink-500/10">
              <span className="text-pink-300 group-hover:text-pink-100">Communication Frequency</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/reporting/engagement-effectiveness" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-pink-500/10">
              <span className="text-pink-300 group-hover:text-pink-100">Engagement Effectiveness</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/reporting/overdue-trends" className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group-hover:translate-x-1 hover:shadow-lg hover:shadow-pink-500/10">
              <span className="text-pink-300 group-hover:text-pink-100">Overdue Trends</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;