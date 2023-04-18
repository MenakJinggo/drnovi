import { createContext, useEffect, useState } from 'react';

export const Store = createContext();

export function StoreProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [lastRM, setLastRM] = useState();
  const [userEdit, setUserEdit] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showLocation, setShowLocation]= useState(false);

  const [showSearchOK, setShowSearchOK] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [dataM, setDataM] = useState({_id:"", rm:"", nama:"",namakk:"", alamat:"",rt:"",rw:""})
  const [alamat, setAlamat] = useState("")
 
const addUsers = (newUser) => {
  setUsers(newUser);
};

const readUsers = () => {
   return users
};

const updateUsers = (id, x) => {
  const editUsers = users.filter(user => {
    return user._id !== x._id})
  setUsers([...editUsers, x])

};

const removeUsers = (id)=>{
  const userLists = users.filter((user) => user._id !== id );
  setUsers( userLists)
}

const resetUsers = ()=>{

  setUsers([])
}



  return (
    <Store.Provider value={{
      lastRM,
      setLastRM,
      users,
      setUsers,
      addUsers,
      readUsers,
      resetUsers,
      removeUsers,
      updateUsers,
      showSpinner,
      setShowSpinner,
      showForm,
      setShowForm,
      userEdit, 
      setUserEdit,
      showAddForm, 
      setShowAddForm,
      showSearchOK, setShowSearchOK,
      dataM, setDataM,
      showLocation, setShowLocation,
      alamat, setAlamat
  
    }}>
  
   {children}
   
   </Store.Provider>
  )
  
  
}