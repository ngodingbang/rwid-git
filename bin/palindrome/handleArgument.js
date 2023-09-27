import { destructureArgument, validateArgument } from "../shared/utils.js";

export const handleArgument = cliArguments => {
  let type = "";
  let method = "";
  let word = "";

  for (let argument of cliArguments) {
    if (!validateArgument(argument)) {
      throw new Error(`invalid argument ${argument}`);
    }

    const [key, value] = destructureArgument(argument);

    switch (key) {
      case "--type":
        type = value;
        break;
      case "--method":
        method = value;
        break;
      case "--word":
        word = value;
        break;
      default:
        throw new Error(`invalid argument ${argument}`);
    }
  }

  return { type, method, word };
};
