import axios from 'axios'

export const baseUrl = 'http://localhost:8080'

export const getCookie = (cookieName) => {
    let arr = document.cookie.split(';').filter(x=> x.trim().startsWith(cookieName));
    if (arr.length) return arr[0].split('=')[1];
    else return null
}

const api = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    mode: 'cors'
});

export const fullPathHOF = prefix => postfix => `${prefix}${postfix}`

export const authorizedGet = async (path, params) => 
    await api.get(`${path}${params}`, { headers: { Authorization: 'Basic ' + getCookie('token') } })

export const authorizedPost = async (path, params, data) => 
    await api.post(`${path}${params}`, data, { headers: { Authorization: 'Basic ' + getCookie('token') } })    