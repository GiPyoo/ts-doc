export const getJoin = <T>(value: T[]): T => {
  return value.reduce((pre, acc) => {
    if (
      (typeof pre == "string" && typeof acc == "string") ||
      (typeof pre == "number" && typeof acc == "number")
    ) {
      return pre + acc;
    }
  });
};
