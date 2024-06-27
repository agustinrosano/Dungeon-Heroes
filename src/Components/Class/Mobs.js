const Mobs = {
  Dungeon1: [
    {
      name: 'Guerrero Esqueleto ',
      // description: 'Un luchador fuerte y resistente, experto en combate cuerpo a cuerpo.',
      // abilities: ['Ataque poderoso', 'Defensa férrea', 'Corte brutal'],
      health: 150,
      attack: 50,
      defense: 50
    },
    {
      name: 'Mago Esqueleto',
      // description: 'Un maestro de la magia, capaz de lanzar poderosos hechizos desde la distancia.',
      // abilities: ['Bola de fuego', 'Escudo mágico', 'Rayo arcano'],
      health: 80,
      attack: 70,
      defense: 30
    },
    {
      name: 'Esqueleto Arquero',
      // description: 'Un tirador experto, preciso y letal con su arco.',
      // abilities: ['Flecha precisa', 'Lluvia de flechas', 'Evasión ágil'],
      health: 100,
      attack: 60,
      defense: 40
    },
    {
      name: 'Necromantico',
      // description: 'Ágil y furtivo, experto en ataques rápidos y en evadir al enemigo.',
      // abilities: ['Ataque sigiloso', 'Esquiva rápida', 'Robo'],
      health: 90,
      attack: 65,
      defense: 35
    }
  ],

  Dungeon2: [
    {
      name: 'Orco Guerrero',
      description: 'Un brutal guerrero orco, temido por su fuerza y resistencia.',
      abilities: ['Golpe devastador', 'Muro de carne', 'Grito de guerra'],
      health: 200,
      attack: 70,
      defense: 60
    },
    {
      name: 'Chamán Orco',
      description: 'Un chamán orco que maneja la magia elemental.',
      abilities: ['Llamas de fuego', 'Escudo de tierra', 'Rayo de tormenta'],
      health: 120,
      attack: 80,
      defense: 40
    },
    {
      name: 'Orco Druida',
      description: 'Una bestia enorme que vive en las cavernas, con una fuerza descomunal.',
      abilities: ['Golpe Oso', 'Regeneración', 'Lanzamiento de roca'],
      health: 250,
      attack: 90,
      defense: 50
    }
  ],
  
  Dungeon3: [
    {
      name: 'Dragón Joven',
      description: 'Un dragón joven pero aún peligroso, con aliento de fuego.',
      abilities: ['Aliento de fuego', 'Ala cortante', 'Mordida feroz'],
      health: 300,
      attack: 100,
      defense: 80
    },
    {
      name: 'Necromante',
      description: 'Un oscuro hechicero que controla a los muertos.',
      abilities: ['Invocar esqueleto', 'Toque de la muerte', 'Escudo oscuro'],
      health: 150,
      attack: 90,
      defense: 40
    },
    {
      name: 'Guardián de la Tumba',
      description: 'Un guerrero no-muerto que protege las tumbas ancestrales.',
      abilities: ['Espada maldita', 'Defensa espectral', 'Golpe de sombra'],
      health: 180,
      attack: 70,
      defense: 60
    }
  ]
};

export default Mobs;