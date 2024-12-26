import React from 'react';

const OverdueCommunicationTrends = () => {
    // Sample data for overdue communications trends
    const trendsData = [
        { company: 'Company A', overdueCount: 5 },
        { company: 'Company B', overdueCount: 3 },
        { company: 'Company C', overdueCount: 8 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mx-4 my-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overdue Communication Trends</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Overdue Communications
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {trendsData.map((trend, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {trend.company}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        {trend.overdueCount}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OverdueCommunicationTrends;