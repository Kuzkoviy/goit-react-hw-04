import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com`;

const key = 'pHFGXRJIJ7jAfSCOdmk6XC4RRPalj8KA0f-9ytrwD_I';

export const fetchGallery = async (query, page) => {
    const params = {
        client_id: key,
        query: query,
        page: page,
        per_page: 15,
    }

    const res = await axios.get('/search/photos', {
    params: params,
});

    // console.log(res.data);
    return res.data;
}