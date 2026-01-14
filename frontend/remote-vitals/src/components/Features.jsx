import React from 'react'
import Card from './Card'
import Hero from './Hero'
 
const Features = () => {
  return (
    <>
        <Hero/>
        <section>
            <div className="feature-grid">
                <Card>
                    <h2>Easy Patient Registration</h2>
                    <p>Register patients quickly with essential health details in one simple form. No clutter, no confusion.</p>
                </Card>
                <Card>
                    <h2>Secure Access</h2>
                    <p>Access patient records safely with authenticated login, ensuring privacy and controlled access.</p>
                </Card>
                <Card>
                    <h2>Organized Records</h2>
                    <p>View and manage patient vitals and information from one centralized dashboard.</p>
                </Card>
                <Card>
                    <h2>Remote Ready</h2>
                    <p>Built for remote healthcare workflows, making patient monitoring accessible anytime, anywhere.</p>
                </Card>
            </div>
        </section>
    </>
    
  )
}

export default Features