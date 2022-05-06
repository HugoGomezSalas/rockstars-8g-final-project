import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { tokenSelector } from "../features/authSlice";

export interface JWTPayload {
  email: string;
  exp: number;
  iat: number;
  rol: string;
  _id: string;
}

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [payload, setPayload] = useState<JWTPayload | undefined>();

  const token = useAppSelector(tokenSelector);

  useEffect(() => {
    if (token !== undefined) {
      const payloadParsed: JWTPayload = JSON.parse(
        window.atob(token.split(".")[1])
      );
      setPayload(payloadParsed);
    } else {
      setPayload(undefined);
    }
  }, [token]);

  useEffect(() => {
    if (payload) {
      setIsAdmin(payload.rol === "admin");
    } else {
      setIsAdmin(false);
    }
  }, [payload]);

  return {
    isAdmin,
    payload,
  };
};
