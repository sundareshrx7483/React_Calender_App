import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    
        // Fetch communications for the selected date
        fetchCommunications(newDate);
      };
    
      const [communications, setCommunications] = React.useState([]);
      const [loading, setLoading] = React.useState(false);
    
      const fetchCommunications = async (selectedDate) => {
        try {
          setLoading(true);
          // Format date to match API requirements (YYYY-MM-DD)
          const formattedDate = selectedDate.toISOString().split('T')[0];
          
          // Replace with your actual API endpoint
          const response = await fetch(`/api/communications?date=${formattedDate}`);
          const data = await response.json();
          
          setCommunications(data);
        } catch (error) {
          console.error('Error fetching communications:', error);
        } finally {
          setLoading(false);
        }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-3xl shadow-2xl border border-gray-100">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Communications Calendar
        </h2>
        <div className="mb-10 transform hover:scale-102 transition-all duration-300">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="mx-auto rounded-2xl border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
     
        {loading ? (
          <div className="mt-8 flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
            <p className="text-lg text-gray-600 font-medium">Loading your communications...</p>
          </div>
        ) : (
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3 flex items-center">
                  <span className="mr-2">📅</span> Past Communications
                </h3>
                <div className="space-y-6">
                  {communications
                    .filter(comm => new Date(comm.date) < new Date())
                    .map(comm => (
                      <div key={comm.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <p className="font-bold text-xl text-gray-800 mb-2">{comm.title}</p>
                        <p className="text-sm text-blue-600 font-semibold mb-3 flex items-center">
                          <span className="mr-2">🗓</span>
                          {new Date(comm.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 leading-relaxed">{comm.description}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3 flex items-center">
                  <span className="mr-2">🚀</span> Upcoming Communications
                </h3>
                <div className="space-y-6">
                  {communications
                    .filter(comm => new Date(comm.date) >= new Date())
                    .map(comm => (
                      <div key={comm.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <p className="font-bold text-xl text-gray-800 mb-2">{comm.title}</p>
                        <p className="text-sm text-blue-600 font-semibold mb-3 flex items-center">
                          <span className="mr-2">🗓</span>
                          {new Date(comm.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 leading-relaxed">{comm.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;