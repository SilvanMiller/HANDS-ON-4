import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "http://localhost:4000/",
});



// export default baseUrl
