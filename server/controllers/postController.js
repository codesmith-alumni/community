const pool = require('../database');

const postController = {};

postController.get = (req, res, next) => {
  const { company } = req.params;
  let sql = 'SELECT * FROM posts';
  if (company) sql += ` WHERE company LIKE '%${company}%'`;
  sql += ';';
  pool.query(sql)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => console.err(err));
};

postController.post = (req, res, next) => {
  const { company, content } = req.body;
  const { user_id } = req.session;
  const sql = 'INSERT INTO posts (user_id, company, content) VALUES ($1, $2, $3) RETURNING *';
  const values = [user_id, company, content];
  pool.query(sql, values)
    .then((response) => {
      res.status(200);
      res.send(response.rows[0]);
    });
};

module.exports = postController;
