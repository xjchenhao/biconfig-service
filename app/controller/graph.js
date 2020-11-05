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
}

module.exports = GraphController;
