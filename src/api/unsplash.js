import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID L_GPQXotYLuLBEQEn5EM_TbV0VTm9C4MEbMtOkoVBTU'
    }
});

