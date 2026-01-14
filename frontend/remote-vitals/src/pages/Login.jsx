import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PatientContext } from '../context/PatientContext';


const Login = () => {

    const [contactPhone, setContactPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { login } = useContext(PatientContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const loggedPatient = {
            contactPhone,
            password
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login',
                loggedPatient,
                { withCredentials: true }
            );
            login(response.data);
            navigate('/dashboard')
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            console.log({ message });
            alert('Login failed: ' + message); 
        }

    };
    return (
        <section>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Phone </label>
                        <input type='tel'
                            placeholder='User Id'
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="password"
                            placeholder='Enter Password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>Login </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login