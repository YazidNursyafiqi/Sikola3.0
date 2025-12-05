import styles from './loginManagement.module.css';
import { useState } from 'react';

function Login_Overlay(){
    const [input , setInput] = useState({});
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({...values, [name] : value}));
        console.log(input);
    }

    const handleSubmit = (e) =>{
        console.log(input);
        e.preventDefault();
    }

    return(
        <div id={styles.Login_overlay_container}>
            <form onSubmit={handleSubmit}>
                <label>masukkan nama</label>
                <input 
                    type='text' 
                    name='userName'
                    value={input.userName} 
                    onChange={handleChange}
                /><br/>
                <label>masukkan password</label>
                <input 
                    type='password' 
                    name='password'
                    value={input.password} 
                    onChange={handleChange}
                /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login_Overlay;