import axios from 'axios'
export const fetchUserData = async() => {
    const res = await axios.get('http://localhost:5000/user/data',{ withCredentials: true })
    const data = await res.data;
    return data;
}


