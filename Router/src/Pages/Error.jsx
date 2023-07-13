import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>page not fount</p>
      <Link to="/" className='btn'>Back Home</Link>
    </div>
  )
}

export default Error
