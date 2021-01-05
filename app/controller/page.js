'use strict';
const Controller = require('../core/baseController');

class PageController extends Controller {

  // 列表
  async list() {
    const { ctx } = this;
    const { name } = ctx.query;

    const filteredQuery = ctx.helper.filterObjectEmptyValue({
      name,
    });

    const result = await ctx.model.Page.find(filteredQuery);

    this.success({
      list: result,
    });
  }

  // 添加
  async create() {
    const { ctx } = this;
    const {
      name,
      graphList,
    } = ctx.request.body;

    const createRule = {
      name: 'string',
      graphList: 'array',
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const [ isNameExist ] = await Promise.all([
      ctx.model.Page.exists({ name }),
    ]);

    if (isNameExist) {
      this.failure({
        code: '-1',
        msg: '该页面名称已存在',
        data: {},
      });

      return;
    }

    const result = await ctx.model.Page.create({
      name,
      graphList,
    });

    ctx.logger.debug('添加页面记录结果：', result);

    this.success({
      id: result.id,
    });
  }

  // 添加
  async update() {
    const { ctx } = this;
    const {
      id,
      name,
      graphList,
    } = ctx.request.body;

    const createRule = {
      id: 'string',
      name: 'string',
      graphList: 'array',
    };

    try {
      ctx.validate(createRule);
    } catch (err) {
      this.validateError(err);
      return;
    }

    const [ isRecordExist, isNameExist ] = await Promise.all([
      ctx.model.Page.exists({ _id: id }),
      ctx.model.Page.exists({
        _id: {
          $ne: id,
        },
        name }),
    ]);

    if (!isRecordExist) {
      this.failure({
        code: '-1',
        msg: '不存在的页面id',
        data: {},
      });

      return;
    }

    if (isNameExist) {
      this.failure({
        code: '-2',
        msg: '该页面名称已存在',
        data: {},
      });

      return;
    }

    const result = await ctx.model.Page.findByIdAndUpdate(id, {
      name,
      graphList,
    });

    ctx.logger.error('修改页面记录结果：', result);

    this.success();
  }

  // 删除
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    const result = await ctx.model.Page.findByIdAndDelete(id);

    ctx.logger.debug('删除页面记录结果：\n', result);

    this.success({});
  }

  // 详情
  async view() {
    const { ctx } = this;
    const { id } = ctx.query;

    const filteredQuery = ctx.helper.filterObjectEmptyValue({
      _id: id,
    });

    const result = await ctx.model.Page.findOne(filteredQuery);

    this.success(result);
  }
}

module.exports = PageController;
