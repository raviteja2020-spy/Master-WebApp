var db = require("../database");
module.exports = {
  getAllData: function (table, condition) {
    return new Promise((resolve) => {
      db.connection.getConnection(function (err, connection) {
        if (err) {
          return resolve([err, null]);
        }
        connection.query(
          "select * from " +
            table +
            " where " +
            Object.keys(condition).join(" = ? and ") +
            " = ?",
          Object.values(condition),
          function (err, response) {
            connection.release();
            console.log(this.sql);
            resolve([err, response]);
          }
        );
      });
    });
  },

  getRowData: function (table, condition) {
    return new Promise((resolve) => {
      db.connection.getConnection(function (err, connection) {
        if (err) {
          return resolve([err, null]);
        }
        connection.query(
          "select * from " +
            table +
            " where " +
            Object.keys(condition).join("=? and ") +
            "=?",
          Object.values(condition),
          function (err, response) {
            connection.release();
            console.log(this.sql);
            resolve([err, response[0]]);
          }
        );
      });
    });
  },
  insertData: function (query, values) {
    return new Promise((resolve) => {
      db.connection.getConnection(function (err, connection) {
        if (err) {
          throw err;
        }
        connection.beginTransaction(function (err) {
          if (err) {
            throw err;
          }
          /* Begin transaction */
          connection.query(query, values, function (err, response) {
            if (err) {
              connection.rollback(() => {
                throw err;
              });
            }
            connection.commit(function (err) {
              if (err) {
                connection.rollback(() => {
                  throw err;
                });
              }
              resolve([err, response]);
              console.log(this.sql);
              console.log("Insertions Complete.");
              connection.release();
            });
          });
          /* End transaction */
        });
      });
    });
  },
  updateData: function (table, updateQueryValue, condition) {
    return new Promise((resolve) => {
      db.connection.getConnection(function (err, connection) {
        if (err) {
          resolve([err, null]);
        }
        let update =
          "update " +
          table +
          " set " +
          Object.keys(updateQueryValue).join(" =? ,") +
          " = ? where " +
          Object.keys(condition).join(" = ? and ") +
          " = ?";
        let updateKeyValues = Object.values(updateQueryValue);
        let conditonKeyValue = Object.values(condition);
        let updateValues = [...updateKeyValues, ...conditonKeyValue];
        connection.query(update, updateValues, function (err, response) {
          connection.release();
          console.log(this.sql);
          resolve([err, response]);
        });
      });
    });
  },

  insertWithBeginTransation: function (
    statementQuery1,
    statementValue1,
    statementQuery2,
    statementValue2
  ) {
    return new Promise((resolve) => {
      db.connection.getConnection(function (err, connection) {
        if (err) {
          throw err;
        }
        connection.beginTransaction(function (err) {
          if (err) {
            throw err;
          }
          /* Begin transaction */
          connection.query(
            statementQuery1,
            statementValue1,
            function (err, response) {
              statementValue2.push(response.insertId);
              connection.query(
                statementQuery2,
                statementValue2,
                function (errOtp, responseOtp) {
                  if (errOtp) {
                    connection.rollback(() => {
                      resolve([errOtp, null]);
                    });
                  }
                  connection.commit(function (err) {
                    if (errOtp) {
                      connection.rollback(() => {
                        resolve([errOtp, null]);
                      });
                    }
                    resolve([errOtp, response]);
                    console.log(this.sql);
                    console.log("Insertions Complete.");
                    connection.release();
                  });
                }
              );
            }
          );
          /* End transaction */
        });
      });
    });
  },
};
