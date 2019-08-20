const { reset, end } = require('../server/db-reset.js');

reset().then(end());
