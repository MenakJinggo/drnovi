import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import alamat from "../alamatQ"
import { Store } from "./contex/myContext"
import { fetchRead } from './CrudFunction';

function SearchInput({getAlamat, alamatQ}) {
  const { users, setUsers, removeUsers, showForm, setShowForm, Id, setId, showSpinner, setShowSpinner, setUserEdit, location, setLocation, showLocation, setShowLocation, setAlamat } = useContext(Store);
 
     const [query, setQuery] = useState("")
     const [desa, setDesa] = useState("")
     const getDesa = (e, user)=>{
        e.preventDefault()
        setQuery(user)
        getAlamat(user)
      
     }
console.log(location)
// let x = []
// for(let i = 0; i< alamat.length; i++){
//       // console.log(alamat[i])
//       const abj = {alamat:alamat[i]}
//       x.push((abj))
//   }

// console.log(x)  


useEffect(async()=>{
  const alamat = await fetchRead("/api/alamat")
  setLocation(alamat.abc)
  // console.log(alamat)
  setQuery(alamatQ),[alamatQ]

},[])
// useEffect(()=>setQuery(alamatQ),[alamatQ])

  return (
    
   <div className="">
     <input
        className="w-100 z-20 text-sm text-gray-900   bg-gray-50 h-7 px-2 border-2"
        placeholder="Search Alamat"
        value={query || ""}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list overflow-auto">
        {location.filter((asd) =>
          asd.alamat.toLowerCase().includes(query)
        ).map((user, index) => (
         <li className="mb-2 flex-none bg-gray-200 " key={index}>
            {query == ""?"":
            <butto className="cursor-pointer"  onClick ={(e)=>getDesa(e, user.alamat)}>{user.alamat}</butto>}
          </li>
         
        ))}
      </ul>
    </div>
  )
}

export default SearchInput