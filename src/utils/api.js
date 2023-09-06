import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
      key: import.meta.env.VITE_REACT_API_KEY,
      cx: import.meta.env.VITE_REACT_CONTEXT_KEY
}

export const fetchDataFromApi =  async(payload) => {
     const {data} = await axios.get(BASE_URL, {
        params : {...params, ...payload}
     })
     return data ;
   // try {
//       let url;
//       // Check the searchType and construct the URL accordingly
//       if (f) {
//         url = `https://localhost:8080/images/${q}/${start}`;
//       } else {
//         url = `https://localhost:8080/${q}/${start}`;
//       }
//       const response = await axios.get(url);

//     console.log(response.data) ;

//     return response.data ;
//   } catch (error) {
//     console.error("Axios Error:", error);
//     throw error;
// }
}
