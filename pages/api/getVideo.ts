import type { NextApiRequest, NextApiResponse } from 'next'
import { contentfulAuth } from './contentful';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await contentfulAuth();
  try {
    const video = await client.getAsset('5wZuRU3hRNL2PPzaH6NB70');
    res.status(200).send(video);
  } catch (error) {
    res.status(400).send(error);
  }
}