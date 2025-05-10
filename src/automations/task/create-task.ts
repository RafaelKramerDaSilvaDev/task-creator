import { login } from "../login";

export const createTask = async () => {
  const { page } = await login();
};
