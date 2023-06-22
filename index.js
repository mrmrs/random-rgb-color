'use strict';

/**
 * Generate a random RGB color.
 *
 * @param {number} minRed - The minimum value for the red channel (range: 0 to 255 or 0% to 100%).
 * @param {number} maxRed - The maximum value for the red channel (range: 0 to 255 or 0% to 100%).
 * @param {number} minGreen - The minimum value for the green channel (range: 0 to 255 or 0% to 100%).
 * @param {number} maxGreen - The maximum value for the green channel (range: 0 to 255 or 0% to 100%).
 * @param {number} minBlue - The minimum value for the blue channel (range: 0 to 255 or 0% to 100%).
 * @param {number} maxBlue - The maximum value for the blue channel (range: 0 to 255 or 0% to 100%).
 * @param {number} minAlpha - The minimum value for the alpha channel (range: 0 to 1 or 0% to 100%).
 * @param {number} maxAlpha - The maximum value for the alpha channel (range: 0 to 1 or 0% to 100%).
 * @param {boolean} useObjectExport - Whether to export the color as an object.
 * @returns {string|Object} The generated random RGB color.
 */
module.exports = function randomRGBColor(
  minRed = 0,
  maxRed = 255,
  minGreen = 0,
  maxGreen = 255,
  minBlue = 0,
  maxBlue = 255,
  minAlpha = 0,
  maxAlpha = 1,
  useObjectExport = false
) {
  const randomValue = (min, max) => {
    if (max <= 1) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  const formatPercentage = (value) => {
    if (value === 0) return '0%';
    return value.toFixed(0) + '%';
  };

  const red = randomValue(minRed, maxRed);
  const green = randomValue(minGreen, maxGreen);
  const blue = randomValue(minBlue, maxBlue);
  const alpha = formatPercentage(randomValue(minAlpha, maxAlpha) * 100);

  if (useObjectExport) {
    return { red, green, blue, alpha };
  }

  return `rgb(${red} ${green} ${blue}${alpha ? ` / ${alpha}` : ''})`;
};
