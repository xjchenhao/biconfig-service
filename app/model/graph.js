'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // 名称
  uri: { type: String, required: true, unique: true }, // 标识
  type: { type: String, enum: [ 'Column', 'Bar', 'Line', 'Pie' ], required: true }, // 类型
  apiUrl: { type: String, required: true }, // api地址
  attr: { type: Object, required: true, default: {} }, // 具体配置
  titleShowType: { type: Number, default: 0, min: 0, max: 1 }, // 标题显示方式，0不显示，1显示名称
  timeFilterShowType: { type: Number, default: 0, min: 0, max: 1 }, // 时间筛选组件显示方式，0不显示，1显示

  createTime: {
    type: Date,
    default: Date.now,
    get(time) {
      return new Date(time).valueOf();
    },
  },

  updateTime: {
    type: Date,
    default: Date.now,
    get(time) {
      return new Date(time).valueOf();
    },
  },
},
{
  usePushEach: true,
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
  toJSON: { virtuals: true, getters: true },
});

schema.index({ createTime: -1 });

module.exports = app => {

  const conn = app.mongooseDB.get('app');

  return conn.model('graph', schema);
};

