const dbMysql = require("../database/db");
/**
 * @class ClassController
 */

class ClassController {
  /**
   * Function to add classes to a user
   * Función para agregar clases a un usuario.
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addClass(req, res) {
    const { id_User } = req.body;
    const { numClass } = req.body;
    dbMysql.query(
      "UPDATE users SET clases = clases+? WHERE id_User = ?",
      [numClass, id_User],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to add classes to the calendar
   * Función para añadir clases al calendario.
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addHoursClass(req, res) {
    const { dia } = req.body;
    const { hora } = req.body;
    const { typClase } = req.body;

    dbMysql.query(
      "INSERT INTO schedule (dia, hora, typClase) VALUES (?, ?, ?)",
      [dia, hora, typClase],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to search the classes of a specific day
   * Función para buscar las clases de un día específico
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  classOneDay(req, res) {
    const { dia } = req.params;

    dbMysql.query(
      "SELECT * FROM schedule WHERE dia = ? ORDER BY hora",
      [dia],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to search all the reservations of a specific time
   * Función para buscar todas las reservas de una hora concreta
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  allReserves(req, res) {
    const { id_schedule } = req.params;
    dbMysql.query(
      "SELECT R.id_booking, u.name, u.photo, u.id_User FROM bookings R JOIN users u ON(R.id_User = u.id_User) WHERE id_schedule = ?",
      [id],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to add a reservation
   * Función para añadir una reserva
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  addReserv(req, res) {
    const { id_User } = req.body;
    const { id_schedule } = req.body;

    dbMysql.query(
      "INSERT INTO bookings (id_User, id_schedule) VALUES (?, ?)",
      [id_User, id_schedule],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to remove a class from a user
   * Función para eliminar una clase de un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  removeClass(req, res) {
    const { id_User } = req.body;
    const { numClass } = req.body;
    dbMysql.query(
      "UPDATE users SET clases = clases-? WHERE id_User = ?",
      [numClass, id_User],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Functio to delete a reservation
   * Función para eliminar una reserva
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  deleteReserv(req, res) {
    const { id_User } = req.body;
    const { id_schedule } = req.body;
    dbMysql.query(
      "DELETE FROM bookings WHERE id_User = ? and id_schedule = ?",
      [id_User, id_schedule],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to show all the reservations of a day
   * Función para mostrar todas las reservas de un día
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  allReserverUserDay(req, res) {
    const { dia } = req.params;
    const { id_User } = req.params;
    dbMysql.query(
      "SELECT H.hora FROM schedule H JOIN bookings R ON (H.id_schedule = R.id_schedule) WHERE H.dia = ? AND R.id_User = ? ORDER BY H.hora",
      [dia, id_User],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
        console.log("llego a tener respuesta");
      }
    );
  }

  /**
   * Function to remove a class from one day
   * Función para eliminar una clase de un día.
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  deleteClass(req, res) {
    const { id_schedule } = req.params;
    dbMysql.query(
      "DELETE FROM schedule WHERE id_schedule = ?",
      [id_schedule],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

  /**
   * Function to modify the number of people in a class at a specific time
   * Función para modificar el número de personas en una clase en un momento específico
   *
   * @param {*} req
   * @param {*} res
   * @memberof ClassController
   */

  updatePerClass(req, res) {
    const { id_schedule } = req.body;
    const { numPersonas } = req.body;
    dbMysql.query(
      "UPDATE schedule SET numPersonas = ? WHERE id_schedule = ?",
      [numPersonas, id_schedule],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
        console.log("parece k lo hace");
      }
    );
  }
}

module.exports = ClassController = new ClassController();
