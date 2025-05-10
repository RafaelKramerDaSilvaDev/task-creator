import { taskNumberQuestion } from "../../questions/task-number-question";
import { login } from "../login";

export const startTask = async () => {
  const { taskNumber } = await taskNumberQuestion();

  const { page } = await login();
};
