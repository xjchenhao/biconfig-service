'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/graph/list', controller.graph.list); // 图表记录列表
  // router.post('/api/graph/create', controller.graph.create); // 创建新的图表
  // router.post('/api/graph/delete', controller.graph.delete); // 删除图表
  // router.post('/api/graph/update', controller.graph.update); // 更新图表信息
  // router.post('/api/graph/detail', controller.graph.detail); // 图表信息详情
};
