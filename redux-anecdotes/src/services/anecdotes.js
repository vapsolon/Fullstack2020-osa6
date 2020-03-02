import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async() =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async(content) =>{
    const anec = {content, votes:0}
    const res = await axios.post(baseUrl, anec)
    return res.data
}

const update = async(id, newObject) =>{
    const res = await axios.put(`${baseUrl}/${id}`, newObject)
    return res.data
}

export default {getAll, create, update}