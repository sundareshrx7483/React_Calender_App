import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';
import AdminDashboard from './AdminModule/AdminDashboard';
import CompanyManagement from './AdminModule/CompanyManagement';
import CommunicationMethodManagement from './AdminModule/CommunicationMethodManagement';
import Dashboard from './UserModule/Dashboard';
import Notifications from './UserModule/Notifications';
import CalendarView from './UserModule/CalendarView';
import CommunicationFrequencyReport from './ReportingModule/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './ReportingModule/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './ReportingModule/OverdueCommunicationTrends';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-white rounded-tl-2xl shadow-lg m-4 transition-all duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/user/dashboard" />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/company-management" element={<CompanyManagement />} />
              <Route path="/admin/communication-methods" element={<CommunicationMethodManagement />} />
              <Route path="/user/dashboard" element={<Dashboard />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/calendar" element={<CalendarView />} />
              <Route path="/reporting/communication-frequency" element={<CommunicationFrequencyReport />} />
              <Route path="/reporting/engagement-effectiveness" element={<EngagementEffectivenessDashboard />} />
              <Route path="/reporting/overdue-trends" element={<OverdueCommunicationTrends />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;