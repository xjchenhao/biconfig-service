'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    security: {
      csrf: {
        enable: false,
      },
    },

    mongoose: {
      clients: {
        app: {
          url: 'mongodb://127.0.0.1:27017/biconfig',
          options: {},
        },
      },
    },
  };

  // add your user config here
  const userConfig = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550823333689_6157';


  return {
    ...config,
    ...userConfig,
  };
};
