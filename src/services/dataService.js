import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update to JSON Server URL

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(`${API_URL}/companies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};

export const addCompany = async (companyData) => {
    try {
        const response = await axios.post(`${API_URL}/companies`, companyData);
        return response.data;
    } catch (error) {
        console.error('Error adding company:', error);
        throw error;
    }
};

export const updateCompany = async (companyId, companyData) => {
    try {
        const response = await axios.put(`${API_URL}/companies/${companyId}`, companyData);
        return response.data;
    } catch (error) {
        console.error('Error updating company:', error);
        throw error;
    }
};

export const deleteCompany = async (companyId) => {
    try {
        await axios.delete(`${API_URL}/companies/${companyId}`);
    } catch (error) {
        console.error('Error deleting company:', error);
        throw error;
    }
};

export const fetchCommunications = async (companyId) => {
    try {
        const response = await axios.get(`${API_URL}/communications?companyId=${companyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching communications:', error);
        throw error;
    }
};

export const logCommunication = async (companyId, communicationData) => {
    try {
        const response = await axios.post(`${API_URL}/communications`, { ...communicationData, companyId });
        return response.data;
    } catch (error) {
        console.error('Error logging communication:', error);
        throw error;
    }
};