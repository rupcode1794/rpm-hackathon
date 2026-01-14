import React from 'react';
import MlGraph from './MlGraph';

const AlertsPanel = ({ mlGraph }) => { 
 
  return (
    <div className="alerts-panel">
      <h2>Critical Alerts</h2>
      <MlGraph mlGraph={mlGraph} />
    </div>
  )
}

export default AlertsPanel