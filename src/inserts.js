/*Hola me llamo Miguel y voy a comenzar con esta Base de datos implementada con Mongo en la cual voy a insertar varios géneros musicales con diferentes datos*/

/*Vamos a empezar con un desglose de la estructura a seguir en dicho proyecto la cual marcara la pauta de todos los documentos y con la cual haremos consultas variadas luego*/ 

db.musica.deleteMany({})
db.musica.insertOne(
    {
        genero:"Trap", 
        nacimiento: new Date("1990-03-23"), /*Año donde dió comienzo*/
        paisOrigen:["EEUU"], 
        sonido:"Ritmos lentos con influencias de electrónica, rap y hip hop.", /*Descripción de como suena el género*/
        exponentes: 
                {   
                    creador:["T.I."], 
                    leyendas:["Chief Keef", "Young Jeezy", "Gucci Mane"], 
                    nuevaEra:["Young Thug", "Travis Scott", "Drake"]
                },
        epocaExito: 
                 {   
                    artista:["Migos", "Lil Uzi"], 
                    año:[new Date("2016-02-01"), new Date("2017-04-30")], 
                },
        subgenero:["Drill", "Melódico", "Hard"], 
        masEscuchado:["Life is good","Hotline Bling","Mask Off","Congrulations"], /*Temas mas escuchados */
        niños: false, /*Apto para niños o no*/
        precioConcierto: 304,
        notaExpertos: [4, 8, 10, 1] /*Calificaciones del género*/
    }
)

/*Ahora vamos a seguir la pauta del documento anterior para añadir más géneros músicales en nuestra BD mediante insertMany */

