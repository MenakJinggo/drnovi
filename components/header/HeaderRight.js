import Link from "next/link";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import{useSession, signIn, signOut} from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import React, {useContext, useEffect, useState} from 'react'
import { Store } from './../contex/myContext'
import { fetchRead } from "../CrudFunction";
function HeaderRight() {

  const { showForm, lastRM, setLastRM, showSearchOK, showAddForm, setShowAddForm,dataM,setDataM, showSpinner} = useContext(Store);
  
  let i = 0
  const addNewCustomer = async (e)=>{
    e.preventDefault()
    setShowAddForm(!showAddForm)

    // console.log('yes')
    const lastRM = await fetchRead("/api/helper")
    // console.log(parseInt(response.data.lastRM[0].rm)+1)

    let newRm = parseInt(lastRM.lastRM[0].rm) + 1
    setLastRM(newRm)
    setDataM({...dataM, rm:newRm})

  

   



  }
  const router = useRouter()

  return (
    <div className="w-full flex items-center justify-around">
        <div onClick={(e)=>addNewCustomer(e)}  
          className="flex items-center justify-center cursor-pointer space-x-2">
          <p >Add RM</p>
          < DataSaverOnIcon />
        </div>

        <div onClick={(e)=>addNewCustomer(e)}  
          className="flex items-center justify-center cursor-pointer space-x-2">
          <p >Add Alamat</p>
          < DataSaverOnIcon />
        </div>
        {/* <div 
          onClick={()=>router.push("/admin")} 
          className="flex  items-center space-x-4 cursor-pointer ">
          <p className='inline-flex'> Admin </p>
        </div>
        <div onClick={signOut} >
            <LogoutIcon className="cursor-pointer" />
        </div>     */}
    </div>
  );
}

export default HeaderRight;
