export const successHandler = response => response.data;

export const errorHandler = error => {
    console.log( error.message );
    throw error;
}