import React from 'react'
import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'



export default function App () {
  return (
    <div>
    <ProfilePhoto />
    <FullName />
    <Address /> 
    </div>
  )
}
