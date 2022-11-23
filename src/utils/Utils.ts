export const CommonUtil = {
  IsArrayAndNotEmpty(arr: any) {
    return arr && arr.length && arr.length > 0;
  },
  isUndefinedOrNull(val: any) {
    return typeof val === "undefined" || val === null;
  },
};

export const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function debounce<Params extends any[]>(
  f: (...args: Params) => any,
  delay: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...args);
    }, delay);
  };
}
