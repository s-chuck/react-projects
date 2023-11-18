import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // userParams is a hook in react which is used when we have to catch a certain id or thing from the url that has entered by our user just like here we are catching what is the userid that user has entered in the url.
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User