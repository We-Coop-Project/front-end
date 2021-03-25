export const ValidateEmailFormat = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const ValidateRequiredInput = (...args) => {
  let isBlank = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "") {
      isBlank = true;
    }
  }
  return isBlank;
};
