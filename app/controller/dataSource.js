'use strict';
const Controller = require('./../core/baseController');

class DataSourceController extends Controller {

  // 柱形图数据
  async column() {

    this.success({
      list: [
        { year: '1951 年', value: 380, valueArray: [ 380 - 30, 380 ], name: '收入' },
        { year: '1952 年', value: 520, valueArray: [ 520 - 30, 520 ], name: '收入' },
        { year: '1956 年', value: 610, valueArray: [ 610 - 30, 610 ], name: '收入' },
        { year: '1957 年', value: 1450, valueArray: [ 1450 - 30, 1450 ], name: '收入' },
        { year: '1958 年', value: 480, valueArray: [ 480 - 30, 480 ], name: '收入' },
        { year: '1951 年', value: 38, valueArray: [ 38 - 30, 38 ], name: '支出' },
        { year: '1952 年', value: 52, valueArray: [ 52 - 30, 52 ], name: '支出' },
        { year: '1956 年', value: 61, valueArray: [ 61 - 30, 61 ], name: '支出' },
        { year: '1957 年', value: 145, valueArray: [ 145 - 30, 145 ], name: '支出' },
        { year: '1958 年', value: 48, valueArray: [ 48 - 30, 48 ], name: '支出' },
      ],
    });
  }

  // 折线图数据
  async line() {

    this.success({
      list: [
        { year: '1951 年', value: 380, valueArray: [ 380 - 30, 380 ], name: '收入' },
        { year: '1952 年', value: 520, valueArray: [ 520 - 30, 520 ], name: '收入' },
        { year: '1956 年', value: 610, valueArray: [ 610 - 30, 610 ], name: '收入' },
        { year: '1957 年', value: 1450, valueArray: [ 1450 - 30, 1450 ], name: '收入' },
        { year: '1958 年', value: 480, valueArray: [ 480 - 30, 480 ], name: '收入' },
        { year: '1951 年', value: 38, valueArray: [ 38 - 30, 38 ], name: '支出' },
        { year: '1952 年', value: 52, valueArray: [ 52 - 30, 52 ], name: '支出' },
        { year: '1956 年', value: 61, valueArray: [ 61 - 30, 61 ], name: '支出' },
        { year: '1957 年', value: 145, valueArray: [ 145 - 30, 145 ], name: '支出' },
        { year: '1958 年', value: 48, valueArray: [ 48 - 30, 48 ], name: '支出' },
      ],
    });
  }

  // 条形图数据
  async bar() {

    this.success({
      list: [
        { year: '1951 年', value: 380, valueArray: [ 380 - 30, 380 ], name: '收入' },
        { year: '1952 年', value: 520, valueArray: [ 520 - 30, 520 ], name: '收入' },
        { year: '1956 年', value: 610, valueArray: [ 610 - 30, 610 ], name: '收入' },
        { year: '1957 年', value: 1450, valueArray: [ 1450 - 30, 1450 ], name: '收入' },
        { year: '1958 年', value: 480, valueArray: [ 480 - 30, 480 ], name: '收入' },
        { year: '1951 年', value: 38, valueArray: [ 38 - 30, 38 ], name: '支出' },
        { year: '1952 年', value: 52, valueArray: [ 52 - 30, 52 ], name: '支出' },
        { year: '1956 年', value: 61, valueArray: [ 61 - 30, 61 ], name: '支出' },
        { year: '1957 年', value: 145, valueArray: [ 145 - 30, 145 ], name: '支出' },
        { year: '1958 年', value: 48, valueArray: [ 48 - 30, 48 ], name: '支出' },
      ],
    });
  }

  // 饼状图数据
  async pie() {

    this.success({
      list: [
        { year: '1951 年', value: 380, valueArray: [ 380 - 30, 380 ], name: '收入' },
        { year: '1952 年', value: 520, valueArray: [ 520 - 30, 520 ], name: '收入' },
        { year: '1956 年', value: 610, valueArray: [ 610 - 30, 610 ], name: '收入' },
        { year: '1957 年', value: 1450, valueArray: [ 1450 - 30, 1450 ], name: '收入' },
        { year: '1958 年', value: 480, valueArray: [ 480 - 30, 480 ], name: '收入' },
        { year: '1951 年', value: 38, valueArray: [ 38 - 30, 38 ], name: '支出' },
        { year: '1952 年', value: 52, valueArray: [ 52 - 30, 52 ], name: '支出' },
        { year: '1956 年', value: 61, valueArray: [ 61 - 30, 61 ], name: '支出' },
        { year: '1957 年', value: 145, valueArray: [ 145 - 30, 145 ], name: '支出' },
        { year: '1958 年', value: 48, valueArray: [ 48 - 30, 48 ], name: '支出' },
      ],
    });
  }
}

module.exports = DataSourceController;
