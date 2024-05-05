import React from 'react'
import Box from '../../../../components/box/Box'
import user from "./users.png"
import Bargraph from "../../../../components/Graph/Bargraph"
import Smallbar from '../../../../components/Smallbar/Smallbar'

const AdminDa = () => {
  return (
    <div className='edu'>
      <div className="boxes">
      <Box subhed={"User"} value={"40,689"} logo={user} />
      <Box subhed={"User"} value={"40,689"} logo={user} />
      <Box subhed={"User"} value={"40,689"} logo={user} />
      <Box subhed={"User"} value={"40,689"} logo={user} />


      </div>

      <div className="graphs">
        <Smallbar/><Bargraph/>


      </div>
      
    </div>
  )
}

export default AdminDa