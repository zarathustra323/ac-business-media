import extractRangeValue from './extract-range-value';

/**
 * Parses a value into a float. Accepts string ranges (e.g. 4 - 10).
 *
 * @param {object} params
 * @param {string} params.value
 * @param {string} [extremum] One of `min` (default) or `max`.
 * @return {number|null}
 */
export default ({ value, extremum = 'min' } = {}) => {
  if (!value) return null;
  const v = extractRangeValue({ value, extremum });
  if (!v) return null;
  // remove commas then parse.
  const parsed = parseFloat(`${v}`.replace(/,/g, ''));
  return Number.isNaN(parsed) ? null : parsed;
};
