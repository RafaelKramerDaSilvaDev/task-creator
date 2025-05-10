import { selectDeveloperQuestion } from "../../questions/select-developer-question";
import { taskNameQuestion } from "../../questions/task-name-question";
import { login } from "../login";

export const createTask = async () => {
  const { taskName } = await taskNameQuestion();
  const { selectedDeveloper } = await selectDeveloperQuestion();

  const { page } = await login();
};
