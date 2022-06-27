const cassandra = require('cassandra-driver');

client = new cassandra.Client({
  contactPoints: ['cassandranodo1'],
  localDataCenter: 'cassandra-cluster',
  credentials: { username: process.env.CASSANDRA_USERNAME, password: process.env.CASSANDRA_PASSWORD},
});
