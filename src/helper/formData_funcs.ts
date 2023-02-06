export const toFormData = <T extends Object>(arg: T): FormData => {
  const formData = new FormData();
  Object.entries(arg).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    }
    if (value instanceof File) {
      formData.append(key, value, value.name);
    }
    if (typeof value === "string") {
      formData.append(key, value);
    }
  });
  return formData;
};

export const toObject = (arg: FormData) => {
  const newObj = Object.fromEntries(arg);

  Object.entries(newObj).forEach(([key, value]: [string, string | File]) => {
    if (value instanceof File) {
      console.log(value);
    }
    if (typeof value === "string") {
      if (value.includes("[{") && Array.isArray(JSON.parse(value as string))) {
        newObj[key] = JSON.parse(value as string);
      } else {
        newObj[key] = value;
      }
    }
  });

  return newObj;
};

// export const toObject = (arg: FormData) => {
//   const newObj = Object.fromEntries(arg);

//   Object.entries(newObj).forEach(([key, value]: [string, string | File]) => {
//     if (typeof value === "string") {
//       if (value.includes("[{") && Array.isArray(JSON.parse(value as string))) {
//         newObj[key] = JSON.parse(value as string);
//       } else {
//         newObj[key] = value;
//       }
//     }
//   });

//   return newObj;
// };
