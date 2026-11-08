import type { Request, Response } from "express";

type User = { id: string; name: string };
export function getUser(_req: Request, res: Response): void {
  const user: User = { id: "u1", name: "Rajesh" };
  res.status(200).json({ success: true, data: user });
}
