import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Combate.css';
import Inventario from '../../Inventario/Inventario.jsx';
import EquipoComponent from '../../Equipo/Equipo.jsx';
import { useNavigate } from 'react-router-dom';

const Combate = ({ mobs, onDungeonSelect }) => {
  const selectedCharacter = useSelector((state) => state.character.selectedCharacter);
  const [playerHealth, setPlayerHealth] = useState(selectedCharacter ? selectedCharacter.health : 0);
  const [currentMobIndex, setCurrentMobIndex] = useState(0);
  const [mobHealth, setMobHealth] = useState(mobs.length > 0 ? mobs[currentMobIndex].health : 0);
  const [turn, setTurn] = useState('player');
  const [narration, setNarration] = useState('¡La batalla comienza!');
  const [combatEnded, setCombatEnded] = useState(false);
  const [isDefending, setIsDefending] = useState(false);
  const [mobDefending, setMobDefending] = useState(false);
  const [showDungeonSelectButton, setShowDungeonSelectButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPlayerHealth(selectedCharacter ? selectedCharacter.health : 0);
    setTurn('mob');
  }, [selectedCharacter]);

  useEffect(() => {
    if (turn === 'mob' && !combatEnded) {
      const timeout = setTimeout(() => {
        handleEnemyTurn();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [turn, combatEnded]);

  useEffect(() => {
    setMobHealth(mobs.length > 0 ? mobs[currentMobIndex].health : 0);
    setCombatEnded(false);
    setTurn('player');
    setNarration('¡La batalla comienza!');
    setIsDefending(false);
  }, [currentMobIndex, mobs]);

  const handleAbilityClick = (abilityName) => {
    if (turn === 'player' && !combatEnded) {
      setNarration(`Usando habilidad: ${abilityName.NameHab}`);
      if (abilityName.attack) {
        const damage = abilityName.attack;
        const newMobHealth = mobHealth - damage;
        setMobHealth(newMobHealth > 0 ? newMobHealth : 0);
      } else if (abilityName.defense) {
        console.log('Habilidad de defensa');
      } else if (abilityName.curar) {
        const newPlayerHealth = playerHealth + abilityName.curar;
        setPlayerHealth(newPlayerHealth > 0 ? newPlayerHealth : 0);
      }
      setTurn('mob');
    }
  };

  const handleAttack = () => {
    if (turn === 'player' && !combatEnded) {
      const damage = selectedCharacter.attack;
      const mobDefense = mobs.length > 0 ? mobs[currentMobIndex].defense : 0;
      if (mobDefending) {
        const newMobHealth = mobHealth - (damage - mobDefense);
        setMobHealth(newMobHealth > 0 ? newMobHealth : 0);
        setNarration(`Atacaste al enemigo y le hiciste ${damage - mobDefense} puntos de daño.`);
      } else {
        const newMobHealth = mobHealth - damage;
        setMobHealth(newMobHealth > 0 ? newMobHealth : 0);
        setNarration(`Atacaste al enemigo y le hiciste ${damage} puntos de daño.`);
      }
      setTurn('mob');
    }
  };

  const handleDefend = () => {
    if (turn === 'player' && !combatEnded) {
      setIsDefending(true);
      setNarration('Te estás defendiendo. Aumentaste tu defensa para el próximo ataque del enemigo.');
      setTurn('mob');
    }
  };

  const handleEnemyTurn = () => {
    if (turn === 'mob' && !combatEnded) {
      const mobDamage = mobs.length > 0 ? mobs[currentMobIndex].attack : 0;
      const playerDefense = selectedCharacter.defense;
      const enemyAction = Math.random() < 0.5 ? 'attack' : 'defend';
      
      if (enemyAction === 'attack') {
        if (isDefending) {
          const newPlayerHealth = playerHealth - (mobDamage - playerDefense);
          setPlayerHealth(newPlayerHealth > 0 ? newPlayerHealth : 0);
          setNarration(`El enemigo te atacó y te hizo ${mobDamage - playerDefense} puntos de daño.`);
          setIsDefending(false);
        } else {
          const newPlayerHealth = playerHealth - mobDamage;
          setPlayerHealth(newPlayerHealth > 0 ? newPlayerHealth : 0);
          setNarration(`El enemigo te atacó y te hizo ${mobDamage} puntos de daño.`);
        }
        setMobDefending(false);
      } else if (enemyAction === 'defend') {
        setMobDefending(true);
        setNarration(`El enemigo se defiende.`);
      }
  
      setTurn('player');
    }
  };

  const handleNext = () => {
    if (currentMobIndex < mobs.length - 1) {
      console.log(currentMobIndex < mobs.length - 1,'test')
      setCurrentMobIndex(currentMobIndex + 1);
    } else {
      setCombatEnded(true);
      setNarration('¡No quedan Mobs!');
      setShowDungeonSelectButton(true);
     
    }
  };

  //console.log(currentMobIndex,'test2')

  const handleRestart = () => {
    setPlayerHealth(selectedCharacter.health);
    setCurrentMobIndex(0);
    setCombatEnded(false);
    setTurn('player');
    setNarration('¡La batalla comienza!');
    setShowDungeonSelectButton(false);
  };

  useEffect(() => {
    if (playerHealth <= 0 && !combatEnded) {
      setCombatEnded(true);
      setNarration('¡DERROTA!');
    }
  }, [playerHealth, combatEnded]);

  const [drop, setDrop] = useState({});
  useEffect(() => {
    if (mobHealth <= 0 && !combatEnded) {
      setCombatEnded(true);
      setNarration('¡VICTORIA!');
      if (mobs.length > 0 ? mobs[currentMobIndex].drop.tipo !== 'empty' : 0) {
        setDrop(mobs[currentMobIndex].drop);
      } else {
        setDrop('');
      }
    }
  }, [mobHealth, combatEnded]);

  //console.log(showDungeonSelectButton)

  const handleDungeonSelect = () => {
    console.log('test')
      if (showDungeonSelectButton === true){
        console.log(showDungeonSelectButton)
        navigate('/mapa');
      }else{

      }
  }

  return (
    <div className="combate-container">
      <h3 className="narration">{narration}</h3>
      <div className="cards-container">
        <div className="card player-card">
          <img src={selectedCharacter.img} alt="" srcset="" />
          <h2>{selectedCharacter.name}</h2>
          <p>Salud: {playerHealth}</p>
          <p>Mana: {selectedCharacter.mana}</p>
          <p>Attack: {selectedCharacter.attack}</p>
          <p>Defense: {selectedCharacter.defense}</p>
          <button className='btnHabs' onClick={handleAttack} disabled={turn !== 'player' || combatEnded}>
            Atacar
          </button>
          <button className='btnHabs' onClick={handleDefend} disabled={turn !== 'player' || combatEnded}>
            Defender
          </button>

          <div className="abilities-buttons">
            {Object.keys(selectedCharacter.abilities).map((key) => (
              <button className='btnHabs' key={key} onClick={() => handleAbilityClick(selectedCharacter.abilities[key])} disabled={turn !== 'player' || combatEnded}>
                {selectedCharacter.abilities[key].NameHab}
              </button>
            ))}
          </div>
        </div>
        <div className="card mob-card">
          <h2>{mobs.length > 0 ? mobs[currentMobIndex].name : 'Enemigo'}</h2>
          <p>Salud: {mobHealth}</p>
          <p>Ataque: {mobs.length > 0 ? mobs[currentMobIndex].attack : 0}</p>
          <p>Defensa: {mobs.length > 0 ? mobs[currentMobIndex].defense : 0}</p>
        </div>
      </div>

      {narration === '¡DERROTA!' && (
        <button className="action-button" onClick={handleRestart}>Reiniciar</button>
      )}
      {narration === '¡VICTORIA!' && (
        <button className="action-button" onClick={handleNext}>Siguiente Turno</button>
      )}
     {showDungeonSelectButton && (
        <button className="action-button" onClick={handleDungeonSelect}>Seleccionar Mazmorra</button>
      )}


    <div style={{display:'flex', justifyContent:'center'}}>
          <EquipoComponent/> 
          <Inventario  drop={drop}/>
    </div>
      
    </div>
  );
};

export default Combate; 
