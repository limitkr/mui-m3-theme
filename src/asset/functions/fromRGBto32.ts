export function fromRGBto32(rgbArr: number[]) {
  return `0xff${rgbArr.reduce((s, v) => {
    return s + `0${v.toString(16)}`.slice(-2);
  }, '')}`;
}
