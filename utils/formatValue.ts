const formatValue = (value: number): string => {
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export default formatValue;
