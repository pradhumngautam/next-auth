import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  // const user = await

  // if (!user) {
  //   res.status(400);
  // }

  // res.status(200).json(user);
};

export { getUser };