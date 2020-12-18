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

  async test() {
    this.success({
      list: [
        { sectionName: '办公室', value: 42, sectionId: '8f381852-fd0a-4d98-8777-799422e0b3c2', name: '按时办结' },
        { sectionName: '科技处', value: 637, sectionId: '9e6c55aa-7dd5-4463-83f4-7263844489c8', name: '按时办结' },
        { sectionName: '风险防控分局', value: 0, sectionId: 'a58a1f1c-623f-4214-9f80-5b004a438403', name: '按时办结' },
        { sectionName: '缉私局', value: 0, sectionId: 'ee9dc5f0-9fd0-4179-b799-f134f8406e91', name: '按时办结' },
        { sectionName: '培训中心', value: 0, sectionId: 'c5772da9-e162-bdee-4a8c-a1852d6aa09e', name: '按时办结' },
        { sectionName: '数据分中心', value: 0, sectionId: '7d3b0df1-5817-4390-a71d-80935810b2a7', name: '按时办结' },
        { sectionName: '统计分析处', value: 0, sectionId: 'a3d65e5d-9ff8-4261-8c13-8ae83fdc5888', name: '按时办结' },
        { sectionName: '口岸监管处', value: 0, sectionId: 'e45f18c0-9e6b-45e9-bf4c-533e14035e09', name: '按时办结' },
        { sectionName: '稽查处', value: 0, sectionId: '31d5a661-c063-40fd-b2ce-1ed79b798c42', name: '按时办结' },
        { sectionName: '关税处', value: 0, sectionId: 'b650ba39-e4cb-4e1b-b3a7-feb364ed70bf', name: '按时办结' },
        { sectionName: '卫生检疫处', value: 0, sectionId: '5ff539af-0632-4d34-ae6f-53e4df20321c', name: '按时办结' },
        { sectionName: '督察内审处', value: 0, sectionId: '38383f81-5e44-439d-929b-3f0a8a4d59f1', name: '按时办结' },
        { sectionName: '后勤管理中心', value: 0, sectionId: 'af70397a-2953-4550-9867-f6de912d27f7', name: '按时办结' },
        { sectionName: '保健中心', value: 0, sectionId: '1b1a23d7-ee23-9beb-498d-032906ad6452', name: '按时办结' },
        { sectionName: '法规处', value: 0, sectionId: '50e85b00-dac7-408f-a6d6-a39458f229a1', name: '按时办结' },
        { sectionName: '人事处', value: 0, sectionId: 'c6d54efc-0658-4b09-b84e-62dac1df0fff', name: '按时办结' },
        { sectionName: '机关党委', value: 0, sectionId: 'e897d63b-b060-487b-bf5e-86b396bf7704', name: '按时办结' },
        { sectionName: '教育处', value: 0, sectionId: '8ace6d9f-6c46-4bea-b4f2-b400fcb330ce', name: '按时办结' },
        { sectionName: '进出口食品安全处', value: 0, sectionId: 'f5729525-1f06-4e87-971f-758642fa75bc', name: '按时办结' },
        { sectionName: '企业管理处', value: 0, sectionId: '95531eb4-177e-4908-aed7-7d13da5fcd5f', name: '按时办结' },
        { sectionName: '商品检验处', value: 0, sectionId: '2b567b11-64a6-4d70-8265-90a25d26a517', name: '按时办结' },
        { sectionName: '技术中心', value: 0, sectionId: '75a51c04-5258-95c7-4dcb-c5268cd56562', name: '按时办结' },
        { sectionName: '监察室', value: 0, sectionId: 'af97c7ac-eb4a-4469-98cd-d68a93f87815', name: '按时办结' },
        { sectionName: '财务处', value: 0, sectionId: '54fa8bb4-5ae9-4fb9-b101-67ff0b3f6682', name: '按时办结' },
        { sectionName: '动植物检疫处', value: 0, sectionId: '71fa0afb-0a56-49d8-b349-64cfca44d421', name: '按时办结' },
        { sectionName: '海关学会', value: 0, sectionId: 'a0d68dfd-009c-a3f5-4eb2-3b6a1c2f4f37', name: '按时办结' },
        { sectionName: '离退休干部办公室', value: 0, sectionId: '8b26a6d5-2aef-48f9-a59e-ca30a0799c90', name: '按时办结' },
        { sectionName: '综合业务处', value: 0, sectionId: '814a267a-7d22-4ee9-af6e-6be7d811c5cb', name: '按时办结' },


        { sectionName: '办公室', value: 42, sectionId: '8f381852-fd0a-4d98-8777-799422e0b3c2', name: '逾期未办' },
        { sectionName: '科技处', value: 643, sectionId: '9e6c55aa-7dd5-4463-83f4-7263844489c8', name: '逾期未办' },
        { sectionName: '风险防控分局', value: 3, sectionId: 'a58a1f1c-623f-4214-9f80-5b004a438403', name: '逾期未办' },
        { sectionName: '缉私局', value: 3, sectionId: 'ee9dc5f0-9fd0-4179-b799-f134f8406e91', name: '逾期未办' },
        { sectionName: '培训中心', value: 3, sectionId: 'c5772da9-e162-bdee-4a8c-a1852d6aa09e', name: '逾期未办' },
        { sectionName: '数据分中心', value: 3, sectionId: '7d3b0df1-5817-4390-a71d-80935810b2a7', name: '逾期未办' },
        { sectionName: '统计分析处', value: 3, sectionId: 'a3d65e5d-9ff8-4261-8c13-8ae83fdc5888', name: '逾期未办' },
        { sectionName: '口岸监管处', value: 3, sectionId: 'e45f18c0-9e6b-45e9-bf4c-533e14035e09', name: '逾期未办' },
        { sectionName: '稽查处', value: 3, sectionId: '31d5a661-c063-40fd-b2ce-1ed79b798c42', name: '逾期未办' },
        { sectionName: '关税处', value: 3, sectionId: 'b650ba39-e4cb-4e1b-b3a7-feb364ed70bf', name: '逾期未办' },
        { sectionName: '卫生检疫处', value: 3, sectionId: '5ff539af-0632-4d34-ae6f-53e4df20321c', name: '逾期未办' },
        { sectionName: '督察内审处', value: 3, sectionId: '38383f81-5e44-439d-929b-3f0a8a4d59f1', name: '逾期未办' },
        { sectionName: '后勤管理中心', value: 3, sectionId: 'af70397a-2953-4550-9867-f6de912d27f7', name: '逾期未办' },
        { sectionName: '保健中心', value: 3, sectionId: '1b1a23d7-ee23-9beb-498d-032906ad6452', name: '逾期未办' },
        { sectionName: '法规处', value: 3, sectionId: '50e85b00-dac7-408f-a6d6-a39458f229a1', name: '逾期未办' },
        { sectionName: '人事处', value: 3, sectionId: 'c6d54efc-0658-4b09-b84e-62dac1df0fff', name: '逾期未办' },
        { sectionName: '机关党委', value: 3, sectionId: 'e897d63b-b060-487b-bf5e-86b396bf7704', name: '逾期未办' },
        { sectionName: '教育处', value: 3, sectionId: '8ace6d9f-6c46-4bea-b4f2-b400fcb330ce', name: '逾期未办' },
        { sectionName: '进出口食品安全处', value: 3, sectionId: 'f5729525-1f06-4e87-971f-758642fa75bc', name: '逾期未办' },
        { sectionName: '企业管理处', value: 3, sectionId: '95531eb4-177e-4908-aed7-7d13da5fcd5f', name: '逾期未办' },
        { sectionName: '商品检验处', value: 3, sectionId: '2b567b11-64a6-4d70-8265-90a25d26a517', name: '逾期未办' },
        { sectionName: '技术中心', value: 3, sectionId: '75a51c04-5258-95c7-4dcb-c5268cd56562', name: '逾期未办' },
        { sectionName: '监察室', value: 3, sectionId: 'af97c7ac-eb4a-4469-98cd-d68a93f87815', name: '逾期未办' },
        { sectionName: '财务处', value: 3, sectionId: '54fa8bb4-5ae9-4fb9-b101-67ff0b3f6682', name: '逾期未办' },
        { sectionName: '动植物检疫处', value: 3, sectionId: '71fa0afb-0a56-49d8-b349-64cfca44d421', name: '逾期未办' },
        { sectionName: '海关学会', value: 3, sectionId: 'a0d68dfd-009c-a3f5-4eb2-3b6a1c2f4f37', name: '逾期未办' },
        { sectionName: '离退休干部办公室', value: 3, sectionId: '8b26a6d5-2aef-48f9-a59e-ca30a0799c90', name: '逾期未办' },
        { sectionName: '综合业务处', value: 3, sectionId: '814a267a-7d22-4ee9-af6e-6be7d811c5cb', name: '逾期未办' },
      ] });
  }
}

module.exports = DataSourceController;
