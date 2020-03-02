const initialState = ""
let tid = null

const hold = time =>{
    return new Promise(res =>{
        tid = setTimeout(res, time*5000)
    })
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'DISPLAY':
            return action.data.content
        case 'HIDE':
            return ""
        default: return state
    }
}

export const notify = (content, time) =>{
    return async dispatch =>{
        dispatch({
            type: 'DISPLAY',
            data: {content}
        })
        if(tid !== null){
            window.clearTimeout(tid)
        }
        await hold(time)
        dispatch({
            type: 'HIDE'
        })
    }
}

export default reducer