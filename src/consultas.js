/*Bueno, ya tenemos nuestro Inserts de los distintos géneros musicales con sus datos después de una investigación de cada una de ellas y otras de las que tenía conocimiento*/

/*Ahora vamos a hacer diferentes consultas con el operador Find y sus distintas e interesantes variables que ofrece Mongo*/

/*Vamos a plantear bastantes escenarios que tengan que ver con mis datos proporcionados evidentemente, estos escenarios servirán para desmenuzar los conocimientos que hemos aprendido
en clase*/


/*Quiero enseñar la base de la que parten todos los querys con un simple find que busque el genero Trap por ejemplo*/


db.musica.find({genero:"Trap"})


/*Ahora vamos con lo importante, aviso de que en todas la consultas se ha usado su debido .pretty() y $project*/

/*1º Mi hermano de 7 años quiere saber que escucho con mis cascos pero quiero enseñarle cosas apropiadas para su edad y que a su vez aprenda de géneros de antes de su nacimiento
a partir de el 2010 pero que no sean tan antiguos, 1960 para arriba. Solo quiero saber género y si es apto.

¿Que estilos son aptos para él?*/

db.musica.find( 
        
        { $and: 
    
    [
        {niños:true}, 
        { nacimiento: {$lte: new Date("2010-01-01")}}, 
        { nacimiento: {$gte: new Date("1960-01-01")}} 
    ] 

},{genero:1, niños:1, nacimiento:1})


/*{
        "_id" : ObjectId("61843145b130645eeaeefec3"),
        "genero" : "Reggaeton",
        "niños" : true
}
{
        "_id" : ObjectId("61843145b130645eeaeefec5"),
        "genero" : "Electronica",
        "niños" : true
}
*/

/*2º Mi amigo Luis ha estado ahorrando durante varios meses para ir a un concierto grande y ha conseguido 250 Euros lo malo es que no le gusta ni el Rock ni el blues. Que solo me aparezca
el género y el precio.*/

/*¿Cuales son sus opciones?*/

db.musica.find( { $and: 
    
    [
        { genero: { $nin: [ "Rock", "Blues" ] } },
        { precioConcierto: {$lte: 250}},
    ] 
},{genero:1, precioConcierto:1})

/*{
        "_id" : ObjectId("61843145b130645eeaeefec2"),
        "genero" : "Traplatino",
        "precioConcierto" : 230
}
{
        "_id" : ObjectId("61843145b130645eeaeefec4"),
        "genero" : "Pop",
        "precioConcierto" : 150
}
{
        "_id" : ObjectId("61843145b130645eeaeefec5"),
        "genero" : "Electronica",
        "precioConcierto" : 250
}
{
        "_id" : ObjectId("61843145b130645eeaeefec7"),
        "genero" : "Rap",
        "precioConcierto" : 231
}
{
        "_id" : ObjectId("61843145b130645eeaeefec8"),
        "genero" : "Jazz",
        "precioConcierto" : 77
}
*/


/*3º Viniendo de clases he visto en la parada un carte de un artista nuevaEra llamado Duki que toca aquí en Sevilla pero quiero saber que estilo canta. Quiero saber solo su nombre y género.*/

/*¿Qué estilo canta*/

db.musica.find(
    {"exponentes.nuevaEra":{$eq: "Duki"}},{genero:1, "exponentes.nuevaEra":1}
    )   

/*{
        "_id" : ObjectId("61843145b130645eeaeefec2"),
        "genero" : "Traplatino",
        "exponentes" : {
                "nuevaEra" : [
                        "Bad bunny",
                        "Anuel",
                        "Bryant Myers",
                        "Duki"
                ]
        }
}*/

/*Para que me salga solo el cantante que quiero en el Array sería así*/

db.musica.find(
        {"exponentes.nuevaEra":{$eq: "Duki"}},{"exponentes.nuevaEra":{$slice:-1} }
        )

/* {
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
                         "Duki"
                 ]*/



/*4º Me he fijado de la descripción de sonido de la wikipedia de cada uno de los géneros y tienen una estructura parecida creo que por lo menos 4 o 5 lo ha redactado la misma persona por la
estructura empezada por un simple Ritmo. Muestrame el sonido y el género al que corresponden*/

db.musica.find( { sonido: { $regex: /^Ritmo/ } },{genero:1, sonido:1} )

/*{
    "_id" : ObjectId("61843119b130645eeaeefec1"),
    "genero" : "Trap",
    "sonido" : "Ritmos lentos con influencias de electrónica, rap y hip hop."
}
{
    "_id" : ObjectId("61843145b130645eeaeefec2"),
    "genero" : "Traplatino",
    "sonido" : "Ritmos lentos con influencias de electrónica, rap y hip hop."
}
{
    "_id" : ObjectId("61843145b130645eeaeefec3"),
    "genero" : "Reggaeton",
    "sonido" : "Ritmo movido y pegadizo, logrado por unas letras cargadas de rimas y un beat de música marcado"
}
{
    "_id" : ObjectId("61843145b130645eeaeefec4"),
    "genero" : "Pop",
    "sonido" : "Ritmo con voces melódicas y claras en primer plano y percusiones lineales y repetidas."
}*/

