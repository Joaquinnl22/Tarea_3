CREATE KEYSPACE Pasiente
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};

CREATE KEYSPACE Receta
WITH replication = {'class':'SimpleStrategy', 'datacenter1' : 3};

CREATE TABLE Pasiente.pasiente (id int, nombres text, apellidos text, rut text, email text, fecha_nacimiento text, PRIMARY KEY(id));

CREAT TABLE Receta.receta(id int, id_paciente int, comentario text, farmacos text, doctot text,PRIMARY KEY(id));



