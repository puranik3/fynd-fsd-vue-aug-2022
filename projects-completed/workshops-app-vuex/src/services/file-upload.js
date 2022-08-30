import axios from 'axios';
import config from '@/config';
import { successHandler, errorHandler } from './helper';

function upload( formData ) {
    const url = `${config.apiBaseUrl}/users/me/profilephoto`;

    return axios.post( url, formData )
        .then( successHandler )
        .then( x => x.map( img => Object.assign( {}, img, { url: `${config.apiBaseUrl}/${img._id}` } ) ) )
        .catch( errorHandler );
}

export {
    upload
};