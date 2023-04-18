
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FormLocation from '../components/FormLocation';
import { useContext } from 'react';
import { Store } from '../components/contex/myContext';


function location() {

  const { showForm, lastRM, users, setUsers, dataM, setShowSpinner, showLocation, setShowLocation} = useContext(Store);
  const addLocation = async (e)=>{
      e.preventDefault()
      console.log("ok")
      setShowLocation(!showLocation)
    }


  return (
    <div className='flex items-center justify-center'>
        <div onClick={(e)=>addLocation(e)}  
                      className="flex items-center justify-center cursor-pointer space-x-2 ">
                      <p className=' hidden sm:inline-flex' >Location</p>
                      < AddLocationAltIcon/>
        </div>
        {showLocation? <div>
        <FormLocation/>
        </div>:<div></div>}
       
    </div>
  )
}

export default location