
import {Types} from "mongoose"
import Alamat from "../../lib/Alamat";
import db from '../../lib/db';


export default function handler(req, res) {
 
  if (req.method === 'GET') {

    return getHandler(req, res);
  }

   if (req.method === 'POST') {
    return postHandler(req, res);
  }

  res.status(200).json({ name: 'John Doe' })
}


const getHandler = async (req, res) => {

await db.connect()

 try {
  await db.connect()
  const abc = await Alamat.find()
  console.log(abc)

  return res.json({
    message: 'Post added successfully',
    abc:abc,
    success: true })
}

catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    })}
};


const postHandler = async (req, res) => {
  await db.connect()
  
  console.log(req.body.alamat)
  const newAlamat = new Alamat({
      _id:new Types.ObjectId(),
      alamat:req.body.alamat
    });

  const alamat = await newAlamat.save();
  const newAlamat1 = JSON.stringify("Hello World")

  await db.disconnect();
  res.send({ message: 'Alamat created successfully', newAlamat1:newAlamat1});
}



// export default handler;

