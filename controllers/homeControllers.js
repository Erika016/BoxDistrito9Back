var dbMysql = require("../database/db");

/**
 * @class HomeController
 */

class HomeController {

  /**
   * Function to list all users
   *
   * @param {*} req
   * @param {*} res
   * @memberof HomeController
   */

  allUser(req, res) {

    dbMysql.query(
      "SELECT * FROM Usuario ",
      (err, rows) => {
        if (err) console.log(err);
        res.json(rows);
      }
    );
  }
}

module.exports = HomeController = new HomeController();