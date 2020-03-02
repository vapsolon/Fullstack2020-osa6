import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {voteAction} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'

const Anecdote = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
  
    const vote = (id) =>{
        const selected = anecdotes.find(n => n.id === id)
        const newVotes = selected.votes + 1
        const updated = {...selected, votes:newVotes}
        dispatch(voteAction(updated))
        dispatch(notify("Vote for '" + selected.content + "' registered", 1))
    }

    return(
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).filter(anecdote => anecdote.content.includes(filter)).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Anecdote