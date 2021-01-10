import axios from "axios";

// Export an object containing methods we'll use for accessing the randomuser.me API

export default {
    getEmployees: function (amount) {
        return axios.get(`https://randomuser.me/api/?results=${amount}`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            });
    }
    // getDogsOfBreed: function(breed) {
    //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    // },
    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }
};
