'use strict';

module.exports = {
  /**
   * 过滤object中为空的key
   *
   * @param {Object} data - 需要被过滤的对象
   * @param {Booble} isFilterEmptyString - 是否严格比对。如果为false，不过滤空字符串
   * @return {Object} 过滤后的结果
   */
  filterObjectEmptyValue(data, isFilterEmptyString = true) {
    const newData = {};

    for (const key in data) {
      const value = data[key];

      if (isFilterEmptyString) {
        if (value !== '' && value !== undefined && value !== null) {
          newData[key] = value;
        }
      } else {
        if (value !== undefined && value !== null) {
          newData[key] = value;
        }
      }
    }

    return newData;
  },

  errorCode: {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '没有提供认证信息',
    403: '当前用户无此操作权限',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '表单校验错误',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',

    601: '数据库入库时，触发事务回滚',
  },
};
