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

function formatDate(date) {
  let dateArr;

  if (date.length > 10) {
    dateArr = date.slice(0, 10).replace(/-/g, ".").split(".");
  } else {
    dateArr = date.split(".").reverse();
  }

  dateArr[1] = dateArr[1] - 1;

  return new Date(...dateArr);
}

function formatDataForChart(bodyCompositionData) {
  let chartDateEntries = [];
  let chartBfEntries = [];

  bodyCompositionData.forEach((entry) => {
    chartDateEntries.push(formatDate(entry.date));
    chartBfEntries.push(entry.bodyFatPercentage);
  });

  return {
    chartDateEntries,
    chartBfEntries,
  };
}

export { transformData, formatDataForChart };
