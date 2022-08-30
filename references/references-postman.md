# References

Please download Postman from https://www.postman.com/downloads/ and import the Postman collection from https://mymeetingsapp.herokuapp.com/ (download using the last link on the page).


Open up Postman (you can skip the Google sign up if it asks - it is not needed). Import the collection into Postman as discussed in the session.


Go through and understand the API...
1. Register yourself (set your credentials like in the sample body)
2. Login to get the token (remember you need to set the credentials like given in the sample body)
3. Use the token sent in the response you receive and set it as the Authorization header in every following request
4. Explore the various Meetings app APIs - make sure to send appropriate body (modify details as per needs), understand and modify the query string parameters appropriately, and do make sure to set the Authorization header to the token you received on login.


References:
- https://www.youtube.com/watch?v=E0f9DUEN_jI
- https://www.youtube.com/watch?v=juldrxDrSH0&list=PLhW3qG5bs-L-oT0GenwPLcJAPD_SiFK3C