/**
 * Extracts a single value from a value range string.
 * Does not convert the single value to a Number.
 *
 * @param {object} params
 * @param {string} params.value
 * @param {string} [extremum] One of `min` (default) or `max`.
 * @return {string|null}
 */
export default ({ value, extremum = 'min' } = {}) => {
  if (!value) return null;
  if (!/-/.test(value)) return value;
  const parts = value.split('-').map(v => v.trim()).filter(v => v);
  if (!parts.length) return null;
  if (parts.length === 1) return parts[0];
  const index = extremum === 'min' ? 0 : 1;
  return parts[index];
};
