import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import Anecdote from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {useDispatch} from 'react-redux'
import {initAction} from './reducers/anecdoteReducer'

const App = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(initAction())
    }, [dispatch])
    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <Filter />
            <Anecdote />
            <NewAnecdote />
        </div>
    )
}

export default App