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

    logger: {
      level: 'ERROR',
      consoleLevel: 'ERROR',
      disableConsoleAfterReady: false,
    },

    mongoose: {
      clients: {
        app: {
          url: 'mongodb://127.0.0.1:27017/biconfig',
          options: {
            useFindAndModify: false, // 修复弃用警告。参考链接：https://mongoosejs.com/docs/deprecations.html#-findandmodify-
          },
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
