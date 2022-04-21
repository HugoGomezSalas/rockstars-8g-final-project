import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY || "";

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => validateRequestImplementation(req, res, next, "admin");

export const validateCustomer = (
  req: Request,
  res: Response,
  next: NextFunction
) => validateRequestImplementation(req, res, next, "customer");

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => validateRequestImplementation(req, res, next);

export const validateRequestImplementation = (
  req: Request,
  res: Response,
  next: NextFunction,
  rol?: "customer" | "admin"
) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  if (!token) {
    res.status(401);
    res.send({
      error: "unauthorized",
    });
  } else {
    jwt.verify(token, SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401);
        res.send({
          error: "unauthorized",
        });
      } else {
        if (decode && typeof decode !== "string") {
          if (rol && rol !== decode.rol) {
            res.status(403);
            res.send({
              error: "forbidden",
            });
          } else {
            req.body.decode = decode;
            next();
          }
        }
      }
    });
  }
};
