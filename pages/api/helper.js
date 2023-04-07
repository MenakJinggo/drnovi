// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Customers from '../../lib/Customers'
import db from '../../lib/db';

export default async function handler(req, res) {
  await db.connect()

  const lastRM = await Customers.find().sort({"rm":-1}).limit(1)
  // const lastInput = await Customers.find().sort({_id:1}).limit(4)

  console.log("ok yes", lastRM)
  // console.log("ok yes", lastInput)
  res.status(200).json({ lastRM: lastRM })
}
