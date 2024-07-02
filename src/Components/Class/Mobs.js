const Mobs = {
  Dungeon1: [
    {
      name: 'Guerrero Esqueleto ',
      //description: 'Un luchador fuerte y resistente, experto en combate cuerpo a cuerpo.',
      //abilities: ['Ataque poderoso', 'Defensa férrea', 'Corte brutal'],
      health: 150,
      attack: 50,
      defense: 50,
      drop:{
        tipo:'Consumible',
        Nombre:'Pocion C',
        Posicion:'salud',
        mas:50,
      },
    },
    {
      name: 'Mago Esqueleto',
      // description: 'Un maestro de la magia, capaz de lanzar poderosos hechizos desde la distancia.',
      // abilities: ['Bola de fuego', 'Escudo mágico', 'Rayo arcano'],
      health: 180,
      attack: 70,
      defense: 30,
      drop:{
        tipo:'Equipo',
        Nombre:'Chaleco',
        Posicion:'body',
        mas:30,
      },
    },
    {
      name: 'Esqueleto Arquero',
      // description: 'Un tirador experto, preciso y letal con su arco.',
      // abilities: ['Flecha precisa', 'Lluvia de flechas', 'Evasión ágil'],
      health: 350,
      attack: 60,
      defense: 40,
      drop:{
        tipo:'Equipo',
        Nombre:'Arco C',
        Posicion:'bow',
        mas:30,
      },
    },
    {
      name: 'Necromantico',
      // description: 'Ágil y furtivo, experto en ataques rápidos y en evadir al enemigo.',
      // abilities: ['Ataque sigiloso', 'Esquiva rápida', 'Robo'],
      health: 390,
      attack: 65,
      defense: 35,
      drop:{
        tipo:'Consumible',
        Nombre:'Pocion Mana C',
        Posicion:'mana',
        mas:50,
      },
    },
    {
      name: 'No-Muerto',
      // description: 'Un tirador experto, preciso y letal con su arco.',
      // abilities: ['Flecha precisa', 'Lluvia de flechas', 'Evasión ágil'],
      health: 300,
      attack: 60,
      defense: 40,
      drop:{
        tipo:'empty',
        Nombre:'-',
        Posicion:'-',
      },
    },
    {
      name: 'Necromantico',
      //description: 'Ágil y furtivo, experto en ataques rápidos y en evadir al enemigo.',
      //abilities: ['Ataque sigiloso', 'Esquiva rápida', 'Robo'],
      health: 90,
      attack: 65,
      defense: 35,
      drop:{
        tipo:'Equipo',
        Nombre:'Espada Larga',
        Posicion:'weapon',
        mas:30,
      },
    }
  ],
  Dungeon2: [
    {
      name: 'Orco Guerrero',
      description: 'Un brutal guerrero orco, temido por su fuerza y resistencia.',
      abilities: ['Golpe devastador', 'Muro de carne', 'Grito de guerra'],
      health: 200,
      attack: 70,
      defense: 60,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    },
    {
      name: 'Chamán Orco',
      description: 'Un chamán orco que maneja la magia elemental.',
      abilities: ['Llamas de fuego', 'Escudo de tierra', 'Rayo de tormenta'],
      health: 120,
      attack: 80,
      defense: 40,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    },
    {
      name: 'Orco Druida',
      description: 'Una bestia enorme que vive en las cavernas, con una fuerza descomunal.',
      abilities: ['Golpe Oso', 'Regeneración', 'Lanzamiento de roca'],
      health: 250,
      attack: 90,
      defense: 50,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    }
  ],
  
  Dungeon3: [
    {
      name: 'Dragón Joven',
      description: 'Un dragón joven pero aún peligroso, con aliento de fuego.',
      abilities: ['Aliento de fuego', 'Ala cortante', 'Mordida feroz'],
      health: 300,
      attack: 100,
      defense: 80,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    },
    {
      name: 'Necromante',
      description: 'Un oscuro hechicero que controla a los muertos.',
      abilities: ['Invocar esqueleto', 'Toque de la muerte', 'Escudo oscuro'],
      health: 150,
      attack: 90,
      defense: 40,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    },
    {
      name: 'Guardián de la Tumba',
      description: 'Un guerrero no-muerto que protege las tumbas ancestrales.',
      abilities: ['Espada maldita', 'Defensa espectral', 'Golpe de sombra'],
      health: 180,
      attack: 70,
      defense: 60,
      drop:{
        tipo:'equipo',
        Nombre:'peto',
        Posicion:'body',
        mas:30,
      },
    }
  ]
};

export default Mobs;