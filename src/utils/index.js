const parseThousands = (value) => {
  if (value >= 1000) {
    const roundedValue = Math.round(value / 100) / 10; // Redondeamos a un decimal
    return `${roundedValue}k`;
  }
  return String(value);
};

export default parseThousands;