/*5º He considerado que la música clásica por ser más una época que un género (Aunque lo haya añadido) no hay artistas nuevaEra pero no se si lo he hecho con más documentos, vamos a verlo.
Que solo se muestre género y exponentes*/

db.musica.find({"exponentes.nuevaEra":{$exists:false}},{genero:1, exponentes:1})


/*{
        "_id" : ObjectId("61843145b130645eeaeefeca"),
        "genero" : "Clásica",
        "exponentes" : {
                "creador" : [
                        "Joseph Haydn"
                ],
                "leyendas" : [
                        "Carl Philipp Emanuel Bach",
                        "Maria Anna Mozart",
                        "Johann Christian Bach"
                ]
        }
}*/


/*6º En una página he visto las notas que le daban expertos a cada género y había uno de ellos que solo estaba evaluado por 3 expertos*/

/*¿Cuál es?*/

db.musica.find({ notaExpertos : {$size : 3}},{genero:1,notaExpertos:1})

/*{
        "_id" : ObjectId("6187eb919651cd2ea8f289db"),
        "genero" : "Jazz",
        "notaExpertos" : [
                5,
                6,
                9
        ]
}*/


/*7º Genero que tenga un 10 en sus notas y que no sea de EEUU*/

/*¿Qué género es el afortunado?*/

db.musica.find( 
        
        { $and: 
                [ 
                        {notaExpertos:{$eq:10} }, 
                        {paisOrigen:{$not:{$eq:["EEUU"]}} }
                ] 
        },{genero:1,notaExpertos:1, paisOrigen:1} )


        
                        
                        

/*{
        "_id" : ObjectId("6187f08c9651cd2ea8f289e7"),
        "genero" : "Clásica",
        "paisOrigen" : [
                        [
                                "Austria"
                        ],
                        "Viena"
                ],
        "notaExpertos" : [
                        8,
                        8,
                        10,
                        8.7
                ]
}*/

/*8º Quiero llevar a mi hermano pequeño a un concierto de un género que no tenga malas notas, tengo 100 euros no más y evidentemente que sea para niños*/

/*¿A cuales puedo ir con él?*/


db.musica.find( 
        
        { $nor: 
                [ 
                        { notaExpertos: {$lte: [4.99] }}, 
                        { precioConcierto: { $gt: 100 } }, 
                        { niños: false } 
                ] 
        },{genero:1,notaExpertos:1, niños:1,precioConcierto:1} )

             
        /*{
                "_id" : ObjectId("6187fbf39651cd2ea8f289ef"),
                "genero" : "Jazz",
                "niños" : true,
                "precioConcierto" : 77,
                "notaExpertos" : [
                        5,
                        6,
                        9
                ]
        }
        {
                "_id" : ObjectId("6187fbf39651cd2ea8f289f0"),
                "genero" : "Blues",
                "niños" : true,
                "precioConcierto" : 53,
                "notaExpertos" : [
                        5,
                        6,
                        9,
                        7
                ]
        }*/


/*9º Hace poco han salido noticias de un concierto con muertes y una nominacion por su album en los grammys de dos cantantes nuevos, Travis Scott y Drake, pero me gustaría saber a que género
cantan y el precio de las entradas del concierto tan polémico.

Solo se dos datos sus nombres y que son de EEUU*/

/*¿Cuál se ajustará a nuestros gustos*/

        
db.musica.find( 
        { $and: 
                [ 
                        {"exponentes.nuevaEra":{ $in:["Travis Scott", "Drake"]}}, 
                        {paisOrigen:{$eq:["EEUU"]} }
                ] 
        
        },{genero:1, exponentes:1 ,precioConcierto:1} )


/*Podemos hacerlo con un $all tambien*/

db.musica.find( 
        { $and: 
                [ 
                        {"exponentes.nuevaEra":{ $all:["Travis Scott", "Drake"]}}, 
                        {paisOrigen:{$eq:["EEUU"]} }
                ] 
       
        },{genero:1, exponentes:1 ,precioConcierto:1} )

       
        /*{
                "_id" : ObjectId("618aa7fb96b378ad1bc8ce61"),
                "genero" : "Trap",
                "exponentes" : {
                        "creador" : [
                                "T.I."
                        ],
                        "leyendas" : [
                                "Chief Keef",
                                "Young Jeezy",
                                "Gucci Mane"
                        ],
                        "nuevaEra" : [
                                "Young Thug",
                                "Travis Scott",
                                "Drake"
                        ]
                },
                "precioConcierto" : 304
        }*/       



/*10º Soy del 2001 y quiero saber cuales son los tópicos musicales de mi época, los que han hecho el "Boom", y los anteriores a mi época en dos ordenes diferentes*/

