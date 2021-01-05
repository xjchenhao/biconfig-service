'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // 名称
  graphList: [{ type: Object, required: true, default: {} }], // 图形列表

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

  return conn.model('page', schema);
};

