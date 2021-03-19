export const ValidateEmailFormat = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

// export const ValidateRequiredInput = (...args) => {
//   let isBlank = false;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i].length >= 0) {
//       isBlank = true;
//     }
//   }
//   return isBlank;
// };
