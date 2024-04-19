function openModal(id, genero){
    const actrices = [
        {
            id: 1,
            name: "Andrea Del Boca",
            description: 'Conocida como "la niña bonita del cine nacional", Andrea Del Boca ha cautivado a las audiencias desde su debut infantil en "El diario de Ana Frank" (1969). Su extensa carrera abarca películas, telenovelas y series, consolidándola como una figura emblemática del cine y la televisión argentina. Entre sus trabajos más reconocidos se encuentran "Celeste" (1991-1994), "Culpable" (1996) y "Rizzoli & Isles" (2010-2013).',
            wikilink: "https://es.wikipedia.org/wiki/Andrea_del_Boca"
        },
        {
            id: 2,
            name: "Betiana Blum",
            description: 'Una actriz versátil y talentosa, Betiana Blum ha brillado en diversos géneros cinematográficos, desde el drama hasta la comedia. Reconocida por su naturalidad y sensibilidad, Blum ha protagonizado películas aclamadas como "El hijo de la novia" (1999), "Las viudas" (2017) y "El cuento de las comadrejas" (2019).',
            wikilink: "https://es.wikipedia.org/wiki/Betiana_Blum"
        },
        {
            id: 3,
            name: "Candela Vetrano",
            description: 'Una joven promesa del cine argentino, Candela Vetrano ha conquistado a las audiencias con su frescura y talento. Su carrera comenzó en la televisión con series como "Casi ángeles" (2007-2010) y "Violetta" (2012-2015), y luego se consolidó en el cine con películas como "El ardor" (2013), "Las incómodas" (2017) y "El hijo" (2018).',
            wikilink: "https://es.wikipedia.org/wiki/Candela_Vetrano"
        },
        {
            id: 4,
            name: "Carla Peterson",
            description: 'Una actriz reconocida por su belleza y talento, Carla Peterson ha protagonizado películas y series exitosas que la han convertido en una figura popular del cine y la televisión argentina. Entre sus trabajos más destacados se encuentran "Monzón" (2019), "Resto del día" (2017) y "Los Simuladores" (2002-2004).',
            wikilink: "https://es.wikipedia.org/wiki/Carla_Peterson"
        },
        {
            id: 5,
            name: "Celeste Cid",
            description: 'Una actriz versátil y talentosa, Celeste Cid ha cautivado a las audiencias con su capacidad para interpretar personajes complejos y conmovedores. Su carrera abarca teatro, cine y televisión, y ha protagonizado películas aclamadas como "La hija del cazador" (2000), "Las viudas" (2017) y "Perdida" (2018).',
            wikilink: "https://es.wikipedia.org/wiki/Celeste_Cid"
        },
        {
            id: 6,
            name: "China Zorrilla",
            description: 'Una leyenda del teatro y el cine argentino, China Zorrilla ha conquistado a las audiencias con su talento excepcional y su presencia magnética. Su extensa carrera abarca más de seis décadas, y ha protagonizado obras de teatro, películas y series de televisión que la han convertido en una figura emblemática del arte argentino. Entre sus trabajos más reconocidos se encuentran "Esperando la carroza" (1985), "La historia oficial" (1985) y "Un lugar en el mundo" (1992).',
            wikilink: "https://es.wikipedia.org/wiki/China_Zorrilla"
        },
        {
            id: 7,
            name: "Elena Roger",
            description: 'Una cantante y actriz reconocida por su talento vocal y su versatilidad escénica, Elena Roger ha brillado en el teatro musical, la ópera y el cine. Ganadora de un premio Tony por su interpretación en "Evita" (2004), Roger también ha protagonizado películas como "El amor que nos merecemos" (2001) y "Aniceto" (2016).',
            wikilink: " https://es.wikipedia.org/wiki/Elena_Roger"
        },
        {
            id: 8,
            name: "Erica Rivas",
            description: 'Una actriz talentosa y comprometida, Erica Rivas ha conquistado a las audiencias con su naturalidad y su capacidad para interpretar personajes con profundidad emocional. Su carrera comenzó en el teatro y luego se consolidó en el cine con películas como "La patota" (2013), "Relatos Salvajes" (2015) y "La hija de Francisca" (2017).',
            wikilink: "https://en.wikipedia.org/wiki/%C3%89rica_Rivas"
        },
        {
            id: 9,
            name: "Graciela Borges",
            description: 'Conocida como "La dama del cine argentino", Graciela Borges ha cautivado a las audiencias con su elegancia y belleza natural. Protagonista de películas icónicas como "Invasión" (1969) y "La ciénaga" (2001), Borges ha demostrado su talento en una amplia gama de géneros, desde el drama hasta la comedia, consolidándose como una figura emblemática del cine argentino',
            wikilink: "https://es.wikipedia.org/wiki/Graciela_Borges"
        },
        {
            id: 10,
            name: "Griselda Siciliani",
            description: 'Una actriz versátil y talentosa, Griselda Siciliani ha brillado en el teatro, el cine y la televisión, conquistando a las audiencias con su humor, carisma y capacidad para interpretar personajes diversos. Entre sus trabajos más reconocidos se encuentran "Los Simuladores" (2002-2004), "Educando a Nina" (2016) y "El amor incondicional" (2020).',
            wikilink: "https://es.wikipedia.org/wiki/Griselda_Siciliani"
        },
        {
            id: 11,
            name: "Julieta Zylberberg",
            description: 'Una actriz con una sensibilidad única, Julieta Zylberberg ha conmovido a las audiencias con su profundidad emocional y sus interpretaciones conmovedoras. Protagonista de películas aclamadas como "Relatos Salvajes" (2015), "La quietud" (2016) y "Edén: Un final violento" (2022), Zylberberg se ha consolidado como una de las actrices más valoradas del cine argentino actual.',
            wikilink: "https://es.wikipedia.org/wiki/Julieta_Zylberberg"
        },
        {
            id: 12,
            name: "Leonor Manso",
            description: 'Una actriz con una extensa trayectoria en teatro, cine y televisión, Leonor Manso ha conquistado a las audiencias con su talento excepcional y su presencia magnética. Su carrera abarca más de cinco décadas, y ha protagonizado obras de teatro, películas y series de televisión que la han convertido en una figura emblemática del arte argentino. Entre sus trabajos más reconocidos se encuentran "La historia oficial" (1985), "Camila" (1984) y "Las viudas" (2017).',
            wikilink: "https://es.wikipedia.org/wiki/Leonor_Manso"
        },
        {
            id: 13,
            name: "Luisana Lopilato",
            description: 'Una actriz y cantante reconocida por su belleza y talento, Luisana Lopilato ha protagonizado películas y series exitosas que la han convertido en una figura popular del cine y la televisión argentina. Entre sus trabajos más destacados se encuentran "Chiquititas" (1995-2001), "Rebelde Way" (2002-2003) y "Casados con hijos" (2005).',
            wikilink: "https://es.wikipedia.org/wiki/Luisana_Lopilato"
        },
        {
            id: 14,
            name: "Mecha Ortiz",
            description: 'Una actriz legendaria del cine argentino, Mecha Ortiz brilló en la pantalla grande durante más de cinco décadas, protagonizando películas icónicas como "Víspera de casamiento" (1959), "La nave de los monstruos" (1960) y "Los gauchos" (1942). Su talento y belleza la convirtieron en una de las actrices más queridas del público argentino.',
            wikilink: "https://en.wikipedia.org/wiki/Mecha_Ortiz"
        },
        {
            id: 15,
            name: "Mercedes Carreras",
            description: 'Una figura legendaria del cine argentino, Mercedes Carreras brilló en la pantalla grande durante más de seis décadas, acumulando más de 100 películas a lo largo de su extensa carrera. Su carisma y talento la convirtieron en una de las actrices más queridas del público argentino, protagonizando películas como "Víspera de casamiento" (1959) y "La nave de los monstruos" (1960).',
            wikilink: "https://es.wikipedia.org/wiki/Mercedes_Carreras"
        },
        {
            id: 16,
            name: "Mirtha Legrand",
            description: 'Una figura emblemática del espectáculo argentino, Mirtha Legrand ha conquistado a las audiencias con su talento como actriz y conductora de televisión. Su extensa carrera abarca más de ocho décadas, y ha protagonizado películas icónicas como "Encadenados" (1943), "La nave de los monstruos" (1960) y "He nacido para ser amada" (1976). Además, su programa de televisión "Almorzando con Mirtha Legrand" se ha convertido en un clásico de la televisión argentina.',
            wikilink: "https://es.wikipedia.org/wiki/Mirtha_Legrand"
        },
        {
            id: 17,
            name: "Monica Villa",
            description: 'Una actriz talentosa y versátil, Mónica Villa ha brillado en el teatro, el cine y la televisión, conquistando a las audiencias con su humor y capacidad para interpretar personajes diversos. Entre sus trabajos más reconocidos se encuentran "Esperando la carroza" (1985), "Los Simuladores" (2002-2004) y "El hijo de la novia" (1999).',
            wikilink: "https://es.wikipedia.org/wiki/M%C3%B3nica_Villa"
        },
        {
            id: 18,
            name: "Natalia Oreiro",
            description: 'Una actriz y cantante reconocida por su belleza y talento, Natalia Oreiro ha protagonizado películas y series exitosas que la han convertido en una figura popular del cine y la televisión argentina. Entre sus trabajos más destacados se encuentran "Muñeca Brava" (1994-1996), "Ricos y famosos" (1997-1998) y "Amanda" (2016).',
            wikilink: "https://es.wikipedia.org/wiki/Natalia_Oreiro"
        },
        {
            id: 19,
            name: "Norma Aleandro",
            description: 'Una leyenda del cine argentino e internacional, Norma Aleandro ha conquistado a las audiencias con su sensibilidad y versatilidad. Ganadora de un Oscar a la Mejor Actriz de Reparto por su magistral interpretación en "Camila" (1984), Aleandro ha dejado una huella imborrable en la historia del cine con películas como "La historia oficial" (1985) y "Gaby, a la deriva" (1987).',
            wikilink: "https://es.wikipedia.org/wiki/Norma_Aleandro"
        },
        {
            id: 20,
            name: "Soledad Villamil",
            description: 'Una actriz con una sensibilidad única, Soledad Villamil ha conmovido a las audiencias con su profundidad emocional y sus interpretaciones conmovedoras. Protagonista de películas aclamadas como "El hijo de la novia" (1999) y "Zama" (2015), Villamil ha demostrado su talento excepcional y se ha consolidado como una de las actrices más valoradas del cine argentino actual.',
            wikilink: "https://en.wikipedia.org/wiki/Soledad_Villamil"
        },
        {
            id: 21,
            name: "Susana Gimenez",
            description: "Susana Giménez es una figura multifacética que ha conquistado al público con su talento, carisma y versatilidad. Su extensa trayectoria la ha convertido en una de las artistas más queridas y admiradas de Argentina, dejando una huella imborrable en el mundo del espectáculo.",
            wikilink: "https://es.wikipedia.org/wiki/Susana_Gim%C3%A9nez"
        }
    ];
    
    const actores = [
        {
            id: 1,
            name: "Alberto Olmedo",
            description: 'Alberto Olmedo, conocido como "El Negro", fue uno de los comediantes más populares y queridos de la televisión argentina. Su humor irreverente y carisma lo convirtieron en una figura icónica del entretenimiento, protagonizando programas de televisión como "No toca botón" y películas como "Los fierecillos indomables" (1982) y "Atracción peculiar" (1984).',
            wikilink: "https://es.wikipedia.org/wiki/Alberto_Olmedo"
        },
        {
            id: 2,
            name: "Chino Darín",
            description: 'Chino Darín es un actor argentino conocido por su versatilidad y talento interpretativo. Hijo del reconocido actor Ricardo Darín, Chino ha protagonizado películas como "La cordillera" (2017), "El ángel" (2018) y "La odisea de los giles" (2019), consolidándose como una de las jóvenes promesas del cine argentino.',
            wikilink: "https://es.wikipedia.org/wiki/Chino_Dar%C3%ADn"
        },
        {
            id: 3,
            name: "Dady Brieva",
            description: 'Dady Brieva es un actor y comediante argentino conocido por su participación en programas de televisión y espectáculos de humor. Integrante del popular grupo humorístico "Midachi", Brieva ha protagonizado películas como "Dibu 2, la venganza de Nasty" (2005) y "El cielo elegido" (2016), destacándose por su estilo único y su capacidad para hacer reír al público.',
            wikilink: "https://es.wikipedia.org/wiki/Dady_Brieva"
        },
        {
            id: 4,
            name: "Diego Peretti",
            description: 'Diego Peretti es un actor argentino reconocido por su versatilidad y talento en cine, televisión y teatro. Ha protagonizado películas como "El secreto de sus ojos" (2009), "Sin hijos" (2015) y "El ciudadano ilustre" (2016), destacándose por su capacidad para interpretar una amplia gama de personajes con profundidad y sensibilidad.',
            wikilink: "https://es.wikipedia.org/wiki/Diego_Peretti"
        },
        {
            id: 5,
            name: "Enrique Muiño",
            description: 'Enrique Muiño fue un actor argentino de gran prestigio y reconocimiento en la época dorada del cine argentino. Con una extensa carrera que abarcó más de cuatro décadas, Muiño protagonizó películas icónicas como "Los martes, orquídeas" (1941), "La guerra gaucha" (1942) y "La guerra del cerdo" (1975), dejando una huella imborrable en la historia del cine nacional.',
            wikilink: "https://es.wikipedia.org/wiki/Enrique_Mui%C3%B1o"
        },
        {
            id: 6,
            name: "Ernesto Bianco",
            description: 'Ernesto Bianco fue un actor argentino reconocido por su versatilidad y talento en cine, teatro y televisión. Con una destacada trayectoria que abarcó más de cinco décadas, Bianco protagonizó películas como "Un guapo del 900" (1939), "La guerra gaucha" (1942) y "Las aguas bajan turbias" (1952), dejando un legado invaluable en el cine argentino.',
            wikilink: "https://es.wikipedia.org/wiki/Ernesto_Bianco"
        },
        {
            id: 7,
            name: "Fernan Miras",
            description: 'Fernán Mirás es un actor argentino conocido por su versatilidad y talento en cine, televisión y teatro. Ha protagonizado películas como "Tesis sobre un homicidio" (2013), "Cenizas del paraíso" (1997) y "El lado oscuro del corazón" (1992), destacándose por su capacidad para interpretar una amplia variedad de personajes con profundidad y sensibilidad.',
            wikilink: "https://es.wikipedia.org/wiki/Fern%C3%A1n_Mir%C3%A1s"
        },
        {
            id: 8,
            name: "Gaston Pauls",
            description: 'Gastón Pauls es un actor argentino reconocido por su versatilidad y talento en cine y televisión. Ha protagonizado películas como "Nueve reinas" (2000), "El abrazo partido" (2004) y "Un mundo menos peor" (2004), destacándose por su capacidad para interpretar una amplia gama de personajes con autenticidad y profundidad.',
            wikilink: "https://es.wikipedia.org/wiki/Gast%C3%B3n_Pauls"
        },
        {
            id: 9,
            name: "Guillermo Francella",
            description: 'Guillermo Francella es un actor argentino reconocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "El secreto de sus ojos" (2009), "Corazón de León" (2013) y "El hombre de al lado" (2009), destacándose por su capacidad para interpretar una amplia variedad de roles con carisma y profundidad.',
            wikilink: "https://es.wikipedia.org/wiki/Guillermo_Francella"
        },
        {
            id: 10,
            name: "Hector Alterio",
            description: 'Héctor Alterio es un actor argentino de amplia trayectoria y reconocimiento internacional. Ha protagonizado películas como "El hijo de la novia" (2001), "Tesis sobre un homicidio" (2013) y "Cenizas del paraíso" (1997), destacándose por su capacidad para interpretar personajes complejos con profundidad y sensibilidad.',
            wikilink: "https://es.wikipedia.org/wiki/H%C3%A9ctor_Alterio"
        },
            {
                id: 11,
                name: "Joaquín Furriel",
                description: 'Joaquín Furriel es un actor argentino reconocido por su versatilidad y talento en cine, televisión y teatro. Ha protagonizado películas como "El secreto de sus ojos" (2009), "El patrón, radiografía de un crimen" (2014) y "Las grietas de Jara" (2018), destacándose por su capacidad para interpretar una amplia variedad de personajes con autenticidad y profundidad.',
                wikilink: "https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Furriel"
            },
            {
                id: 12,
                name: "Leonardo Sbaraglia",
                description: 'Leonardo Sbaraglia es un actor argentino reconocido por su versatilidad y talento en cine y televisión. Ha protagonizado películas como "Plata quemada" (2000), "Relatos Salvajes" (2014) y "Dolor y gloria" (2019), destacándose por su capacidad para interpretar una amplia gama de personajes con intensidad y profundidad emocional.',
                wikilink: "https://es.wikipedia.org/wiki/Leonardo_Sbaraglia"
            },
            {
                id: 13,
                name: "Luis Brandoni",
                description: 'Luis Brandoni es un actor argentino reconocido por su larga y exitosa trayectoria en cine, teatro y televisión. Ha protagonizado películas como "Esperando la carroza" (1985), "Mi obra maestra" (2018) y "La casa del ángel" (1957), destacándose por su versatilidad y talento para interpretar una amplia variedad de personajes.',
                wikilink: "https://es.wikipedia.org/wiki/Luis_Brandoni"
            },
            {
                id: 14,
                name: "Luis Sandrini",
                description: 'Luis Sandrini fue un actor argentino de amplia trayectoria y reconocimiento en el cine nacional. Conocido por sus interpretaciones cómicas, Sandrini protagonizó películas icónicas como "Don Quijote cabalga de nuevo" (1973), "Esperando la carroza" (1985) y "El profesor tirabombas" (1972), dejando un legado imborrable en la historia del cine argentino.',
                wikilink: "https://es.wikipedia.org/wiki/Luis_Sandrini"
            },
            {
                id: 15,
                name: "Nahuel Pérez Biscayart",
                description: 'Nahuel Pérez Biscayart es un actor argentino reconocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "El ciudadano ilustre" (2016), "120 pulsaciones por minuto" (2017) y "Un rubio" (2019), destacándose por su capacidad para interpretar personajes complejos con intensidad y profundidad emocional.',
                wikilink: "https://es.wikipedia.org/wiki/Nahuel_P%C3%A9rez_Biscayart"
            },
            {
                id: 16,
                name: "Narciso Ibáñez Menta",
                description: 'Narciso Ibáñez Menta fue un actor argentino-español conocido por su destacada trayectoria en teatro, cine y televisión. Considerado uno de los máximos exponentes del género de terror en Argentina, Ibáñez Menta protagonizó series de televisión como "Obras maestras del terror" y películas como "El asesino está entre los trece" (1973), dejando un legado imborrable en el cine y el espectáculo.',
                wikilink: "https://es.wikipedia.org/wiki/Narciso_Ib%C3%A1%C3%B1ez_Menta"
            },
            {
                id: 17,
                name: "Oscar Ferrigno",
                description: 'Oscar Ferrigno fue un actor argentino conocido por su versatilidad y talento en cine, teatro y televisión. Con una extensa carrera que abarcó más de seis décadas, Ferrigno protagonizó películas como "Pobre mi madre querida" (1968), "La patota" (1960) y "El cabo Tijereta" (1956), destacándose por su capacidad para interpretar una amplia variedad de personajes con autenticidad y sensibilidad.',
                wikilink: "https://es.wikipedia.org/wiki/Oscar_Ferrigno"
            },
            {
                id: 18,
                name: "Oscar Martínez",
                description: 'Oscar Martínez es un actor argentino reconocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "El ciudadano ilustre" (2016), "Relatos Salvajes" (2014) y "El hijo de la novia" (2001), destacándose por su capacidad para interpretar una amplia variedad de personajes con profundidad y autenticidad.',
                wikilink: "https://es.wikipedia.org/wiki/Oscar_Mart%C3%ADnez"
            },
            {
                id: 19,
                name: "Pepe Arias",
                description: 'Pepe Arias fue un actor y comediante argentino conocido por su estilo único y su talento para el humor. Con una carrera que abarcó más de cinco décadas, Arias protagonizó películas como "Don Quijote del altillo" (1952), "Ayúdame a vivir" (1936) y "Los muchachos de antes no usaban arsénico" (1976), dejando un legado imborrable en el cine y el espectáculo.',
                wikilink: "https://es.wikipedia.org/wiki/Pepe_Arias"
            },{
                id: 20,
                name: "Peter Lanzani",
                description: 'Peter Lanzani es un actor argentino reconocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "El clan" (2015), "4x4" (2019) y "La quietud" (2018), destacándose por su capacidad para interpretar una amplia variedad de roles con intensidad y autenticidad.',
                wikilink: "https://es.wikipedia.org/wiki/Peter_Lanzani"
            },
            {
                id: 21,
                name: "Ricardo Bartis",
                description: 'Ricardo Bartis es un director, dramaturgo y actor argentino conocido por su trabajo en el teatro independiente. Ha dirigido obras de teatro como "Pirámides" y "Insectos", y ha participado como actor en películas como "Pizza, birra, faso" (1998) y "Vida en Marte" (2016), destacándose por su compromiso con el arte y la experimentación teatral.',
                wikilink: "https://es.wikipedia.org/wiki/Ricardo_Bartis"
            },
            {
                id: 22,
                name: "Ricardo Darín",
                description: 'Ricardo Darín es un actor argentino reconocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "El secreto de sus ojos" (2009), "Relatos Salvajes" (2014) y "Nueve reinas" (2000), destacándose por su capacidad para interpretar una amplia variedad de personajes con profundidad y autenticidad.',
                wikilink: "https://es.wikipedia.org/wiki/Ricardo_Dar%C3%ADn"
            },
            {
                id: 23,
                name: "Rodrigo de la Serna",
                description: 'Rodrigo de la Serna es un actor argentino conocido por su talento y versatilidad en cine, televisión y teatro. Ha protagonizado películas como "Diarios de motocicleta" (2004), "El Clan" (2015) y "Cien años de perdón" (2016), destacándose por su capacidad para interpretar una amplia variedad de roles con intensidad y autenticidad.',
                wikilink: "https://es.wikipedia.org/wiki/Rodrigo_de_la_Serna"
            }
        ];

        const directores = [
            {
                id: 1,
                name: "Adolfo Aristarain",
                description: 'Adolfo Aristarain es un director y guionista argentino conocido por su obra cinematográfica caracterizada por su profundidad temática y calidad artística. Ha dirigido películas como "Un lugar en el mundo" (1992), "Martín (Hache)" (1997) y "Roma" (2004), ganando reconocimiento tanto a nivel nacional como internacional.',
                wikilink: "https://es.wikipedia.org/wiki/Adolfo_Aristarain"
            },
            {
                id: 2,
                name: "Anahi Berneri",
                description: 'Anahí Berneri es una directora y guionista argentina conocida por su estilo único y su enfoque en historias íntimas y personales. Ha dirigido películas como "Encarnación" (2007), "Alanis" (2017) y "El sonido de los tulipanes" (2020), ganando reconocimiento tanto a nivel nacional como internacional.',
                wikilink: "https://es.wikipedia.org/wiki/Anahí_Berneri"
            },
            {
                id: 3,
                name: "Ana Piterbarg",
                description: 'Ana Piterbarg es una directora y guionista argentina conocida por su talento y versatilidad en la dirección cinematográfica. Ha dirigido películas como "Todos tenemos un plan" (2012) y "La patota" (2015), destacándose por su capacidad para contar historias profundas y emotivas con una mirada única y personal.',
                wikilink: "https://es.wikipedia.org/wiki/Ana_Piterbarg"
            },
            {
                id: 4,
                name: "Damián Szifron",
                description: 'Damián Szifron es un director y guionista argentino conocido por su estilo audaz y provocativo. Ha dirigido películas como "Relatos Salvajes" (2014) y "Tiempo de valientes" (2005), destacándose por su capacidad para combinar elementos de comedia negra y sátira social con un enfoque visualmente impactante.',
                wikilink: "https://es.wikipedia.org/wiki/Dami%C3%A1n_Szifron"
            },
            {
                id: 5,
                name: "David Cronenberg",
                description: 'David Cronenberg es un director y guionista canadiense conocido por su obra cinematográfica caracterizada por su exploración de temas como la identidad, la tecnología y la corporalidad. Ha dirigido películas como "La mosca" (1986), "Cromosoma 3" (1979) y "Una historia de violencia" (2005), ganando reconocimiento como uno de los cineastas más influyentes del cine de género y el cine de autor.',
                wikilink: "https://es.wikipedia.org/wiki/David_Cronenberg"
            },
            {
                id: 6,
                name: "Eliseo Subiela",
                description: 'Eliseo Subiela fue un director y guionista argentino conocido por su estilo poético y surrealista. Su obra cinematográfica, que incluye películas como "Hombre mirando al sudeste" (1986) y "El lado oscuro del corazón" (1992), se caracteriza por su exploración de temas como el amor, la identidad y la espiritualidad.',
                wikilink: "https://es.wikipedia.org/wiki/Eliseo_Subiela"
            },
            {
                id: 7,
                name: "Gaston Solnicki",
                description: 'Gastón Solnicki es un director y guionista argentino conocido por su enfoque experimental y su exploración de la relación entre la imagen y el sonido. Ha dirigido películas como "Papirosen" (2011) y "Kékszakállú" (2016), destacándose por su capacidad para crear experiencias cinematográficas únicas y envolventes.',
                wikilink: "https://es.wikipedia.org/wiki/Gast%C3%B3n_Solnicki"
            },
            {
                id: 8,
                name: "Héctor Babenco",
                description: 'Héctor Babenco fue un director de cine argentino-brasileño conocido por su obra cinematográfica caracterizada por su realismo y su enfoque en temas sociales y humanos. Dirigió películas como "El beso de la mujer araña" (1985), "Pixote, la ley del más débil" (1981) y "Carandiru" (2003), ganando reconocimiento internacional por su talento como cineasta.',
                wikilink: "https://es.wikipedia.org/wiki/H%C3%A9ctor_Babenco"
            },
            {
                id: 9,
                name: "Juan Carlos Desanzo",
                description: 'Juan Carlos Desanzo fue un director y guionista argentino conocido por su obra cinematográfica caracterizada por su compromiso social y su exploración de la historia argentina. Dirigió películas como "Éxtasis" (1996), "Buenos Aires Vice Versa" (1996) y "Hacia la oscuridad" (2007), destacándose por su capacidad para contar historias profundas y emotivas con un enfoque único y personal.',
                wikilink: "https://es.wikipedia.org/wiki/Juan_Carlos_Desanzo"
            },
            {
                id: 10,
                name: "Juan José Campanella",
                description: 'Juan José Campanella es un director y guionista argentino conocido por su obra cinematográfica caracterizada por su habilidad para combinar elementos de comedia, drama y suspenso. Dirigió películas como "El secreto de sus ojos" (2009), "El hijo de la novia" (2001) y "Luna de Avellaneda" (2004), ganando reconocimiento tanto a nivel nacional como internacional.',
                wikilink: "https://es.wikipedia.org/wiki/Juan_Jos%C3%A9_Campanella"
            },
            {
                id: 11,
                name: "Leonidas Lamborghini",
                description: 'Leonidas Lamborghini fue un director, escritor y poeta argentino conocido por su obra experimental y vanguardista. Dirigió películas como "El cristal secreto" (1989) y "Nada de Tres" (1998), destacándose por su capacidad para desafiar las convenciones narrativas y estéticas del cine argentino.',
                wikilink: "https://es.wikipedia.org/wiki/Leonidas_Lamborghini"
            },
            {
                id: 12,
                name: "Leopoldo Torre Nilsson",
                description: 'Leopoldo Torre Nilsson fue un director y guionista argentino conocido por su obra cinematográfica caracterizada por su estilo visual único y su exploración de temas sociales y psicológicos. Dirigió películas como "La casa del ángel" (1957), "Martín Fierro" (1968) y "El santo de la espada" (1970), ganando reconocimiento tanto a nivel nacional como internacional.',
                wikilink: "https://es.wikipedia.org/wiki/Leopoldo_Torre_Nilsson"
            },
            {
                id: 13,
                name: "Lucrecia Martel",
                description: 'Lucrecia Martel es una directora y guionista argentina conocida por su estilo visual distintivo y su enfoque en historias complejas y atmosféricas. Ha dirigido películas como "La ciénaga" (2001), "La mujer sin cabeza" (2008) y "Zama" (2017), ganando reconocimiento tanto a nivel nacional como internacional por su contribución al cine contemporáneo.',
                wikilink: "https://es.wikipedia.org/wiki/Lucrecia_Martel"
            },
            {
                id: 14,
                name: "Martín Rejtman",
                description: 'Martín Rejtman es un director y guionista argentino conocido por su estilo minimalista y su enfoque en las peculiaridades de la vida cotidiana. Ha dirigido películas como "Rapado" (1992), "Silvia Prieto" (1999) y "Los guantes mágicos" (2003), ganando reconocimiento por su capacidad para capturar la esencia de la vida contemporánea con humor y sensibilidad.',
                wikilink: "https://es.wikipedia.org/wiki/Mart%C3%ADn_Rejtman"
            },
            {
                id: 15,
                name: "María Luisa Bemberg",
                description: 'María Luisa Bemberg fue una directora y guionista argentina conocida por ser una de las pioneras del cine argentino y por su compromiso con la representación de las mujeres en el cine. Dirigió películas como "Camila" (1984), "Yo, la peor de todas" (1990) y "Miss Mary" (1986), ganando reconocimiento internacional por su talento y su contribución al cine latinoamericano.',
                wikilink: "https://es.wikipedia.org/wiki/Mar%C3%ADa_Luisa_Bemberg"
            },
            {
                id: 16,
                name: "Pablo Trapero",
                description: 'Pablo Trapero es un director y guionista argentino conocido por su estilo realista y su enfoque en historias sociales y humanas. Ha dirigido películas como "El bonaerense" (2002), "Leonera" (2008) y "Carancho" (2010), ganando reconocimiento tanto a nivel nacional como internacional por su contribución al cine contemporáneo.',
                wikilink: "https://es.wikipedia.org/wiki/Pablo_Trapero"
            },
            {
                id: 17,
                name: "Fernando Solanas",
                description: 'Fernando Solanas fue un director, guionista y político argentino conocido por su compromiso con el cine político y social. Dirigió películas como "La hora de los hornos" (1968), "Tangos: el exilio de Gardel" (1985) y "Sur" (1988), ganando reconocimiento tanto a nivel nacional como internacional por su contribución al cine latinoamericano.',
                wikilink: "https://es.wikipedia.org/wiki/Fernando_Solanas"
            },
            {
                id: 18,
                name: "Sebastián Borensztein",
                description: 'Sebastián Borensztein es un director y guionista argentino conocido por su estilo humorístico y su enfoque en las relaciones humanas. Ha dirigido películas como "Un cuento chino" (2011) y "Kóblic" (2016), ganando reconocimiento tanto a nivel nacional como internacional por su capacidad para combinar el humor con la profundidad emocional.',
                wikilink: "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Borensztein"
            }
        ];
        

    
    const boton = document.querySelector("#botonModals")
    switch(genero){
        
        case "actriz":
            actrices.forEach((element)=>{
            if(element.id == id){
                    document.querySelector("#exampleModalLabel").textContent = element.name
                    document.querySelector(".modal-body").innerText = element.description
                    document.querySelector("#wikiModal").href = element.wikilink
            }
        })
         boton.click()
        break
        case "actor":
            actores.forEach((element)=>{
                if(element.id == id){
                        document.querySelector("#exampleModalLabel").textContent = element.name
                        document.querySelector(".modal-body").innerText = element.description
                        document.querySelector("#wikiModal").href = element.wikilink
                }
            })
             boton.click()
        break
        case "director":
            directores.forEach((element)=>{
                if(element.id == id){
                        document.querySelector("#exampleModalLabel").textContent = element.name
                        document.querySelector(".modal-body").innerText = element.description
                        document.querySelector("#wikiModal").href = element.wikilink
                }
            })
             boton.click()
        break
        default:
        break
    }


}