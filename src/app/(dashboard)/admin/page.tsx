import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3'>
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard type='student'/>
        <UserCard type='teacher'/>
        <UserCard type='parent'/>
        <UserCard type='staff'/>
      </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default AdminPage