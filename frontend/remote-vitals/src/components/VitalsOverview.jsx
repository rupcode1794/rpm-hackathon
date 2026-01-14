import React from 'react';
import VitalCard from './VitalCard';

const VitalsOverview = ({vitals}) => {
  return (
    <section className="vitals-overview">
          <VitalCard
              label={'Heart Rate'}
              value={vitals.hr}
              unit={'bpm'}
              status={vitals.hr >100 ? 'warning' : 'normal'}
          />
          <VitalCard
              label={'SpO2'}
              value={vitals.spo2}
              unit={'%'}
              status={vitals.spo2 < 95 ? 'warning' : 'normal'}
          />     
          <VitalCard
              label={'Temperatur'}
              value={vitals.temp}
              unit={'°C'}
              status={vitals.temp >37.5 ? 'warning' : 'normal'}
          />
    </section>
  );
};
export default VitalsOverview