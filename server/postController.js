const pool = require('./database');
const postController = {};

postController.get = (req, res, next) => {
  const { company } = req.params;
  let sql = `SELECT * FROM posts`;
  if (company) sql += ` WHERE company LIKE '%${company}%'`;
  sql += `;`;
  pool.query(sql)
    .then(response => {
      res.send(response.rows);
    });
}

postController.post = (req, res, next) => {
  let sql = `INSERT INTO posts (user_id, company, content) VALUES ($1, $2, $3)`;
}

module.exports = postController;