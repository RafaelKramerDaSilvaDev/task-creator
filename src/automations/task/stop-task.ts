import { login } from "../login";

export const stopTask = async () => {
  const { page } = await login();
};
