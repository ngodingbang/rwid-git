export const destructureArgument = argument => argument.split("=");

export const validateArgument = argument => /^--\w+=\w+$/.test(argument);
