import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { contentfulClient } from '../contentful';
import { handleError } from '../handleErrors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(JSON.stringify(req.query))
  try {
    const data = await contentfulClient.getEntry(id as string);
    console.log(data);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    handleError(res, error);
  }
}