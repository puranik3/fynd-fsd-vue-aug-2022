import { getWorkshops } from '../services/workshops.js';

function populateWorkshops( workshops ) {
    const workshopsListEl = document.querySelector( '#workshops-list' );

    workshopsListEl.innerHTML = '';

    workshops.forEach(workshop => {
        const { id, imageUrl, name, startDate, endDate, time } = workshop;

        workshopsListEl.innerHTML += `
            <a class="workshops-list-item" href="workshop-details.html?id=${id}&name=${name}">
                <div class="img-wrapper">
                    <img
                        src="${imageUrl}"
                        alt="${name}"
                        class="img-fluid"
                    />
                </div>
                <h2>${workshop.name}</h2>
                <div class="item-details">
                    <div class="my-sm">
                        ${startDate}
                        -
                        ${endDate}
                    </div>
                    <div class="my-sm">
                        ${time}
                    </div>
                </div>
            </a>
        `;
    });
}

function getAndPopulateWorkshops() {
    getWorkshops()
        .then( data => {
            populateWorkshops( data );
        })
        .catch( error => console.log( error.message ) );
}

function init() {
    getAndPopulateWorkshops();
}

init();