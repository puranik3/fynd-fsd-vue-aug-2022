function getWorkshops() {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/` )
                .then( response => response.data );
}

function getWorkshopById( id ) {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` )
                .then( response => response.data );
}

export {
    getWorkshops,
    getWorkshopById
};