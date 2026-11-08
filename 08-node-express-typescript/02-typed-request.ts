import type { Request, Response } from "express";

type CreateUserBody = { name: string; email: string };
export function createUser(
  req: Request<Record<string, never>, unknown, CreateUserBody>,
  res: Response
): void {
  res.status(201).json({ message: "User created", name: req.body.name });
}
