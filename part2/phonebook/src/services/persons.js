import axios from 'axios';

const baseUrl = "http://localhost:3001/persons"

const getPersons = () => {
    return axios.get(baseUrl);
}

const postPerson = (newPerson) => {
    return axios.post(baseUrl, newPerson);
}

const updatePerson = (id, updatedPerson) => {
    return axios.put(`baseUrl/${id}`, updatedPerson);
}

export default {
    getPersons,
    postPerson,
    updatePerson
};