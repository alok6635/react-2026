import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} =useParams();
  // console.log(id);

  return (
   <h2>Hello Component - {id}</h2>
  )
}
export default SingleProduct