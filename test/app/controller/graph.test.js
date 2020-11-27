'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const url = require('url');

const { URLSearchParams } = url;

describe('test/app/controller/graph.test.js', () => {
  describe('#list', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initUri = 'initUri';
    const initRecordData = {
      _id: initRecordId,
      uri: initUri,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
      timeFilterShowType: 1,
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

      const query = {
        name: initRecordData.name,
        type: initRecordData.type,
        uri: initRecordData.uri,
      };

      const { body: result } = await app
        .httpRequest()
        .get(`/api/graph/list?${new URLSearchParams(query)}`)
        .expect(200);

      assert.equal(result.code, '0');
      assert.equal(result.msg, 'OK');
      assert.equal(result.data.list.length, 1);

      assert.equal(result.data.list[0]._id, initRecordData._id);
      assert.equal(result.data.list[0].name, initRecordData.name);
      assert.equal(result.data.list[0].uri, initRecordData.uri);
      assert.equal(result.data.list[0].type, initRecordData.type);
      assert.equal(result.data.list[0].apiUrl, initRecordData.apiUrl);
      assert.equal(result.data.list[0].attr.xField, initRecordData.attr.xField);
      assert.equal(result.data.list[0].attr.yField, initRecordData.attr.yField);
      assert.equal(result.data.list[0].titleShowType, initRecordData.titleShowType);
    });

  });

  describe('#create', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initUri = 'initUri';
    const initRecordData = {
      _id: initRecordId,
      uri: initUri,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
      timeFilterShowType: 1,
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
        uri: '111',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
        titleShowType: 1,
        timeFilterShowType: 1,
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

    it('should return -1', async () => {
      const newData = {
        name: '新名词',
        uri: initRecordData.uri,
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
        titleShowType: 1,
        timeFilterShowType: 1,
      };

      await app
        .httpRequest()
        .post('/api/graph/create')
        .send(newData)
        .expect(200)
        .expect({
          code: '-2',
          msg: '重复的图表标识',
          data: {},
        });
    });

    it('should return ok', async () => {
      const newData = {
        name: '我是新的图表',
        uri: '999',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
        titleShowType: 1,
        timeFilterShowType: 1,
      };

      const { body: result } = await app
        .httpRequest()
        .post('/api/graph/create')
        .send(newData)
        .expect(200);

      const dbResult = await app.model.Graph.findOne().sort({ createTime: -1 });

      assert.equal(result.code, '0');
      assert.equal(result.msg, 'OK');
      assert.equal(result.data.id, dbResult._id);

      assert.equal(dbResult.name, newData.name);
      assert.equal(dbResult.apiUrl, newData.apiUrl);
      assert.equal(dbResult.type, newData.type);
      assert.equal(dbResult.uri, newData.uri);
      assert.equal(dbResult.titleShowType, newData.titleShowType);
      assert.equal(dbResult.timeFilterShowType, newData.timeFilterShowType);
      assert.equal(JSON.stringify(dbResult.attr), JSON.stringify(newData.attr));
    });

  });

  describe('#update', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initUri = 'initUri';
    const initRecordData = {
      _id: initRecordId,
      uri: initUri,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
      timeFilterShowType: 1,
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

      const nonexistentId = '5cecfe6936531d07adf2c073';

      const newData = {
        id: nonexistentId,
        uri: '456',
        name: '123',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
        titleShowType: 1,
        timeFilterShowType: 1,
      };

      await app
        .httpRequest()
        .post('/api/graph/update')
        .send(newData)
        .expect(200)
        .expect({
          code: '-1',
          msg: '不存在的图表id',
          data: {},
        });

    });

    it('should return -2', async () => {
      const newDataId = '5cecfe6936531d07adf21073';

      const newData = {
        _id: newDataId,
        uri: '456',
        name: '我是新的记录',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
      };

      await app.model.Graph.create(newData);

      // 这里就修改了跟初始记录冲突的name
      await app
        .httpRequest()
        .post('/api/graph/update')
        .send({
          id: newDataId,
          name: initRecordData.name,
          uri: '777',
          apiUrl: 'https://www.yuque.com/xjchenhao',
          type: 'Column',
          attr: {},
          titleShowType: 1,
          timeFilterShowType: 1,
        })
        .expect(200)
        .expect({
          code: '-2',
          msg: '该图表名称已存在',
          data: {},
        });

    });

    it('should return -3', async () => {
      const newDataId = '5cecfe6936531d07adf21073';

      const newData = {
        _id: newDataId,
        uri: '456',
        name: '我是新的记录',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
      };

      await app.model.Graph.create(newData);

      // 这里就修改了跟初始记录冲突的name
      await app
        .httpRequest()
        .post('/api/graph/update')
        .send({
          id: newDataId,
          name: '我是新的记录',
          uri: initRecordData.uri,
          apiUrl: 'https://www.yuque.com/xjchenhao',
          type: 'Column',
          attr: {},
          titleShowType: 1,
          timeFilterShowType: 1,
        })
        .expect(200)
        .expect({
          code: '-3',
          msg: '重复的图表标识',
          data: {},
        });

    });

    it('should return 0', async () => {
      const newData = {
        id: initRecordId,
        name: '我是新的图表',
        uri: '777',
        apiUrl: 'https://www.yuque.com/xjchenhao',
        type: 'Column',
        attr: {},
        titleShowType: 1,
        timeFilterShowType: 1,
      };

      await app
        .httpRequest()
        .post('/api/graph/update')
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
      assert.equal(dbResult.uri, newData.uri);
      assert.equal(dbResult.titleShowType, newData.titleShowType);
      assert.equal(dbResult.timeFilterShowType, newData.timeFilterShowType);
      assert.equal(JSON.stringify(dbResult.attr), JSON.stringify(newData.attr));
    });

  });

  describe('#delete', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initUri = 'initUri';
    const initRecordData = {
      _id: initRecordId,
      uri: initUri,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
      timeFilterShowType: 1,
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

      await app
        .httpRequest()
        .post('/api/graph/delete')
        .send({
          id: initRecordData._id,
        })
        .expect(200)
        .expect({
          code: '0',
          msg: 'OK',
          data: {},
        });

      const dbResult = await app.model.Graph.find();

      assert.equal(dbResult.length, 0);
    });

  });

  describe('#view', async () => {
    const initRecordId = '5cecfe6936531d07adf2c07c';
    const initUri = 'initUri';
    const initRecordData = {
      _id: initRecordId,
      uri: initUri,
      name: '我是初始图表记录',
      type: 'Bar',
      apiUrl: 'https://www.yuque.com/xjchenhao',
      attr: {
        xField: 'xField',
        yField: 'yField',
      },
      titleShowType: 1,
      timeFilterShowType: 1,
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

      const query = {
        id: initRecordId,
        uri: initUri,
      };

      const { body: result } = await app
        .httpRequest()
        .get(`/api/graph/view?${new URLSearchParams(query)}`)
        .expect(200);

      assert.equal(result.code, '0');
      assert.equal(result.msg, 'OK');

      assert.equal(result.data._id, initRecordData._id);
      assert.equal(result.data.name, initRecordData.name);
      assert.equal(result.data.type, initRecordData.type);
      assert.equal(result.data.apiUrl, initRecordData.apiUrl);
      assert.equal(result.data.uri, initRecordData.uri);
      assert.equal(result.data.attr.xField, initRecordData.attr.xField);
      assert.equal(result.data.attr.yField, initRecordData.attr.yField);
      assert.equal(result.data.titleShowType, initRecordData.titleShowType);
      assert.equal(result.data.timeFilterShowType, initRecordData.timeFilterShowType);
    });

  });


});
