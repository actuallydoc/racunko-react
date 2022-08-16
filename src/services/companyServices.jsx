import axios from 'axios'

export const fetchCompanyData = async() => {
    const res = await axios.get('http://localhost:5000/company/get',{ withCredentials: true })
    const data = await res.data;
    return data;
}


export const createCompany = async(companyData) => {
    const res = await axios.post('http://localhost:5000/company/create', companyData, { withCredentials: true })
    const data = await res.data;
    return data;
}


export const updateCompany = async(companyData) => {
    const res = await axios.post('http://localhost:5000/company/update', companyData, { withCredentials: true })
    const data = await res.data;
    return data;
}

export const deleteCompany = async(companyData) => {
    const res = await axios.post('http://localhost:5000/company/delete', companyData, { withCredentials: true })
    const data = await res.data;
    return data;
}