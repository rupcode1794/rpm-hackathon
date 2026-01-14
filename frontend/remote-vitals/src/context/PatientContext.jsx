import React from 'react';
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const PatientContext = createContext(null);//created a context

const PatientContextProvider = ({ children }) => {
    const [patient, setPatient] = useState(null);//created a value to provide
    const [vitals, setVitals] = useState(null);
    const [mlResults, setMlResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [vitalsLoading, setVitalsLoading] = useState(true);
    const [mlLoading, setMlLoading] = useState(true);

    //get patient details 
    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const receive = await axios.get('http://localhost:5000/api/auth/me',
                    { withCredentials: true }
                )
                if (receive && receive.data) {
                    setPatient(receive.data);
                }
            } catch (error) {
                setPatient(null);
            } finally {
                setLoading(false)
            }
        }
        fetchPatient();

    }, [])

    const login = (data) => setPatient(data);
    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/logout', {},
                { withCredentials: true }
            )

        } finally {
            setPatient(null);
            setVitals(null);
            setMlResults(null);

            setLoading(false);
            setVitalsLoading(false);
            setMlLoading(false);
        }
    }

    useEffect(() => {
        if (patient) {
            setVitalsLoading(true);
            setMlLoading(true);
        }
    }, [patient])

    //get patient vitals
    useEffect(() => {
        if (!patient) {
            setVitals(null);
            setVitalsLoading(false);
            return;
        }
        const fetchVitals = async () => {
            try {
                const receive = await axios.get('http://localhost:5000/api/vitals',
                    { withCredentials: true }
                );
                if (receive && receive.data) {
                    setVitals(receive.data);
                } 
            } catch (error) {
                setVitals(null);
            } finally {
                setVitalsLoading(false);
            }
        }
        fetchVitals();
        const vitalsInterval = setInterval(fetchVitals, 10000);
        return () => clearInterval(vitalsInterval);
    }, [patient])

    //get ml results
    useEffect(() => {
        if (!patient) {
            setMlResults(null);
            setMlLoading(false);
            return;
        }
        const fetchMlResult = async () => {
            try {
                const receive = await axios.get('http://localhost:5000/api/ml',
                    { withCredentials: true }
                );
                if (receive && receive.data) {
                    setMlResults(receive.data);
                }
            } catch (error) {
                setMlResults(null);
            } finally {
                setMlLoading(false);
            }
        }
        fetchMlResult();
        const mlInterval = setInterval(fetchMlResult, 30000);
        return () => clearInterval(mlInterval);
    }, [patient])


    return (
        <PatientContext.Provider value={{
            patient,
            login,
            logout,
            loading,
            vitals,
            vitalsLoading,
            mlResults,
            mlLoading
        }}>
            {children}
        </PatientContext.Provider>
    )
}
export { PatientContext };
export default PatientContextProvider;