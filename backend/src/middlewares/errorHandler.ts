import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  next: NextFunction
): Response => {
  return res.status(500).json({ ok: false, error: error.message });
};

export default errorHandler;
