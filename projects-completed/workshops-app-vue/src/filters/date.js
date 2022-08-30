import format from 'date-fns/format';

function dateFilter( isoDateString, dateFormat = 'standard' ) {
    let formattedDate;

    try {
        switch( dateFormat ) {
            case 'standard':
                formattedDate = format(new Date( isoDateString ), "MMM d, yyyy");
                break;
            case 'indian':
                formattedDate = format(new Date( isoDateString ), "dd/MM/yyyy");
                break;
            default:
                formattedDate = isoDateString;
        }
    } catch( error ) {
        formattedDate = 'Unrecognized date syntax';
    }

    return formattedDate;
}

export default dateFilter;