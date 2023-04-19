
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FormLocationEdit from '../components/FormLocationEdit';
import { useContext } from 'react';
import { Store } from '../components/contex/myContext';
import TableLocation from '../components/TableLocation';
import FormLocation from '../components/FormLocation';
import { useRouter } from 'next/router';


function location() {

  const { showForm, lastRM, users, setUsers, dataM, setShowSpinner, showLocation, setShowLocation,alamat, setAlamat,Id} = useContext(Store);
  const addLocation = async (e)=>{
      e.preventDefault()
      console.log("ok")
      setShowLocation(!showLocation)
      setAlamat("")
    }

    const router = useRouter()

  return (
    <div className='flex flex-col items-center bg-green-500'>
      <div className='flex items-center justify-left w-1/3 space-x-60'>
        
      <div className='' onClick={()=>router.push("/")}>
          Home
        </div>
      <div onClick={(e)=>addLocation(e)}  
                      className="flex items-center justify-center cursor-pointer space-x-2 h-20">
                      <p className=' hidden sm:inline-flex' >Location</p>
                      < AddLocationAltIcon/>
                      
        </div>

      </div>
       
        <div className='w-full relative'>
          <div className='bg-red-500 absolute top-4 left-1/2 right-1/2 z-50'>
          {Id&&<FormLocationEdit/>}
          {showLocation&&<FormLocation/>}
          </div>
        
          <div>
            <TableLocation/>
          </div>
        </div>
    </div>
  )
}

export default location