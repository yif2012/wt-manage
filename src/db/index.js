module.exports = () => {
  const mysql = require('mysql');
  const host = '119.23.64.204';
  const user = 'root';
  const password = 'sz19870729';
  const database = 'wt_manage';
  const pool = mysql.createPool({ host, user, password, database });
  return pool;
}