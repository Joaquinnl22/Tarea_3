const cassandra = require('cassandra-driver');

client = new cassandra.Client({
  contactPoints: [process.env.CONTACT_POINTS],
  localDataCenter: process.env.LOCAL_DATACENTER,
  credentials: { username: process.env.CASSANDRA_USERNAME, password: process.env.CASSANDRA_PASSWORD},
});
