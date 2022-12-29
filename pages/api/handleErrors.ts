import { NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

abstract class ErrorWithDetails extends Error {
  constructor(message?: string, public details?: any) { super(message); }
}

class ForbiddenError extends ErrorWithDetails { }
class NotFoundError extends ErrorWithDetails { }
class UnauthorizedError extends ErrorWithDetails { }

export const handleError = (res: NextApiResponse, err: unknown) => {
  if (err instanceof ForbiddenError) {
    res.status(StatusCodes.FORBIDDEN).json({ message: err.message });
    return;
  }
  if (err instanceof NotFoundError) {
    res
      .status(StatusCodes.NOT_FOUND)
      .send(err.message ? { message: err.message, details: err.details } : null);

    return;
  }

  if (err instanceof UnauthorizedError) {
    res.send(StatusCodes.UNAUTHORIZED);
    return;
  }
  res.send(StatusCodes.INTERNAL_SERVER_ERROR);
  return;
}