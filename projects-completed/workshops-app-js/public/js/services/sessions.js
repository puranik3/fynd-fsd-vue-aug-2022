const getSessionsForWorkshopWithId = (workshopId) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${workshopId}/sessions` )
                .then( response => response.data );
}


export {
    getSessionsForWorkshopWithId
}