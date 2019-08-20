require("dotenv").config();
let redis = require("redis");
/* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
client = redis.createClient({
  port: process.env.REDIS_PORT, // replace with your port
  host: process.env.REDIS_HOST, // replace with your hostanme or IP address
  password: process.env.REDIS_PASS // replace with your password
  // // optional, if using SSL
  // // use `fs.readFile[Sync]` or another method to bring these values in
  // tls       : {
  //   key  : stringValueOfKeyFile,
  //   cert : stringValueOfCertFile,
  //   ca   : [ stringValueOfCaCertFile ]
  // }
});

client.set("some-key", "42", function(err) {
  if (err) {
    throw err; /* in production, handle errors more gracefully */
  } else {
    client.get("some-key", function(err, value) {
      if (err) {
        throw err;
      } else {
        console.log(value);
      }
    });
  }
});
