'use strict';
const Controller = require('./../core/baseController');

class GraphController extends Controller {

  // 列表
  async list() {
    const { ctx } = this;
    const { name, type, uri } = ctx.query;

    const filteredQuery = ctx.helper.filterObjectEmptyValue({
      name,
      type,
      uri,
    });

    const result = await ctx.model.Graph.find(filteredQuery);

    this.success({
      list: result,
    });
  }

  // 添加
  async create() {
    const { ctx } = this;
    const {
      type,
      name,
      apiUrl,
      attr,
      titleShowType,
      timeFilterShowType,
      uri,
    } = ctx.request.body;

    const createRule = {
      type: [ 'Bar', 'Column', 'Pie', 'Line' ],
      name: 'string',
      apiUrl: 'string',
      uri: 'string',
      attr: 'object',
      titleShowType: {
        type: 'number',
        min: 0,
        max: 1,
      },
      timeFilterShowType: {
        type: 'number',
        min: 0,
        max: 1,
      },
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const [ isNameExist, isUriExist ] = await Promise.all([
      ctx.model.Graph.exists({ name }),
      ctx.model.Graph.exists({ uri }),
    ]);

    if (isNameExist) {
      this.failure({
        code: '-1',
        msg: '该图表名称已存在',
        data: {},
      });

      return;
    }

    if (isUriExist) {
      this.failure({
        code: '-2',
        msg: '重复的图表标识',
        data: {},
      });

      return;
    }

    const result = await ctx.model.Graph.create({
      type,
      name,
      uri,
      apiUrl,
      attr,
      titleShowType,
      timeFilterShowType,
    });

    ctx.logger.debug('添加图表记录结果：', result);

    this.success({
      id: result.id,
    });
  }

  // 添加
  async update() {
    const { ctx } = this;
    const {
      id,
      type,
      uri,
      name,
      apiUrl,
      attr,
      titleShowType,
      timeFilterShowType,
    } = ctx.request.body;

    const createRule = {
      id: 'string',
      type: [ 'Bar', 'Column', 'Pie', 'Line' ],
      name: 'string',
      apiUrl: 'string',
      uri: 'string',
      attr: 'object',
      titleShowType: {
        type: 'number',
        min: 0,
        max: 1,
      },
      timeFilterShowType: {
        type: 'number',
        min: 0,
        max: 1,
      },
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const [ isRecordExist, isNameExist, isUriExist ] = await Promise.all([
      ctx.model.Graph.exists({ _id: id }),
      ctx.model.Graph.exists({
        _id: {
          $ne: id,
        },
        name }),
      ctx.model.Graph.exists({
        _id: {
          $ne: id,
        },
        uri }),
    ]);

    if (!isRecordExist) {
      this.failure({
        code: '-1',
        msg: '不存在的图表id',
        data: {},
      });

      return;
    }

    if (isNameExist) {
      this.failure({
        code: '-2',
        msg: '该图表名称已存在',
        data: {},
      });

      return;
    }

    if (isUriExist) {
      this.failure({
        code: '-3',
        msg: '重复的图表标识',
        data: {},
      });

      return;
    }

    const result = await ctx.model.Graph.findByIdAndUpdate(id, {
      type,
      name,
      uri,
      apiUrl,
      attr,
      titleShowType,
      timeFilterShowType,
    });

    ctx.logger.error('修改图表记录结果：', result);

    this.success();
  }

  // 删除
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    const result = await ctx.model.Graph.findByIdAndDelete(id);

    ctx.logger.debug('删除图表记录结果：\n', result);

    this.success({});
  }

  // 详情
  async view() {
    const { ctx } = this;
    const { id, uri } = ctx.query;

    const filteredQuery = ctx.helper.filterObjectEmptyValue({
      _id: id,
      uri,
    });

    const result = await ctx.model.Graph.findOne(filteredQuery);

    this.success(result);
  }
}

module.exports = GraphController;
