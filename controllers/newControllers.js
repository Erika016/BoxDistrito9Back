var dbMysql = require("../database/db");


/**
 * @class NewsController
 */


class NewsController {

  /**
   * Function to add a new news
   *
   * @param {*} req
   * @param {*} res
   * @memberof NewsController
   */

  addNews(req, res) {
    const {
      tipoNoticia
    } = req.body;
    const {
      tituloNoticia
    } = req.body;
    const {
      lugarNoticia
    } = req.body;
    const {
      diaNoticia
    } = req.body;
    const {
      horaNoticia
    } = req.body;
    const {
      precioNoticia
    } = req.body;
    const {
      infoNoticia
    } = req.body;
    const {
      fotoNoticia
    } = req.body;

    dbMysql.query(
      'INSERT INTO Noticias (tipoNoticia, tituloNoticia, lugarNoticia, diaNoticia, horaNoticia,precioNoticia, infoNoticia, fotoNoticia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [tipoNoticia, tituloNoticia, lugarNoticia, diaNoticia, horaNoticia, precioNoticia, infoNoticia, fotoNoticia],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to list all the news
   *
   * @param {*} req
   * @param {*} res
   * @memberof NewsController
   */

  allNews(req, res) {
    dbMysql.query(
      "SELECT * FROM Noticias ORDER BY diaNoticia",
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to change the status of a news item
   *
   * @param {*} req
   * @param {*} res
   * @memberof NewsController
   */
  changeState(req, res) {
    const {
      estadoNoticia
    } = req.body;
    const {
      idNoticia
    } = req.body;
    console.log("eto me llega", estadoNoticia, idNoticia)
    dbMysql.query("UPDATE Noticias SET estadoNoticia = ? WHERE idNoticia = ?", [estadoNoticia, idNoticia], (err, rows) => {
      if (err) console.log(err);
      res.send("Okay!");
    });
  }

  /**
   * Function to modify a news
   *
   * @param {*} req
   * @param {*} res
   * @memberof NewsController
   */

  modifyNews(req, res) {
    const {
      tipoNoticia
    } = req.body;
    const {
      tituloNoticia
    } = req.body;
    const {
      lugarNoticia
    } = req.body;
    const {
      diaNoticia
    } = req.body;
    const {
      horaNoticia
    } = req.body;
    const {
      precioNoticia
    } = req.body;
    const {
      infoNoticia
    } = req.body;
    const {
      idNoticia
    } = req.body;
    const {
      fotoNoticia
    } = req.body;

    dbMysql.query(
      ' UPDATE Noticias SET tipoNoticia = ?, tituloNoticia = ?, lugarNoticia = ?, diaNoticia = ?, horaNoticia = ?, precioNoticia = ?, infoNoticia = ?, fotoNoticia = ? WHERE idNoticia = ?',
      [tipoNoticia, tituloNoticia, lugarNoticia, diaNoticia, horaNoticia, precioNoticia, infoNoticia, fotoNoticia, idNoticia],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to list all news with active status
   *
   * @param {*} req
   * @param {*} res
   * @memberof NewsController
   */

  allNewsActive(req, res) {
    dbMysql.query(
      "SELECT * FROM Noticias where estadoNoticia like 'Activar' ORDER BY diaNoticia",
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

}

module.exports = NewsController = new NewsController();