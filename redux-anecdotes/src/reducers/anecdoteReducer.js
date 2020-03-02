import anecService from '../services/anecdotes'

const reducer = (state = [], action) =>{
    switch(action.type){
        case 'VOTE':
            const updated = state.map(anec => anec.id !== action.data.id ? anec : action.data)
            return updated
        case 'CREATE':
            return [...state, action.data]
        case 'INIT':
            return action.data
        default: return state
    }
}

export const voteAction = updatedAnec =>{
    return async dispatch =>{
        const updated = await anecService.update(updatedAnec.id, updatedAnec)
        dispatch({
            type: 'VOTE',
            data:updated,
        })
    }
}

export const createAction = content =>{
    return async dispatch =>{
        const newAnec = await anecService.create(content)
        dispatch({
            type: 'CREATE',
            data: newAnec,
        })
    }
}

export const initAction = () =>{
    return async dispatch =>{
        const anecdotes = await anecService.getAll()
        dispatch({
            type: 'INIT',
            data: anecdotes,
        })
    }
}

export default reducer