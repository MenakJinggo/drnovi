import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import SearchInput from "./SearchInput";
import Spinner from './Spinner';
const axios = require('axios').default;
import{fetchAdd, fetchUpdate, fetchDelete, fetchSearch }from "./CrudFunction"
import { fetchRead } from './CrudFunction';

function TableLocation() {

  const { users, setUsers, removeUsers, showForm, setShowForm, Id, setId, showSpinner, setShowSpinner, setUserEdit, location, setLocation, showLocation, setShowLocation, setAlamat } = useContext(Store);
  const [showEdit, setShowEdit] = useState(false)
  const [adminId, setAdminId] = useState(null)
  const [adminEdit, setAmdinEdit] = useState({})

  
const router = useRouter()
// console.log(location)

const closeButton = (e)=>{
    e.preventDefault()
    setAdminId(null)

}

const editData=(e, x)=>{
    e.preventDefault()
 
    setAlamat(x.alamat)
    setId(x._id)
    // setShowEdit(true)
    // setAdminId(x._id)
    // setAmdinEdit(x)
    // const myUser = users.filter(user=>{
    //     return user._id == x._id
    //  })
    //  setUserEdit(myUser[0])
  }

  const updateForm = async(e)=>{
    e.preventDefault()
    console.log(alamat,"ok")
    // const data2 = await fetchAdd("/api/alamat", {alamat:alamat})
    // setShowSpinner(true)
    
    setShowSpinner(false)
    // if(data2.status==200){
    // //  console.log(alamat)
    //  const alamat = await fetchRead("/api/alamat")
    //  setLocation(alamat.abc)
    // }
    
    // console.log(alamat.abc)
    setShowLocation(true)
  }


 async function myFunction(url) {
  let text = "Are you sure to delete!\n  OK or Cancel.";
  if (confirm(text) == true) {
    
    const response = await fetchDelete(`/api/alamats/${url}`) 
    // alert()
    text = response.data.message
  } else {
    text = "You canceled!";
  }
 
  
}
 const deleteData = async (e, customersId) => {
    e.preventDefault()
    await myFunction(customersId)
    // confirm("Yakin Hapus")
    setShowSpinner(true)

  
    const alamat = await fetchRead("/api/alamat")
    setLocation(alamat.abc)
    // console.log(response)
    setShowSpinner(false)
    // setShowForm(false)
    //const newUser = users.filter(x=>{
    // return x._id !== customersId})
    // setUsers(newUser)
        
     }
         
 const getAlamat =(y)=>{
    setAmdinEdit({...adminEdit, alamat: y})
    console.log(y.abc)
    }

  useEffect(async()=>{
    const alamat = await fetchRead("/api/alamat")
    setLocation(alamat.abc)
    // console.log(alamat)

  },[])  
  return (
    <div className=' relative z-20 w-full mx-auto bg-gray-50 flex items-center justify-center'>
        <Spinner />
        <table className="table-auto w-full space-x-2 max-w-2xl">
                <thead >
                  <tr>
                    <th>Alamat</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                  
                <tbody>
            {location?.map((l,i)=>(
           
                  <tr key={l._id}>
                    <td>{l.alamat}</td>
                    <td>
                        <button onClick={(e)=>editData(e, l)}>Edit</button></td>
                    <td>
                        <button onClick={(e)=>deleteData(e, l._id)}>Delete</button></td>
                  </tr>
                  
                
             

            ))}
               </tbody>
         </table>
    

    </div>
  )
}

export default TableLocation