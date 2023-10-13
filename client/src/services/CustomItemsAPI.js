
const API_URL = '/api/custom-items';

export const getAllCustomItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        // Handle error
        console.error("Error fetching data: ", error);
        throw error;
    }
};

export const getCustomItem = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with id ${id}: `, error);
        throw error;
    }
};

export const createCustomItem = async (customItem) => {
    try {
        const response = await axios.post(API_URL, customItem);
        return response.data;
    } catch (error) {
        console.error("Error creating item: ", error);
        throw error;
    }
};

export const updateCustomItem = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating item with id ${id}: `, error);
        throw error;
    }
};

export const deleteCustomItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting item with id ${id}: `, error);
        throw error;
    }
};