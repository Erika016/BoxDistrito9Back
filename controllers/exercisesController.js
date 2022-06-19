const dbMysql = require("../database/db");


/**
 * @class ExercisesController
 */

class ExercisesController {

  /**
   * Function to show all exercises
   * Funcion para mostrar todos los ejercicios
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  allExercises(req, res) {
    dbMysql.query(
      "SELECT * FROM exercises ORDER BY name",
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }


  /**
   * Function to search for an exercise by name
   * Función para buscar un ejercicio por nombre
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  searchExercises(req, res) {
    const termino = `${req.params.termino}%`;
    console.log(termino);
    dbMysql.query(
      "SELECT * FROM exercises where name LIKE ?",
      [termino],
      (err, rows, next) => {
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
      }
    );
  }


  /**
   * Function to search the weights of an exercise for a user
   * Función para buscar los pesos de un ejercicio para un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  searchWeight(req, res) {
    const {
      id_exerise
    } = req.params;
    const {
      id_User
    } = req.params;

    dbMysql.query(
      "SELECT * FROM max_weith id_exercise = ? and id_User LIKE ?",
      [id_exerise, id_User],
      (err, rows, next) => {
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
      }
    );
  }

  /**
   * Function to remove the weight of a user's exercise
   * Función para borrar el peso del ejercicio de un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  deleteWeight(req, res) {
    const {
      id_weith
    } = req.params;
    dbMysql.query(
      "DELETE FROM weith WHERE id_weith = ?",
      [id_weith],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );

  }

  /**
   * Function to add a weight of a user's exercise
   * Función para agregar un peso del ejercicio de un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  addWeight(req, res) {
    const {
      id_User
    } = req.body;
    const {
      id_exerise
    } = req.body;
    const {
      date
    } = req.body;
    const {
      weith
    } = req.body;

    dbMysql.query(
      'INSERT INTO Pesos (UID, idEjercicio, fechaPeso, peso) VALUES (?, ?, ?, ?)',
      [id_User, id_exerise, date, weith],
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }

}

module.exports = ExercisesController = new ExercisesController();