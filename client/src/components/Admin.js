import React from 'react'

import UserList from '../admin/UserList'
import EditUser from '../admin/EditUser'
import AddUser from '../admin/AddUser'
const Admin = () => {
  return (
    <div className="Admin">

    <>
    <UserList /> 
     {/* <EditUser />  */}
    {/* <AddUser /> */}
</>

{/* <Route path="/" element={<UserList />} /> */}
{/* <Route path="/AdminEditUser" element={<EditUser />} />
<Route path="/AdminAddUser" element={<AddUser />} />  */}
    </div>

  )
}

export default Admin