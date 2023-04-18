// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Alamat from '../../lib/Alamat'
import db from '../../lib/db';
import alamat from '../../alamatQ'

export default async function handler(req, res) {
  await db.connect()
  const abc = await Alamat.find()
  console.log(abc)
  res.status(200).json("hello")
  
}
