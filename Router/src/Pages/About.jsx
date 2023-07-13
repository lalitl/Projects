import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>About page</h2>
      <Link to="/" className='btn'>Home</Link>
    </div>
  )
}

export default About
