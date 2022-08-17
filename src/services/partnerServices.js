import axios from 'axios'
export const getUserPartners = async() => {
    const res = await axios.get('http://localhost:5000/partner/get',{ withCredentials: true })
    const data = await res.data;
    return data;
}

export const updatePartner = async(partnerData) => {
    const res = await axios.post('http://localhost:5000/partner/update', partnerData, { withCredentials: true })
    const data = await res.data;
    return data;
}

export const createPartner = async(partnerData) => {
    const res = await axios.post('http://localhost:5000/partner/create', partnerData, { withCredentials: true })
    const data = await res.data;
    return data;
}
export const removePartner = async(partnerData) => {
    const res = await axios.post('http://localhost:5000/partner/remove', partnerData, { withCredentials: true })
    const data = await res.data;
    return data;
}
