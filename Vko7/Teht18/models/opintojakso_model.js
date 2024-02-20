const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (name,author,isbn) values(?,?,?)',
      [opintojakso.name, opintojakso.author, opintojakso.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set name=?,author=?, isbn=? where id_opintojakso=?',
      [opintojakso.name, opintojakso.author, opintojakso.isbn, id],
      callback
    );
  }
};
module.exports = opintojakso;