import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const message = err.message ? err.message : "something went wrong";
  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    error: err,
  });
};

export default errorHandler;
