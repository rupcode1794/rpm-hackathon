import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'

const Home = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <div className="home-cards">
        <Card>
          <p>Register a new Patient</p>
          <Link 
          to={'/register'}>Register</Link>
        </Card>
        <Card>
          <p>Login into Existing Account</p>
          <Link 
          to={'/login'}>Login</Link>
        </Card>
      </div>
    </section>
  )
}

export default Home