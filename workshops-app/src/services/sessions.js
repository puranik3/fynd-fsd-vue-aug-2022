/**
 * Service for fetching list of sessions, adding session etc.
 */
 import axios from 'axios';
 
 export const vote = async ( voteType, sessionId ) => {
    const response = await axios.put( `http://localhost:8001/sessions/${sessionId}/${voteType}` );
    return response.data;
    
 };