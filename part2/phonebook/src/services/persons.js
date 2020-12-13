import axios from 'axios';

const baseUrl = "/api/persons"

const getPersons = () => {
    return axios.get(baseUrl);
}

const postPerson = (newPerson) => {
    return axios.post(baseUrl, newPerson);
}

const updatePerson = (id, updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`, updatedPerson);
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default {
    getPersons,
    postPerson,
    updatePerson,
    deletePerson
};