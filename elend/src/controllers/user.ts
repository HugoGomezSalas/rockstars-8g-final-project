import {
  LoginDTO,
  LoginEmailDTO,
  LoginUsernameDTO,
  UserModel,
} from "../models/user";

export const login = async ({ password, email, userName }: LoginDTO) => {
  if (!password) return;

  if (email) {
    return await loginEmail({ email, password });
  } else if (userName) {
    return await loginUserName({ userName, password });
  }

  return;
};

const loginEmail = async ({ email, password }: LoginEmailDTO) => {
  const user = await UserModel.findOne({ email });

  if (!user || user.password !== password) return;

  return user;
};

const loginUserName = async ({ userName, password }: LoginUsernameDTO) => {
  const user = await UserModel.findOne({ userName });

  if (!user || user.password !== password) return;

  return user;
};
