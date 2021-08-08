'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
    async getList() {
        const { ctx } = this;
        const result = await ctx.service.type.getList();
        let _result = [];
        if(result) {
            _result = result.map(item => ({
                type: item.type,
                name: item.name
            }))
        }
        ctx.body = {
            code: 200,
            msg: 'success',
            data: _result,
        };
    }
}

module.exports = TypeController;
