const initialState = ""

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'CHANGE':
            return action.data.content
        default: return state
    }
}

export const changeAction = (content) =>{
    return{
        type: 'CHANGE',
        data: {content}
    }
}

export default reducer