db.musica.find( { "epocaExito.año": { $elemMatch: { $gte: new Date("2001-01-01"), $lte: new Date("2016-01-01")}}} ,{genero:1, "epocaExito.año":1 ,} )

/*{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce77"),
        "genero" : "Reggaeton",
        "epocaExito" : {
                "año" : [
                        ISODate("2017-01-31T00:00:00Z"),
                        ISODate("2012-06-23T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce78"),
        "genero" : "Pop",
        "epocaExito" : {
                "año" : [
                        ISODate("2013-03-31T00:00:00Z"),
                        ISODate("2017-12-24T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce79"),
        "genero" : "Electronica",
        "epocaExito" : {
                "año" : [
                        ISODate("2012-01-12T00:00:00Z"),
                        ISODate("2013-08-13T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce7b"),
        "genero" : "Rap",
        "epocaExito" : {
                "año" : [
                        ISODate("2009-03-31T00:00:00Z"),
                        ISODate("1970-01-01T00:00:00Z")
                ]
        }
}*/

db.musica.find( { "epocaExito.año": { $elemMatch: {$lte: new Date("2001-01-01")}}} ,{genero:1, "epocaExito.año":1 ,} )

/*{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce7a"),
        "genero" : "Rock",
        "epocaExito" : {
                "año" : [
                        ISODate("1980-01-13T00:00:00Z"),
                        ISODate("1982-07-21T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce7b"),
        "genero" : "Rap",
        "epocaExito" : {
                "año" : [
                        ISODate("2009-03-31T00:00:00Z"),
                        ISODate("1970-01-01T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce7c"),
        "genero" : "Jazz",
        "epocaExito" : {
                "año" : [
                        ISODate("1954-01-31T00:00:00Z"),
                        ISODate("1960-11-22T00:00:00Z")
                ]
        }
}
{
        "_id" : ObjectId("618ac3f696b378ad1bc8ce7d"),
        "genero" : "Blues",
        "epocaExito" : {
                "año" : [
                        ISODate("1969-07-31T00:00:00Z"),
                        ISODate("1936-09-24T00:00:00Z")
                ]
        }
}*/


/*11º Quiero saber cual es el número de discos que vendieron mi artistas favoritos Michael Jackson y Emine. aunque no estoy seguro si Emine. se escribe con el n o m*/


db.ventadiscos.find( 
        
        { $or: 
                [ 
                        {artista:{$eq:"Michael Jackson"} }, 
                        {artista:{ $regex: /emine./i }},
                        
                ] 
        },{disco:1,artista:1, album:1, ventas:1} )


        /*{
                "_id" : ObjectId("618d1d1635e190db143ac161"),
                "disco" : "Uranio",
                "artista" : "Michael Jackson",
                "album" : "Thriller",
                "ventas" : 60000000
        }
        {
                "_id" : ObjectId("618d1d1635e190db143ac165"),
                "disco" : "Diamante",
                "artista" : "Eminem",
                "album" : "The Marshall Mathers LP",
                "ventas" : 30000000
        }*/ 



/*12º Quiero que en la descripcion de sonido de los generos me busque en los saltos de linea el valor beat sin importar minus o mayus*/


        db.musica.find( { sonido: { $regex: /.*beat/i } },{genero:1, sonido:1} )

        
        /*{
                "_id" : ObjectId("618d1f3e35e190db143ac175"),
                "genero" : "Reggaeton",
                "sonido" : "Ritmo movido y pegadizo, logrado por\n unas letras cargadas de rimas y un beat de música marcado"
        }
        {
                "_id" : ObjectId("618d1f3e35e190db143ac179"),
                "genero" : "Rap",
                "sonido" : "El ritmo se suele pronunciar sobre un \nbeat, normalmente proporcionado por un DJ, un turntablista, un Beatboxer o una A capela sin acompañamiento."
        }*/


/*13º Quiero saber los numeros 1 de los discos Diamante y Uranio pero sin que me muestre la cantante Britney Spears*/

        db.ventadiscos.find( 
        
                { $and: 
                        [ 
                                {orden:{$eq:1} }, 
                                {disco:{$ne:"Platino" }},
                                {artista:{$not:{$eq:"Britney Spears"}} }
                                
                        ] 
                },{disco:1,artista:1, album:1, ventas:1} )      

        

/*14º Aquí he querido meter un and implicito donde exista artistas nuevaEra y el grupo Linkin Park*/


db.musica.find({"exponentes.nuevaEra":{$exists:true, $eq:"Linkin Park"}},{genero:1, exponentes:1})


/*15º Buscar opiniones mias con menos de 7,25 y que o cumpla la fecha de nacimiento o niños false*/


db.musica.find( 
        
        { $and: 
                [ 
                        { miOpinion: {$lt: 7.25 }}, 
                        
                        {$or: 
                                [
                                        {nacimiento:{$lte:new Date("1990-01-01")}},
                                        {niños:{$eq: false}}

                                ]}
                ]                
                 
        },{genero:1,miOpinion:1, niños:1,nacimiento:1} )

     