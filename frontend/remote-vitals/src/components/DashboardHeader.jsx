import React from 'react';
import { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';
import { useNavigate } from 'react-router-dom';

import health from '../assets/health.png'

const DashboardHeader = () => {

    const { patient, logout } = useContext(PatientContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login'); // ✅ FIX: Redirect to login after logout
    };

    return (
    <div className='DashHeader'>
        <div className='Left'>
            {patient && (
              <>
                <div className='patient-detail'>
                  <span className='patient-name'>{patient.name}</span>
                  <span className='patient-meta'>Age: {patient.patientAge} | Height: {patient.height}cm | Weight: {patient.weight}kg</span>
                </div>
              </>
            )}
        </div>
        
        <div className='Right'>
            <div>
                <h3>Live Monitoring</h3>
            </div>
            <div>
                <button onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    </div>
  )

}

export default DashboardHeader