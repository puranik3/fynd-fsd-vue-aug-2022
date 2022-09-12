const themes = [
    'primary',
    'secondary',
    'light',
    'dark',
    'info',
    'warning',
    'danger'
];

export default {
    props: {
        theme: {
            type: String,
            default: 'primary',
            validator( value ) {
                return themes.includes( value );
            }
        }
    },
    // methods: {

    // }
}