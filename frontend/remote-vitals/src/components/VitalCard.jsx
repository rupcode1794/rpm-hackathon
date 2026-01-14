import React from 'react';



const VitalCard = ({label, value, unit, status}) => {
  return (
    <>
      <div>
        <div className='label'>
          <span>{label}</span>
        </div>
        <div className='condition'>
          <span className='value'>{value}</span>
          <span className='unit'>{unit}</span>
        </div>
        <div className={`status ${status}`}>{status}</div>
      </div>
    </>

  )
}

export default VitalCard