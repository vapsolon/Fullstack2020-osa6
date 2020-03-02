import React from 'react'
import {useDispatch} from 'react-redux'
import {changeAction} from '../reducers/filterReducer'

const Filter = () =>{
    const dispatch = useDispatch()
    
    const handleChange = (event) =>{
        dispatch(changeAction(event.target.value))
    }
    
    const style ={
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input name="filter" onChange={handleChange} />
        </div>
    )
}

export default Filter