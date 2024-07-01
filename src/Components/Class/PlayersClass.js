import img1 from '../assets/Personajes/cabelleroOscuro.png'
import img2 from '../assets/Personajes/mage.jpg'
const playerClass = [
  {
    name: 'Paladin',
    description: 'Guerrero de la luz, experto en combate cuerpo a cuerpo y magias Protectoras',
    abilities: {
        ManoSacra:{
          NameHab:'Mano Sacra',
          curar:75
        },
        DefensaFerrea:{
          NameHab:'Proteccion Sagrada',
          defense:120
        },
        CorteBrutal:{
          NameHab:'Castigo Divino',
          attack:800
        }
        },
    img:img1,
    health: 150,
    mana:100,
    attack: 50,
    defense: 50
  },
    {
      name: 'Guerrero',
      description: 'Un luchador fuerte y resistente, experto en combate cuerpo a cuerpo.',
      abilities: {
          AtaquePoderoso:{
            NameHab:'Ataque Incesante',
            attack:75
          },
          DefensaFerrea:{
            NameHab:'Defensa Ferrea',
            defense:120
          },
          CorteBrutal:{
            NameHab:'Corte Brutal',
            attack:100
          }
          },
      img:img1,
      health: 150,
      mana:100,
      attack: 50,
      defense: 50
    },
    {
      name: 'Hechicero',
      description: 'Un maestro de la magia, capaz de lanzar poderosos hechizos desde la distancia.',
      abilities: {
        Boladefuego:{
          NameHab:'Bola de fuego',
          attack:75
        },
        Escudomágico:{
          NameHab:'Escudo mágico',
          defense:120
        },
        Rayoarcano:{
          NameHab:'Rayo arcano',
          attack:100
          }
        },
      img:img2,
      health: 180,
      mana:200,
      attack: 70,
      defense: 30
    },
    {
      name: 'Arquero',
      description: 'Un tirador experto, preciso y letal con su arco.',
      abilities:  {
        Flechaprecisa:{
          NameHab:'Flecha precisa',
          attack:75
        },
        Evasiónágil:{
          NameHab:'Evasión ágil',
          defense:120
        },
        Lluviadeflechas:{
          NameHab:'Lluvia de flechas',
          attack:100
          }
        },
      img:img1,
      health: 100,
      mana:100,
      attack: 60,
      defense: 40
    },
    {
      name: 'Ladrón',
      description: 'Ágil y furtivo, experto en ataques rápidos y en evadir al enemigo.',
      abilities:  {
        AtaqueSigiloso:{
          NameHab:'Ataque sigiloso',
          attack:75
        },
        Evasiónágil:{
          NameHab:'Evasión ágil',
          defense:120
        },
        GolpePreciso:{
          NameHab:'Golpe Preciso',
          attack:100
          }
        },
      img:img1,
      health: 90,
      mana:100,
      attack: 65,
      defense: 35
    }
  ];
  
  export default playerClass;