import axios from 'axios';
import config from '@/config';
import { successHandler, errorHandler } from './helper';

export const vote = ( voteType, sessionId ) => {
    return axios.put( `${config.apiBaseUrl}/sessions/${sessionId}/${voteType}` )
                .then( successHandler )
                .catch( errorHandler );
};