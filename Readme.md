# Proyecto GénerosMusicalesDB

Base de datos musical, de lo que a todos nos gusta, la música, vamos a recopilar 10 géneros musicales distintos y vamos a recopilar todos los datos de fechas, exponentes, sus calificaciones o sus distintos éxitos.

En el archivo Inserts forman los distintos documentos relacionados con cada uno de los géneros investigados y pasados a una base de datos estructurada y hecha con mimo, también consta de un archivo consultas con Finds de diferentes tipos con problemas que nos pueden surgir sobre la música actual y del pasado.

- [x] Inserts
- [x] Consultas
- [x] AportaciónPersonal

## Datos del creador 👁️‍🗨️

_Datos del creador:_

Miguel Reyes, 20 años y de Sevilla, pertenezco al grupo de primer año de administración de redes y sistemas.


### Comandos Básicos utilizados 📋

_¿Estos son algunos?_

```
use prueba: Cambia la base de datos activa y la crea en el caso de que no esté.

db.prueba.insertOne({nombre: "Miguel"}): Añade el documento a la colección prueba que la crea en el caso de no existir

db.prueba.insertMany([]): Añade varios documentos a la vez

db.prueba.find(): Muestra los documentos de la columna, clave para nuestro proyecto
```

### Operadores Mínimos 📋

_Estos son todos_

```
- $and              - $gt

- $gte              - $lt

- $lte              - $nin

- $eq               - $regex

- $exists           - $Size

- $not              - $nor

- $in               - $all

- $elemMatch        - $or

- $ne
```