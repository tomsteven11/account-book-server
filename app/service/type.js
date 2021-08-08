'use strict'

const Service = require('egg').Service;

class TypeService extends Service {
    async getList() {
        const { ctx, app } = this;
        let sql = `select * from type`;
        try {
            const result = await app.mysql.query(sql);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = TypeService;
