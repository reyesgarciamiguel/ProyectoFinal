/*1º Actualiza el campo niños a true colocando el genero que es el identificador del documento y el operador $set con el cambio a continuacion*/

db.musica.update({ genero:"Reggaeton"},{ $set: {niños: true}})

/*2º Vamos a usar Aggregate que anida varios operador de etapa como es el caso de $sort que ordena el campo que queramos alfabeticamente*/


db.musica.aggregate(
    
    [
        {$project : {genero:1,_id:0}},
        {$sort : {genero : 1}}, /*$sort ordena alfabeticamente los generos*/
        {$skip: 2}  /*Salta 2 "turnos" saltarian Blues y Clásica que estan por delante alfabeticamente*/
    ]
    )

/*{ "genero" : "Electronica" }
{ "genero" : "Jazz" }
{ "genero" : "Pop" }
{ "genero" : "Rap" }
{ "genero" : "Reggaeton" }
{ "genero" : "Rock" }
{ "genero" : "Trap" }
{ "genero" : "Traplatino" }*/ 

/*3º Añade un campo llamado UranioSioNo en el cual mediante $cmp va a numerar los que tiene certificación Uranio como 0 y los que no la tengan -1*/

db.ventadiscos.aggregate({$project : {_id:0,disco:1,artista:1,UranioSioNo:{$cmp : ['$disco',"Uranio"]}}})

/*
{ "disco" : "Uranio", "artista" : "Raphael", "UranioSioNo" : 0 }
{ "disco" : "Uranio", "artista" : "Michael Jackson", "UranioSioNo" : 0 }
{ "disco" : "Uranio", "artista" : "Queen", "UranioSioNo" : 0 }
{ "disco" : "Diamante", "artista" : "Britney Spears", "UranioSioNo" : -1 }
{ "disco" : "Diamante", "artista" : "Elvis Presley", "UranioSioNo" : -1 }
{ "disco" : "Diamante", "artista" : "Eminem", "UranioSioNo" : -1 }
{ "disco" : "Platino", "artista" : "Duki", "UranioSioNo" : -1 }
{ "disco" : "Platino", "artista" : "The Beatles", "UranioSioNo" : -1 }
{ "disco" : "Platino", "artista" : "Jhay Cortez", "UranioSioNo" : -1 }
>
*/


/*4º $slice muestra las 3 primeras notas de 4 de los expertos de los generos que tengan las notas 1, 6, 9, 4.5*/

db.musica.find({notaExpertos:{$eq:[1, 6, 9, 4.5]}},{notaExpertos:{$slice:3}})

/*{
    "_id" : ObjectId("618e36366f54410c9ddf7d40"),
    "genero" : "Traplatino",
    "nacimiento" : ISODate("2006-02-13T00:00:00Z"),
    "paisOrigen" : [
            "Puerto Rico"
    ],
    "sonido" : "Ritmos lentos con influencias\n de electrónica, rap y hip hop.",
    "exponentes" : {
            "creador" : [
                    "Arcángel"
            ],
            "leyendas" : [
                    "Randy nota loca",
                    "De la Ghetto",
                    "Ñengo flow"
            ],
            "nuevaEra" : [
                    "Bad bunny",
                    "Anuel",
                    "Bryant Myers",
                    "Duki"
            ]
    },
    "epocaExito" : {
            "artista" : [
                    "Bad Bunny",
                    "Anuel"
            ],
            "año" : [
                    ISODate("2016-11-12T00:00:00Z"),
                    ISODate("2018-10-21T00:00:00Z")
            ]
    },
    "subgenero" : [
            "Drill",
            "Melódico",
            "Hard"
    ],
    "masEscuchado" : [
            "Tu no vive así",
            "Ahora dice",
            "Loca",
            "Soy peor"
    ],
    "niños" : false,
    "precioConcierto" : 230,
    "notaExpertos" : [
            1,
            6,
            9
    ]
}
{
    "_id" : ObjectId("618e36366f54410c9ddf7d42"),
    "genero" : "Pop",
    "nacimiento" : ISODate("1926-03-20T00:00:00Z"),
    "paisOrigen" : [
            "EEUU"
    ],
    "sonido" : "Ritmo con voces melódicas y claras en primer\n plano y percusiones lineales y repetidas.",
    "exponentes" : {
            "creador" : [
                    "Bing Crosby"
            ],
            "leyendas" : [
                    "Michael Jackson",
                    "The Beatles",
                    "Elton Jhon"
            ],
            "nuevaEra" : [
                    "Coldplay",
                    "Britney Spears",
                    "Adele"
            ]
    },
    "epocaExito" : {
            "artista" : [
                    "Britney Spears",
                    "Dua Lipa"
            ],
            "año" : [
                    ISODate("2013-03-31T00:00:00Z"),
                    ISODate("2017-12-24T00:00:00Z")
            ]
    },
    "subgenero" : [
            "PopRock",
            "PopPunk",
            "CountryPop"
    ],
    "masEscuchado" : [
            "Billie Jean",
            "Thriller",
            "Something Just Like This"
    ],
    "niños" : true,
    "precioConcierto" : 150,
    "notaExpertos" : [
            1,
            6,
            9
    ]
}*/



/*5º Usamos un conocido como update esta vez con Many, $set que es el que actualiza el precio del concierto, 
$floor hace que no cambien a numeros decimales y $rand proporciona numeros aleatorios hasta el 500*/      
        
db.musica.updateMany({},
        
        [
                { $set:
                { precioConcierto:
                 { $floor:
                        { $multiply: [ { $rand: {} }, 500 ] }
                 }
                }
                }
         ]
         )


/*Cuando ejecutamos nos da la salida: { "acknowledged" : true, "matchedCount" : 10, "modifiedCount" : 10 }*/