db.musica.insertMany([

{genero:"Traplatino", nacimiento: new Date("2006-02-13"), paisOrigen:["Puerto Rico"], sonido:"Ritmos lentos con influencias\n de electrónica, rap y hip hop.", exponentes: {creador:["Arcángel"], leyendas:["Randy nota loca", "De la Ghetto", "Ñengo flow"], nuevaEra:["Bad bunny", "Anuel", "Bryant Myers", "Duki"]}, epocaExito:{artista:["Bad Bunny", "Anuel"], año:[new Date("2016-11-12"), new Date("2018-10-21")]}, subgenero:["Drill", "Melódico", "Hard"], masEscuchado:["Tu no vive así","Ahora dice","Loca","Soy peor"], niños: false, precioConcierto: 230, notaExpertos: [1, 6, 9, 4.5]},

{genero:"Reggaeton", nacimiento: new Date("1970-05-22"), paisOrigen:["Panamá"], sonido:"Ritmo movido y pegadizo, logrado por\n unas letras cargadas de rimas y un beat de música marcado", exponentes: {creador:["Edgardo Franco"], leyendas:["Daddy Yankee", "Don omar", "Nicky Jam"], nuevaEra:["Bad bunny", "J Balvin", "Maluma"]}, epocaExito:{artista:["Ozuna", "Daddy Yankee"], año:[new Date("2017-01-31"), new Date("2012-06-23")]}, subgenero:["Denbow", "Dancehall", "Toasting"], masEscuchado:["Despacito","Te Bote rmx","Criminal","Equis"], niños: true, precioConcierto: 289, notaExpertos: [1, 4, 6, 4.5]},

{genero:"Pop", nacimiento: new Date("1926-03-20"), paisOrigen:["EEUU"], sonido:"Ritmo con voces melódicas y claras en primer\n plano y percusiones lineales y repetidas.", exponentes: {creador:["Bing Crosby"], leyendas:["Michael Jackson", "The Beatles", "Elton Jhon"], nuevaEra:["Coldplay", "Britney Spears", "Adele"]}, epocaExito:{artista:["Britney Spears", "Dua Lipa"], año:[new Date("2013-03-31"), new Date("2017-12-24")]},  subgenero:["PopRock", "PopPunk", "CountryPop"], masEscuchado:["Billie Jean","Thriller","Something Just Like This"], niños: true, precioConcierto: 150, notaExpertos: [1, 6, 9, 4.5]},

{genero:"Electronica", nacimiento: new Date("1960-07-10"), paisOrigen:["Alemania"], sonido:"El ritmo se consigue mediante la\n producción de sonidos puramente electrónicos mediante aparatos como el theremin, el sintetizador de sonido o el ordenador.", exponentes: {creador:["Kraftwerk"], leyendas:["David Guetta", "Tiësto", "Avicci"], nuevaEra:["The Chainsmoker", "Tiësto", "Skrillex"]}, epocaExito:{artista:["Skrillex", "Avicci"], año:[new Date("2012-01-12"), new Date("2013-08-13")]}, subgenero:["EDM", "Dubstep", "House"], masEscuchado:["Bangarang","Closer","Where Are Ü Now"], niños: true, precioConcierto: 250, notaExpertos: [5, 6, 9, 6.5]},

{genero:"Rock", nacimiento: new Date("1950-09-12"), paisOrigen:["EEUU"], sonido:"El ritmo tiene tres acordes, un fuerte e insistente ritmo de acompañamiento y una melodía pegadiza.", exponentes: {creador:["Elvis Presley"], leyendas:["Queen", "Sex pistols", "AC/DC"], nuevaEra:["Linkin Park", "Imagine Dragons", "Yungblud"]}, epocaExito:{artista:["Queen", "AC/DC"], año:[new Date("1980-01-13"), new Date("1982-07-21")]}, subgenero:["Punk", "Indie Rock", "Folk Rock"], masEscuchado:["We Will Rock you","God save the queen","Believer"], niños: false, precioConcierto: 123, notaExpertos: [5, 5, 3, 9.3]},

{genero:"Rap", nacimiento: new Date("1970-02-12"), paisOrigen:["EEUU"], sonido:"El ritmo se suele pronunciar sobre un \nbeat, normalmente proporcionado por un DJ, un turntablista, un Beatboxer o una A capela sin acompañamiento.", exponentes: {creador:["Coke La Rock"], leyendas:["2pac", "Notorious B.I.G", "Eminem"], nuevaEra:["J Cole", "Jay Z", "Lil Wayne"]}, epocaExito:{artista:["Eminem", "2pac"], año:[new Date("2009-03-31"), new Date("1995-06-31")]}, subgenero:["Trap", "Gangsta Rap", "Underground"], masEscuchado:["Hit em up","Big Poppa","Rap God"], niños: false, precioConcierto: 231, notaExpertos: [3, 5, 9, 7.5]},

{genero:"Jazz", nacimiento: new Date("1895-07-11"), paisOrigen:["EEUU"], sonido:"Un ritmo sincopado y alegre que invita al movimiento marcando el compás.", exponentes: {creador:["Buddy Bolden"], leyendas:["Wingy Manone", "Buddy Johnson", "Roy Eldridge"], nuevaEra:["Kamasi Washington", "Flying Lotus", "Robert Glasper"]}, epocaExito:{artista:["Buddy Johnson", "Roy Eldridge"], año:[new Date("1954-01-31"), new Date("1960-11-22")]}, subgenero:["Swing", "Bebop", "Cool Jazz"], masEscuchado:["What a wonderful world","Feeling good","Goodbye pork pie hat"], niños: true, precioConcierto: 77, notaExpertos: [5, 6, 9]},

{genero:"Blues", nacimiento: new Date("1912-12-01"), paisOrigen:["EEUU"], sonido:"Patrón repetitivo, que suele seguir una estructura de doce compases.", exponentes: {creador:["William Christopher Handy"], leyendas:["Robert Johnnson", "B.B.King", "Muddy Waters"], nuevaEra:["Josh Smith", "Dan Patlansky", "Matt Schofield"]}, epocaExito:{artista:["B.B.King", "Robert Johnnson"], año:[new Date("1969-07-31"), new Date("1936-09-24")]},  subgenero:["Acid Blues", "Blues africano", "Blues shouter."], masEscuchado:["Stand By Me","The Sky is Crying","Memphis Blues"], niños: true, precioConcierto: 53, notaExpertos: [5, 6, 9, 7]},

{genero:"Clásica", nacimiento: new Date("1740-5-02"), paisOrigen:["Austria"], sonido:"Una melodía principal que era guiaba a todos los instrumentos. Esto hace que se conserve un mismo ritmo en una sucesión de acordes de estructura vertical llamada homofonía.", exponentes: {creador:["Joseph Haydn"], leyendas:["Carl Philipp Emanuel Bach", "Maria Anna Mozart", "Johann Christian Bach"]},subgenero:["religiosa", "profano", "instrumental"], masEscuchado:["Las bodas de Fígaro","Para Elisa","Flauta mágica"], niños: true, precioConcierto: 500, notaExpertos: [8, 8, 10, 8.7]}

])

/*Voy a meter otra base de datos de Discos platino, Oro, Uranio de diferentes artistas*/

db.ventadiscos.insertMany([

{orden: 1, disco:"Uranio", artista:"Raphael", album:"Ayer, Hoy y Siempre", ventas:50000000},
{orden: 2, disco:"Uranio", artista:"Michael Jackson", album:"Thriller", ventas:60000000},
{orden: 3, disco:"Uranio", artista:"Queen", album:"Greatest hits", ventas:80000000},

{orden: 1, disco:"Diamante", artista:"Britney Spears", album:"Baby one more time", ventas:14000000},
{orden: 2, disco:"Diamante", artista:"Elvis Presley", album:"Elvis Christmas Album", ventas:13000000},
{orden: 3, disco:"Diamante", artista:"Eminem", album:"The Marshall Mathers LP", ventas:30000000},

{orden: 1, disco:"Platino", artista:"Duki", album:"Desde el fin del mundo", ventas:1200000},
{orden: 2, disco:"Platino", artista:"The Beatles", album:"Help!", ventas:2000000},
{orden: 3, disco:"Platino", artista:"Jhay Cortez", album:"Timelezz", ventas:1400000}
])




/*He tenido que cambiar un dato (Usando update con su query $set, comando que añadiré a nuevos) en la sección de niños ya que considero que ese género en su base es para todos los públicos*/

db.musica.update({ genero:"Reggaeton"},{ $set: {niños: true}})


