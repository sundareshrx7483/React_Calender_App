import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Update to JSON Server URL

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching companies: ' + error.message);
  }
};

export const addCompany = async (companyData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/companies`, companyData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding company: ' + error.message);
  }
};

export const updateCompany = async (companyId, companyData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/companies/${companyId}`, companyData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating company: ' + error.message);
  }
};

export const deleteCompany = async (companyId) => {
  try {
    await axios.delete(`${API_BASE_URL}/companies/${companyId}`);
  } catch (error) {
    throw new Error('Error deleting company: ' + error.message);
  }
};

export const logCommunication = async (communicationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/communications`, communicationData);
    return response.data;
  } catch (error) {
    throw new Error('Error logging communication: ' + error.message);
  }
};

export const fetchCommunications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/communications`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching communications: ' + error.message);
  }
};

export const fetchCommunicationFrequency = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/communications`);
    const frequency = response.data.reduce((acc, comm) => {
      acc[comm.type] = (acc[comm.type] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(frequency).map(([method, count]) => ({ method, frequency: count }));
  } catch (error) {
    throw new Error('Error fetching communication frequency: ' + error.message);
  }
};