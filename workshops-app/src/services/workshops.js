import axios from 'axios';

const getWorkshops = async () => {
    const response = await axios.get( `http://localhost:8001/workshops` );
    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get( `http://localhost:8001/workshops/${id}`, {
        params: {
            _embed: 'sessions'
        }
    });
    return response.data;
};

export {
    getWorkshops,
    getWorkshopById
};