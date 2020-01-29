module.exports = ({ baseConfig }) => {
  baseConfig.module.rules.push({ parser: { amd: false } });
  return baseConfig;
};
