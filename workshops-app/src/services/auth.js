import axios from 'axios';

// credentials = { email: "john.doe@example.com", password: "Password123#" }
export const login = async ( credentials ) => {
    const response = await axios.post(
        `http://localhost:8001/login`,
        credentials,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};