import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    
    headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDY0Y2Q3OTkxYzQ5ZGUzNjBkZjlmMGJiNjEwNTUxOSIsIm5iZiI6MTcyMTE5MDkyNC4xNzE1ODYsInN1YiI6IjY2OTc0ODYxOGEwOWM0NTJjYzBjZWI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DeyG-NBI9kjz5PR9rgvE5nQRDq3Cf_FJIqCxAMPOk3c` ,
    },
    
   
});

export default apiClient;