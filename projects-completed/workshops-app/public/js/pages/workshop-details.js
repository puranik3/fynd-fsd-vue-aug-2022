// eliminate ? from the query string
let search = decodeURI( window.location.search.substr( 1 ) );

let params = search.split( '&' );

const id = params[0].split( '=' )[1];
const name = params[1].split( '=' )[1].replace( /\+/g, ' ' );

console.log( id, name );

document.querySelector( '#workshop-name' ).innerText = name;