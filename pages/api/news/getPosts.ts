import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { contentfulClient } from '../contentful';
import { handleError } from '../handleErrors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await contentfulClient.getEntries({
    content_type: 'blogPost',
  });
  try {
    res.status(StatusCodes.OK).json(data);
  } catch (error: unknown) {
    handleError(res, error);
  }
}