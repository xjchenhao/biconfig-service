'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true }, // 名称
  type: { type: String, enum: [ 'Bar' ], required: true }, // 类型
  apiUrl: { type: String, required: true }, // api地址
  attr: { type: Object, required: true, default: {} }, // 具体配置
  titleShowType: { type: Number, default: 0, min: 0, max: 1 }, // 标题显示方式，0不显示，1显示名称

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

