module.exports = {
  SUCCESS: params => { return { code: 666, status: '成功', var: params } },
  ERROR: e => { return { code: 0, status: '错误', var: e } },
  USEREXIST: e => { return { code: 504, status: '用户名已经被注册', var: e } },
  USERORPWDERROR: e => { return { code: 505, status: '用户名或密码错误', var: e } },
  USERNAMENULL: e => { return { code: 506, status: '用户名不能为空', var: e } },
  PASSWORDNULL: e => { return { code: 507, status: '密码不能为空', var: e } },
  EXCEPTION: e => { return { code: -3, status: '异常', var: e } }
}