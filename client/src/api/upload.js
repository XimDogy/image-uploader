import axios from 'axios';

const url = "https://image-uploader-antareep.herokuapp.com/upload/"

export const uploadImage = (file) => axios.post(url, file);
export const getImage = (image_id) => axios.get(`${url}${image_id}`);