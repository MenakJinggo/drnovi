import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import alamat from "../alamatQ"

function SearchInput({getAlamat, alamatQ}) {
  console.log(alamatQ)
     const [query, setQuery] = useState("")
     const [desa, setDesa] = useState("")
     const getDesa = (e, user)=>{
        e.preventDefault()
        setQuery(user)
        getAlamat(user)
      
     }

let x = []
for(let i = 0; i< alamat.length; i++){
      // console.log(alamat[i])
      const abj = {alamat:alamat[i]}
      x.push((abj))
  }

console.log(x)  



useEffect(()=>setQuery(alamatQ),[alamatQ])
  return (
    
   <div className="">
     <input
        className="w-100 z-20 text-sm text-gray-900   bg-gray-50 h-7 px-2 border-2"
        placeholder="Search Alamat"
        value={query || ""}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list overflow-auto">
        {alamat.filter((asd) =>
          asd.toLowerCase().includes(query)
        ).map((user, index) => (
         <li className="mb-2 flex-none bg-gray-200 " key={index}>
            {query == ""?"":
            <butto className="cursor-pointer"  onClick ={(e)=>getDesa(e, user)}>{user}</butto>}
          </li>
         
        ))}
      </ul>
    </div>
  )
}

export default SearchInput