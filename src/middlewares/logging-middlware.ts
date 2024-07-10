import express, { Request, Response, NextFunction } from "express";

const app = express();

const logRequestMethod = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method);
  next();
};
const logHostname = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.hostname);
  next();
};
