import {
  getBodyFatPercentage,
  getFatMass,
  getLeanMass,
} from "./calculations.js";

function getBodyCompositionFromMeasurements(
  height,
  measurements,
  legacyMeasurments
) {
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

  return [...bodyComposition, ...legacyMeasurments];
}

function transformData(data, legacyData) {
  const [{ height, measurements }] = data;
  const [{ measurements: legacyMeasurments }] = legacyData;

  const bodyComposition = getBodyCompositionFromMeasurements(
    height,
    measurements,
    legacyMeasurments
  );

  return bodyComposition;
}

export { transformData };
