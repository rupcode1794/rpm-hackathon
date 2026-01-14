import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PatientContext } from '../context/PatientContext';


const Register = () => {
    const [name, setName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { login } = useContext(PatientContext);


    const submitForm = async (e) => {
        e.preventDefault();

        const newPatient = {
            name,
            contactPhone,
            location,
            description,
            patientAge,
            height,
            weight,
            password
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register',
                newPatient,
                { withCredentials: true });
            login(response.data);
            navigate('/dashboard');
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            console.log({ message });
            alert('Registration failed: ' + message);
        }
    };
    return (
        <section >
            <div>
                <h2>Register</h2>
                <form onSubmit={submitForm}>
                    <div>
                        <label>Name </label>
                        <input
                            type='text'
                            placeholder='Patient Name...'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Phone </label>
                        <input
                            type='tel'
                            placeholder='555-555-5555'
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Address </label>
                        <input
                            type='text'
                            placeholder='...'
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description </label>
                        <textarea
                            type='text'
                            placeholder='Health Condition'
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label>Age </label>
                        <input
                            type='number'
                            placeholder='Patient Age'
                            required
                            value={patientAge}
                            onChange={(e) => setPatientAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Height </label>
                        <input
                            type='number'
                            placeholder='Height (cm)'
                            required
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Weight </label>
                        <input
                            type='number'
                            placeholder='Weight (kg)'
                            required
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register