import React,  { useState, useEffect } from 'react';
import Mobs from '../../../Class/Mobs'
import Combate from '../../../PJ/Combate/Combate';

const Dungeon2 = () => {
  const [mobselect, setMobSelect] = useState([]);
  const [startCombat, setStartCombat] = useState(false);



  useEffect(() => {
    // Cargar los mobs de Dungeon1 cuando el componente se monte
    setMobSelect(Mobs.Dungeon2);
  }, []);

  const handleStartCombat = () => {
    setStartCombat(true);
  };

  if (startCombat) {
    return <Combate mobs={mobselect} />;
  }

  //console.log(mobselect)
  
  return (
    <div className="dungeon-container">
      <div style={{marginTop:"5%"}}>
        <h1>Dungeon 1</h1>
        <p>¡Bienvenido a la Dungeon 1!</p>
        <button className="start-combat-button" onClick={handleStartCombat}>Comenzar Combate</button>

      </div>
    </div>
  );
};

export default Dungeon2;