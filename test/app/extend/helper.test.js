'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/helper.test.js', () => {
  it('filterObjectEmptyValue', async function() {
    const ctx = app.mockContext();

    const notEmptyResult = ctx.helper.filterObjectEmptyValue({ a: 1, b: 2, c: 3 });
    assert.equal(notEmptyResult.a, 1);
    assert.equal(notEmptyResult.b, 2);
    assert.equal(notEmptyResult.c, 3);

    const notFilterEmptyStringResult = ctx.helper.filterObjectEmptyValue({ a: 1, b: '', c: null }, false);
    assert.equal(notFilterEmptyStringResult.a, 1);
    assert.equal(notFilterEmptyStringResult.b, '');
    assert.equal(notFilterEmptyStringResult.c, undefined);

    const filterEmptyStringResult = ctx.helper.filterObjectEmptyValue({ a: 1, b: '', c: null });
    assert.equal(filterEmptyStringResult.a, 1);
    assert.equal(filterEmptyStringResult.b, undefined);
    assert.equal(filterEmptyStringResult.b, undefined);
  });

});
