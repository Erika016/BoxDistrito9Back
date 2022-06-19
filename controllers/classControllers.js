const dbMysql = require("../database/db--");
/**
 * @class ClassController
 */

class ClassController {
  /**
   * Function to add classes to a user
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addClass(req, res) {
    const { id_User } = req.body;
    const { numClass } = req.body;
    dbMysql.query(
      "UPDATE Usuario SET clases = clases+? WHERE id_User = ?",
      [numClass, id_User],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to add classes to the calendar
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addHoursClass(req, res) {
    const { fechaHorario } = req.body;
    const { horaHorario } = req.body;
    const { numPersonas } = req.body;

    dbMysql.query(
      "INSERT INTO Horarios (fechaHorario, horaHorario, numPersonas) VALUES (?, ?, ?)",
      [fechaHorario, horaHorario, numPersonas],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to search the classes of a specific day
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  classOneDay(req, res) {
    const { fechaHorario } = req.params;

    dbMysql.query(
      "SELECT * FROM Horarios WHERE fechaHorario = ? ORDER BY horaHorario",
      [fechaHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to search all the reservations of a specific time
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  allReserves(req, res) {
    const { idHorario } = req.params;
    dbMysql.query(
      "SELECT R.idReserva, U.nombre, U.fotos, U.UID FROM reservas R JOIN Usuario U ON(R.UID = U.UID) WHERE idHorario = ?",
      [idHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to add a reservation
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addReserv(req, res) {
    const { UID } = req.body;
    const { idHorario } = req.body;

    dbMysql.query(
      "INSERT INTO reservas (UID, idHorario) VALUES (?, ?)",
      [UID, idHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to remove a class from a user
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  removeClass(req, res) {
    const { UID } = req.body;
    const { numClass } = req.body;
    dbMysql.query(
      "UPDATE Usuario SET clases = clases-? WHERE UID = ?",
      [numClass, UID],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Functio to delete a reservation
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  deleteReserv(req, res) {
    const { UID } = req.body;
    const { idHorario } = req.body;
    dbMysql.query(
      "DELETE FROM reservas WHERE UID = ? and idHorario = ?",
      [UID, idHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to list all the reservations of a day
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  allReserverUserDay(req, res) {
    const { fechaHorario } = req.params;
    const { UID } = req.params;
    dbMysql.query(
      "SELECT H.horaHorario FROM Horarios H JOIN reservas R ON (H.idHorario = R.idHorario) WHERE H.fechaHorario = ? AND R.UID = ? ORDER BY H.horaHorario",
      [fechaHorario, UID],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
        console.log("llego a tener respuesta");
      }
    );
  }

  /**
   * Function to remove a class from one day
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  deleteClass(req, res) {
    const { idHorario } = req.params;
    dbMysql.query(
      "DELETE FROM Horarios WHERE idHorario = ?",
      [idHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to modify the number of people in a class at a specific time
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  updatePerClass(req, res) {
    const { idHorario } = req.body;
    const { numPersonas } = req.body;
    dbMysql.query(
      "UPDATE Horarios SET numPersonas = ? WHERE idHorario = ?",
      [numPersonas, idHorario],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
        console.log("parece k lo hace");
      }
    );
  }
}

module.exports = ClassController = new ClassController();
