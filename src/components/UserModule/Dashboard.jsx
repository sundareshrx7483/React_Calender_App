import React from 'react';

const Dashboard = () => {
  const companies = [
    { name: 'Company A', lastCommunications: [{ type: 'LinkedIn Post', date: '5th September' }, { type: 'Email', date: '1st September' }], nextCommunication: { type: 'Email', date: '10th September' }, overdue: false, dueToday: false },
    // Add more companies as needed
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-xl max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Communication Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-800 to-blue-700">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider">Company Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider">Last Five Communications</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider">Next Scheduled Communication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {companies.map((company, index) => (
              <tr 
                key={index} 
                className={`
                  transition-all duration-200 hover:bg-gray-50
                  ${company.overdue ? 'bg-red-50 hover:bg-red-100' : ''} 
                  ${company.dueToday ? 'bg-yellow-50 hover:bg-yellow-100' : ''}
                `}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{company.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    {company.lastCommunications.map((comm, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">{comm.type}</span>
                        <span className="text-sm text-gray-600">{comm.date}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                      {company.nextCommunication.type}
                    </span>
                    <span className="text-sm text-gray-600">{company.nextCommunication.date}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;