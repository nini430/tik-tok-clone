import { getAllPosts } from '@/utils/queries';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const query = getAllPosts();
    const data = await client.fetch(query);
    return res.status(200).json(data);
  }else if(req.method==='POST') {
    const document=req.body;
client.create(document).then(()=>res.status(201).json({message:'Succesfully posted!'}))
  }
}
