import { Request, Response } from "express";

import { generateToken, clearToken } from "../utils/auth";

const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  console.log(req.body);
};

const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log(req.body);
};

const logoutUser = (req: Request, res: Response) => {
  clearToken(res);

  res.status(200).json({ message: "User logged out" });
};

export { registerUser, authenticateUser, logoutUser };
