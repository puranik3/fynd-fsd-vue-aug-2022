import { getWorkshopById } from '../services/workshops.js';
import { getSessionsForWorkshopWithId } from '../services/sessions.js';

const populateWorkshop = ( workshop ) => {
    const { id, name, description, imageUrl } = workshop;

    const workshopDetailsEl = document.getElementById( 'workshop-details' );

    workshopDetailsEl.innerHTML = '';

    workshopDetailsEl.innerHTML = `
        <h1 id="workshop-name">${name}</h1>
        <hr />
        <div class="workshop-details">
            <div class="row">
                <div class="col-4">
                    <img src="${imageUrl}" alt="${name}" class="img-fluid" />
                </div>
                <div class="col-8">
                    ${description}
                </div>
            </div>
        </div>
    `;
};

const populateSessions = ( sessions ) => {
    const sessionsListEl = document.querySelector( '#sessions-list' );

    let str = `
        <h2>List of Sessions</h2>
        <ul>
    `;

    sessions.forEach(session => {
        const { id, name, speaker, duration, level, abstract, upvoteCount } = session;

        str += `
            <li>
                <h3>${name}</h3>
            </li>
        `;
    });

    str += '</ul>';

    sessionsListEl.innerHTML = str;
};

const getAndPopulateWorkshopById = ( id ) => {
    getWorkshopById( id )
        .then( data => {
            populateWorkshop( data );
        })
        .catch( error => alert( error.message ) );
};

const getAndPopulateSessions = ( id ) => {
    getSessionsForWorkshopWithId( id )
        .then( data => {
            populateSessions( data );
        })
        .catch( error => alert( error.message ) );
};

const init = () => {
    // eliminate ? from the query string
    let search = decodeURI( window.location.search.substr( 1 ) );

    let params = search.split( '&' );

    const id = params[0].split( '=' )[1];
    const name = params[1].split( '=' )[1].replace( /\+/g, ' ' );

    console.log( id, name );

    getAndPopulateWorkshopById( id );
    getAndPopulateSessions( id );
};

init();