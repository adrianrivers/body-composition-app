const getBodyFatPercentage = (height, neck, waist) =>
  Math.floor(
    86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 30.3
  );

const getFatMass = (bodyFat, weight) => Math.floor((weight / 100) * bodyFat);

const getLeanMass = (fatMass, weight) => weight - fatMass;

export { getBodyFatPercentage, getFatMass, getLeanMass };
