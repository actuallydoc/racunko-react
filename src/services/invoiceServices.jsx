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


export const updateInvoice = async(invoiceData) => {
    const res = await axios.post('http://localhost:5000/invoice/update', invoiceData, { withCredentials: true })
    const data = await res.data
    console.log(data)
    return data
}

export const createInvoice = async(invoiceData) => {
    const res = await axios.post('http://localhost:5000/invoice/create', invoiceData, { withCredentials: true })
    const data = await res.data
    return data
}