import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {navigate('/')}}>ErrorPage</button>
    </div>
  )
}
