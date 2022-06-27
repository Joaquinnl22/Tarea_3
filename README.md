# Tarea_3

## Integrantes:
* Christian Bastias
* Joaquin Neira

---
## Como ejecutar codigo

Primero se debera tener instalado [Docker](https://www.docker.com/) y utilizar la herramienta de Docker-compose.

Como ultimo paso se debera ejecutar la siguiente linea de comando:

```
docker-compose up
```
---
# Informacion del repositorio

## Creaci ́on de Receta
```
1 {
2 "nombre": "Melon",
3 "apellido": "Musk",
4 "rut": "1",
5 "email": "Xmelon_muskX@fruitter.com",
6 "fecha_nacimiento": "28/06/1971",
7 "comentario": "Amigdalitis",
8 "farmacos": "Paracetamol",
9 "doctor": "El Waton de la Fruta"
10 }
```
## Editar Receta
{
2 "id": 1,
3 "comentario": "Amigdalitis aguda",
4 "farmacos": "Paracetamol con aguita",
5 "doctor": "El Waton de la Fruta"
6 }

## Eliminar Receta
1 {
2 "id": 1
3 }

## Preguntas

xplique la arquitectura que Cassandra maneja. Cuando se crea el cl ́uster ¿C ́omo los nodos se conectan? ¿Qu ́e
ocurre cuando un cliente realiza una petici ́on a uno de los nodos? ¿Qu ́e ocurre cuando uno de los nodos se desconecta?
¿La red generada entre los nodos siempre es eficiente? ¿Existe balanceo de carga?
2. Cassandra posee principalmente dos estrategias para mantener redundancia en la replicaci ́on de datos. ¿Cu ́ales son
estos? ¿Cu ́al es la ventaja de uno sobre otro? ¿Cu ́al utilizar ́ıa usted para en el caso actual y por qu ́e? Justifique
apropiadamente su respuesta.
3. Teniendo en cuenta el contexto del problema ¿Usted cree que la soluci ́on propuesta es la correcta? ¿Qu ́e ocurre
cuando se quiere escalar en la soluci ́on? ¿Qu ́e mejoras implementar ́ıa? Oriente su respuesta hacia el Sharding (la
replicaci ́on/distribuci ́on de los datos) y comente una estrategia que podr ́ıa seguir para ordenar los datos.
