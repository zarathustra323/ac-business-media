const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');
const { asObject } = require('@base-cms/utils');

module.exports = ({
  uri = 'https://acbm.native-x.io',
  enabled = true,
  placements,
} = {}) => {
  const aliases = Object.keys(asObject(placements));
  const config = new NativeXConfiguration(uri, {
    enabled: aliases.length ? enabled : false,
  });
  aliases.forEach((alias) => {
    const id = placements[alias];
    config.setAliasPlacements(alias, [
      { name: 'default', id },
    ]);
  });
  return config;
};
