import axios from 'axios'
export const userSignup = async(dataParam) => {
    console.log(dataParam)
    const res = await axios.post('http://localhost:5000/user/create', dataParam, { withCredentials: true })
    const data = await res.data;
    return data;
}

export const userLogin = async(dataParam) => {
    console.log(dataParam)
    const res = await axios.post('http://localhost:5000/user/login', dataParam , { withCredentials: true } )
    const data = await res.data;
    return data;
}
