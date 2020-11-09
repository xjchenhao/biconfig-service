'use strict';
const Controller = require('./../core/baseController');

class GraphController extends Controller {

  // 列表
  async list() {
    const { ctx } = this;
    const { name, type } = ctx.query;

    const filteredQuery = ctx.helper.filterObjectEmptyValue({
      name,
      type,
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
    } = ctx.request.body;

    const createRule = {
      type: [ 'Bar', 'Column' ],
      name: 'string',
      apiUrl: 'string',
      attr: 'object',
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const isNameExist = await ctx.model.Graph.exists({ name });

    if (isNameExist) {
      this.failure({
        code: '-1',
        msg: '该图表名称已存在',
        data: {},
      });

      return;
    }

    const result = await ctx.model.Graph.create({
      type,
      name,
      apiUrl,
      attr,
      titleShowType,
    });

    ctx.logger.debug('添加图表记录结果：', result);

    this.success({});
  }

  // 添加
  async update() {
    const { ctx } = this;
    const {
      id,
      type,
      name,
      apiUrl,
      attr,
      titleShowType,
    } = ctx.request.body;

    const createRule = {
      id: 'string',
      type: [ 'Bar', 'Column' ],
      name: 'string',
      apiUrl: 'string',
      attr: 'object',
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const [ isRecordExist, isNameExist ] = await Promise.all([
      ctx.model.Graph.exists({ _id: id }),
      ctx.model.Graph.exists({
        _id: {
          $ne: id,
        },
        name }),
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

    const result = await ctx.model.Graph.findByIdAndUpdate(id, {
      type,
      name,
      apiUrl,
      attr,
      titleShowType,
    });

    ctx.logger.error('修改图表记录结果：', result);

    this.success({});
  }

  // 删除
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    const result = await ctx.model.Graph.findByIdAndDelete(id);

    ctx.logger.debug('删除图表记录结果：\n', result);

    this.success({});
  }
}

module.exports = GraphController;
