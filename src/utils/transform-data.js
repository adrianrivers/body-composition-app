import {
  getBodyFatPercentage,
  getFatMass,
  getLeanMass,
} from "./calculations.js";

function getBodyCompositionFromMeasurements(height, measurements) {
  let bodyComposition = [];

  measurements.forEach((entry) => {
    const { date, weight, neck, waist } = entry;
    const bodyFatPercentage = getBodyFatPercentage(height, neck, waist);
    const fatMass = getFatMass(bodyFatPercentage, weight);
    const leanMass = getLeanMass(fatMass, weight);

    bodyComposition.push({
      date: date,
      bodyFatPercentage,
      fatMass,
      leanMass,
      weight,
    });
  });

  return bodyComposition;
}

function transformData(data) {
  const [{ height, measurements }] = data;

  return getBodyCompositionFromMeasurements(height, measurements);
}

export { transformData };
