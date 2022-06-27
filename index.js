const cassandra = require('cassandra-driver');

client = new cassandra.Client({
  contactPoints: ['cassandranodo1'],
  localDataCenter: 'cassandra-cluster',
  credentials: { username: process.env.CASSANDRA_USERNAME, password: process.env.CASSANDRA_PASSWORD},
});

async function insertPaciente(nombre, apellido,rut, email, fecha_nacimiento){
    const query = `SELECT MAX(id) AS max_id FROM ks1.paciente;`;
    const pacientes = await client.execute(query);
    const new_paciente = paciente.rows[0].max_id + 1;
    const query_I = `INSERT INTO ks1.paciente(id,nombre, apellido, rut, email, fecha_nacimiento)
                          VALUES (${new_paciente},'${nombre}','${apellido}','${rut}','${email}','${fecha_nacimiento}');`;
  await client.execute(query_I);
  return(new_pasiente)
}
