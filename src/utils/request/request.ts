import axios from  'axios';

const request = axios.create({
    baseURL: "http://localhost:5000/api/v1"
})

export const get = async (path: string, options ={}) => {
    const response = await request.get(path, options);
    return response;
}
export const post = async ( path: string , options = {}) => {
    const response = await request.post(path , options);
    return response;
}
export const put = async ( path: string , options = {}) => {
    const response = await request.put(path , options);
    return response;
}
export const deleteById = async ( path: string , options = {}) => {
    const response = await request.delete(path , options);
    return response;
}
export default request;