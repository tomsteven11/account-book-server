'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.home.index);
  router.get('/user', controller.home.user);
  router.post('/add', controller.home.add);
  router.post('/add_user', controller.home.addUser);
  router.post('/edit_user', controller.home.editUser);
  router.post('/delete_user', controller.home.deleteUser);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/edit_userInfo', _jwt, controller.user.editUserInfo);
  router.get('/api/user/get_userInfo', _jwt, controller.user.getUserInfo);
  router.post('/api/upload', controller.upload.upload); // 上传图片
  router.get('/api/user/test', _jwt, controller.user.test);

  // bill
  router.post('/api/bill/add', _jwt, controller.bill.add);
  router.get('/api/bill/list', _jwt, controller.bill.list);
  router.get('/api/bill/detail', _jwt, controller.bill.detail);
  router.post('/api/bill/update', _jwt, controller.bill.update);
  router.post('/api/bill/delete', _jwt, controller.bill.delete);
  router.get('/api/bill/data', _jwt, controller.bill.data);
  router.get('/api/type/list', _jwt, controller.type.getList);
};
