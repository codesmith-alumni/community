var _a = require('../db-reset'), reset = _a.reset, end = _a.end;
reset().then(end()).catch(function (err) { return console.log('error configuring:', err); });
//# sourceMappingURL=configure.js.map