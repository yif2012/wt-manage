const pool = require('./index')();

module.exports = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      try {
        console.log(sql);
        connection.query(sql, (err, res, fields) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
          connection.release()
        })
      } catch (e) {
        console.log(e)
      }
    })
  })
}