'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/graph.test.js', () => {
  describe('#list', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initRecordData = {
      _id: initRecordId,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
    };

    beforeEach(async () => {
      await app.model.Graph.create(initRecordData);
    });

    afterEach(async () => {
      await Promise.all([
        app.model.Graph.deleteMany(),
      ]);
    });

    it('should return ok', async () => {

      const { body: result } = await app
        .httpRequest()
        .get('/api/graph/list')
        .send({
          name: initRecordData.name,
          type: initRecordData.type,
        })
        .expect(200);

      assert.equal(result.code, '0');
      assert.equal(result.msg, 'OK');
      assert.equal(result.data.list.length, 1);

      assert.equal(result.data.list[0]._id, initRecordData._id);
      assert.equal(result.data.list[0].name, initRecordData.name);
      assert.equal(result.data.list[0].type, initRecordData.type);
      assert.equal(result.data.list[0].apiUrl, initRecordData.apiUrl);
      assert.equal(result.data.list[0].attr.xField, initRecordData.attr.xField);
      assert.equal(result.data.list[0].attr.yField, initRecordData.attr.yField);
      assert.equal(result.data.list[0].titleShowType, initRecordData.titleShowType);
    });

  });
  describe('#create', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initRecordData = {
      _id: initRecordId,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
    };

    beforeEach(async () => {
      await app.model.Graph.create(initRecordData);
    });

    afterEach(async () => {
      await Promise.all([
        app.model.Graph.deleteMany(),
      ]);
    });

    it('should return -1', async () => {
      const newData = {
        name: initRecordData.name,
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
      };

      await app
        .httpRequest()
        .post('/api/graph/create')
        .send(newData)
        .expect(200)
        .expect({
          code: '-1',
          msg: '该图表名称已存在',
          data: {},
        });

    });

    it('should return ok', async () => {
      const newData = {
        name: '我是新的图表',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
      };

      await app
        .httpRequest()
        .post('/api/graph/create')
        .send(newData)
        .expect(200)
        .expect({
          code: '0',
          msg: 'OK',
          data: {},
        });

      const dbResult = await app.model.Graph.findOne().sort({ createTime: -1 });

      assert.equal(dbResult.name, newData.name);
      assert.equal(dbResult.apiUrl, newData.apiUrl);
      assert.equal(dbResult.type, newData.type);
      assert.equal(JSON.stringify(dbResult.attr), JSON.stringify(newData.attr));
    });

  });
});
