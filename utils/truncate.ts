const truncate = (
  sentence: string,
  minLength: number = 150,
  mark: string = '\u2026'
) => {
  const length = sentence.length;
  const markOffset = mark.length;

  if (length > minLength) {
    const start = sentence.substring(0, minLength - markOffset);
    return `${start} ${mark}`;
  }

  return sentence;
};

export default truncate;
