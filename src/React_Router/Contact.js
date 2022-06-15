import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>Contact <button onClick={()=>navigate('/')} > go to Home page </button> </div>
  )
}

export default Contact