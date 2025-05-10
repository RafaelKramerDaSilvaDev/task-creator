import { login } from "../login";

export const startTask = async () => {
  const { page } = await login();
};
