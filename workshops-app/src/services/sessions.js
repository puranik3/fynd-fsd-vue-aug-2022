/**
 * Service for fetching list of sessions, adding session etc.
 */
 import axios from 'axios';
 
 export const vote = async ( voteType, sessionId ) => {
    const response = await axios.put( `https://workshops-server.herokuapp.com/sessions/${sessionId}/${voteType}` );
    return response.data;
    
 };