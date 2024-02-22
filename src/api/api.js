import axios from "axios";

const apiKey = import.meta.env.VITE_SECRET;

// api from unsplash, search photo
const fakeUnsplash = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        },
        params: {
            query: term,
            orientation: 'landscape',
        },
    })
    return response.data.results;
};

export default fakeUnsplash;