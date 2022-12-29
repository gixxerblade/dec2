import { StatusCodes } from 'http-status-codes';
import Jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next'
import { handleError } from './handleErrors';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const accessURL = 'https://secure.meetup.com/oauth2/access';
  const eventsURL = 'https://api.meetup.com/gql';
  const meetupKey = process.env.MEETUP_KEY as string;
  const privateKey = Buffer.from(meetupKey, 'base64').toString('utf-8');
  const requestBody = {
    query: `{
      groupByUrlname(urlname: "Down-East-Cyclists") {
        unifiedUpcomingEvents {
          count
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              id
              eventType
              shortUrl
              imageUrl
              title
              eventUrl
              description
              dateTime
            }
          }
        }
      }
    }`
  }
  const signedJwt = Jwt.sign(
    {},
    privateKey,
    {
      algorithm: 'RS256',
      issuer: process.env.MEETUP_CONSUMER_KEY,
      subject: '62103302',
      audience: 'api.meetup.com',
      keyid: process.env.MEETUP_SIGNING_KEY,
      expiresIn: 120
    }
  )
  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: signedJwt,
  })
    try {
      const jwtResponse = await fetch(accessURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const { access_token } = await jwtResponse.json();
      const events = await fetch(eventsURL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody),
      })
      const { data } = await events.json();
      res.status(StatusCodes.OK).send(data);
    } catch (error) {
      handleError(res, error);
    }
}