import React from 'react'

const Hero = ({title="Prevent Crises. Preserve Health", subtitle="Seamless Remote Patient Monitoring that keeps you healthy and your care team informed, wherever you are"}) => {
  return (
    <section>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
    </section>
  )
}

export default Hero