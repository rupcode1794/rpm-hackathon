import React from 'react';
import { useContext } from 'react';
import { PatientContext } from '../context/PatientContext'
import DashboardLayout from '../Layouts/DashboardLayout';
import DashboardHeader from '../components/DashboardHeader';
import VitalsOverview from '../components/VitalsOverview';
import AlertsPanel from '../components/AlertsPanel';


const Dashboard = () => {
  const { vitals, vitalsLoading, mlResults, mlLoading } = useContext(PatientContext);

  const latestVitals = vitals && vitals.length > 0 ? vitals[0] : null;
  const latestMl = mlResults && mlResults.length > 0 ? mlResults[mlResults.length - 1] : null;

  const loading = vitalsLoading;


  return (
    <DashboardLayout>
      <DashboardHeader />

      {loading && (
        <div className="loading">Loading vitals...</div>
      )}

      {(!loading && latestVitals &&
        <>
          <VitalsOverview vitals={latestVitals} />
        </>
      )}

      {(!loading && !latestVitals &&
        <div className="no-data">
          <p>No vitals recorded yet.</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Waiting for data from your monitoring device...
          </p>
        </div>
      )}

      {(!mlLoading && latestMl &&
        <>
          <AlertsPanel mlGraph={latestMl} />
        </>
      )}

      {mlLoading && (
        <div className="loading">Loading ML analysis...</div>
      )}
    </DashboardLayout>
  )
}

export default Dashboard