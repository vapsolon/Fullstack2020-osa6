import React from 'react'
import {useDispatch} from 'react-redux'
import {createAction} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()
  
    const create = async(event) =>{
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ""
        dispatch(createAction(content))
        dispatch(notify("Anecdote '" + content + "' created", 1))
    }

    return(
        <div>
            <h2>Create New</h2>
            <form onSubmit={create}>
                <div><input name="content" /></div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default NewAnecdote