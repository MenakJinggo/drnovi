import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;
import Alamat from '../../../lib/Alamat'
import db from '../../../lib/db';
import mongoose from "mongoose";
import { _id } from "@next-auth/mongodb-adapter";

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'PUT') {
    return putHandler(req, res);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {

  const {id} = req.query
  let myId = id[0]
  console.log(myId)
  
  try {
   await db.connect()
   const res2 = await Alamat.findById(mongoose.Types.ObjectId(myId)) 
   return res.json({
     message: 'Alamat Edited Successfully',
     success: true,
     respond1 : res2
 })
   
 }
   catch (error) {
     return res.json({
         message: new Error(error).message,
         success: false,
     });
 }
};

const putHandler = async (req, res) => {

const {id} = req.query
let myId = id[0].toString().trim()
console.log(req.body.alamat)

console.log(myId)
await db.connect();

const alamat = await Alamat.findByIdAndUpdate(myId, {
    alamat : req.body.alamat,
    
  },{
    new:true
  });

const alamat2 = JSON.stringify(alamat)
 res.status(200).send({ message: 'Alamat updated successfully', myData:alamat2})
 
};

const deleteHandler = async (req, res) => {
  const myId = req.query.id[0].toString()
  console.log(myId)
  await db.connect();
  const res2 = await Alamat.findOneAndDelete({_id:myId})
  res.send({ message: 'Product deleted successfully' });
 
};
export default handler;