const { format } = require('mysql');

module.exports = (type, params) => {
  let sql
  switch (type) {
    case 'userList':
      sql = 'select * from wt_user where 1=1'
      if (params.username) sql += format(' AND account like ?', '%' + params.account + '%')
      break;
    case 'queryUser':
      sql = format('select id from wt_user where account = ?', params.account)
      break;
    case 'register':
      sql = format('insert into wt_user (account,password,createTime) values(?,?,now())', [params.account, params.password])
      break;
    case 'login':
      sql = format('select * from wt_user where (account = ? or mobile = ?) and password = ?', [params.account, params.account, params.password])
      break;
    case 'updateUser':
      sql = 'update wt_user set '
      if (params.userName) sql += format('userName = ?,',[params.userName])
      if (params.mobile) sql += format('mobile = ?,',[params.mobile])
      if (params.age) sql += format('age = ?,',[params.age])
      if (params.nativePlace) sql += format('nativePlace = ?,',[params.nativePlace])
      if (params.github) sql += format('github = ?,',[params.github])
      if (params.useSkill) sql += format('useSkill = ?,',[params.useSkill])
      if (params.status) sql += format('status = ?,',[params.status])
      if (params.role) sql += format('role = ?,',[params.role])
      if (params.remark) sql += format('remark = ?,',[params.remark])
      sql += format('updateTime = now() where id = ?', [params.session.id])
      break;
    case 'activityList':
      sql = 'select * from activity where 1 = 1'
      if (params.currentPage && params.pageSize) sql += format('limit ?,?',[(params.currentPage - 1) * params.pageSize, params.pageSize])
      break;
    default:
      console.log('没找到对应的语句');
  }
  return sql
}