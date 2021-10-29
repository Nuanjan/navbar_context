import React, {useContext, useState} from 'react';
import MyContext from '../MyContext';

const Form = () => {
const [, setUser] = useContext(MyContext);
const [name, setName] =useState("")
    const submitName = (e) => {
        e.preventDefault()
        setUser(name)
        setName("")
    }
    return (
        <form onSubmit={submitName}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;