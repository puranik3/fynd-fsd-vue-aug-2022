import axios from 'axios';
import config from '@/config';
import { successHandler, errorHandler } from './helper';

export const fetchWorkshops = () => {
    return axios.get( `${config.apiBaseUrl}/workshops` )
                .then( successHandler )
                .catch( errorHandler );
}

export const fetchWorkshopById = ( id ) => {
    return axios.get( `${config.apiBaseUrl}/workshops/${id}?_embed=sessions` )
                .then( successHandler )
                .catch( errorHandler );
}