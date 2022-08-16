import axios from 'axios'
export const updateUserProfile = async(picture) => {
    const res = await axios.post('http://localhost:5000/user/updateprofile',picture,{ withCredentials: true })
    const data = await res.data;
    return data;
}


