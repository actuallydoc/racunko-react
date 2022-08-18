import axios from 'axios'

export const fetchUserInvoices = async() => {
    const res = await axios.get('http://localhost:5000/invoice/get',{ withCredentials: true })
    const data = await res.data;
    return data;
}


export const deleteInvoice = async(id) => {
    const res  = await axios.post('http://localhost:5000/invoice/delete', id, { withCredentials: true })
    const data = await res.data
    return data
}