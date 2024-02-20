const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite) values(?,?,?)',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?, Osoite=? where id_opiskelija=?',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, id],
      callback
    );
  }
};
module.exports = opiskelija;