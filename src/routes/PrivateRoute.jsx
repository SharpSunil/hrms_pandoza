import React, { Children } from 'react'

const PrivateRoute = ({Children}) => {

    if(!localStorage.getItem('token')) return <Navigate to="/login" replace />
    
  return (
    <>
      {Children}
    </>
  )
}

export default PrivateRoute
