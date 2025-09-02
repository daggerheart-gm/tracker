import React, { useState, useEffect } from 'react';
import './App.css';

// Heart, Shield, Zap, Brain, Eye, AlertTriangle, Plus, Minus, X, Users icons as SVG components
const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Brain = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Minus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Save = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
  </svg>
);

const Upload = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const Trash = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export default function App() {
  // Daggerheart character creation options
  const ancestryOptions = [
    'Clank', 'Drakona', 'Dwarf', 'Elf', 'Faerie', 'Faun', 'Firbolg', 'Fungril',
    'Galapa', 'Giant', 'Goblin', 'Halfling', 'Human', 'Infernis', 'Katari', 'Orc', 'Ribbet', 'Simian'
  ];

  const classOptions = [
    'Bard', 'Druid', 'Guardian', 'Ranger', 'Rogue', 'Seraph', 'Sorcerer', 'Warrior', 'Wizard'
  ];

  const communityOptions = [
    'Highborne', 'Loreborne', 'Orderborne', 'Ridgeborne', 'Seaborne', 'Slyborne', 'Underborne', 'Wanderborne', 'Wildborne'
  ];

  const conditionsList = [
    { name: 'Hidden', description: 'Out of sight from enemies, rolls against you have disadvantage' },
    { name: 'Restrained', description: 'Cannot move, but can take actions from current position' },
    { name: 'Vulnerable', description: 'All rolls targeting you have advantage' }
  ];

  const classStats = {
    'Bard': { hitPoints: 5, evasion: 10 },
    'Druid': { hitPoints: 6, evasion: 10 },
    'Guardian': { hitPoints: 7, evasion: 9 },
    'Ranger': { hitPoints: 6, evasion: 12 },
    'Rogue': { hitPoints: 6, evasion: 12 },
    'Seraph': { hitPoints: 7, evasion: 9 },
    'Sorcerer': { hitPoints: 6, evasion: 10 },
    'Warrior': { hitPoints: 6, evasion: 11 },
    'Wizard': { hitPoints: 5, evasion: 11 }
  };

  const classDetails = {
    'Bard': {
      domains: ['Grace', 'Codex'],
      classItems: ['A romance novel', 'A letter never opened'],
      hopeFeature: 'Make a Scene - Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty.',
      classFeature: 'Rally - Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8.'
    },
    'Druid': {
      domains: ['Sage', 'Arcana'],
      classItems: ['A small bag of rocks and bones', 'A strange pendant found in the dirt'],
      hopeFeature: 'Evolution - Spend 3 Hope to transform into a Beastform without marking a Stress. When you do, choose one trait to raise by +1 until you drop out of that Beastform.',
      classFeature: 'Beastform - Mark a Stress to magically transform into a creature of your tier or lower from the Beastform list. You can drop out of this form at any time. While transformed, you can\'t use weapons or cast spells from domain cards, but you can still use other features or abilities you have access to.'
    },
    'Guardian': {
      domains: ['Valor', 'Blade'],
      classItems: ['A totem from your mentor', 'A secret key'],
      hopeFeature: 'Frontline Tank - Spend 3 Hope to clear 2 Armor Slots',
      classFeature: 'Unstoppable - Once per long rest, become Unstoppable with a special die (d4 at level 1, d6 at level 5). While Unstoppable: reduce physical damage severity, add Unstoppable Die value to damage roll, and cannot be Restrained or Vulnerable.'
    },
    'Ranger': {
      domains: ['Bone', 'Sage'],
      classItems: ['A trophy from your first kill', 'A seemingly broken compass'],
      hopeFeature: 'Hold Them Off - Spend 3 Hope when you succeed on an attack with a weapon to use that same roll against two additional adversaries within range of the attack.',
      classFeature: 'Ranger\'s Focus - Spend a Hope and make an attack against a target. On a success, deal your attack\'s normal damage and temporarily make the attack\'s target your Focus. Provides additional benefits when focusing on a target, such as knowing their direction, forcing them to mark Stress when damaged, and allowing a reroll on failed attacks.'
    },
    'Rogue': {
      domains: ['Midnight', 'Grace'],
      classItems: ['A set of forgery tools', 'A grappling hook'],
      hopeFeature: 'Evasion Boost - Spend 3 Hope to gain a +2 bonus to your Evasion until the next time an attack succeeds against you.',
      classFeature: 'Cloaked & Sneak Attack - Any time you would be Hidden, you are instead Cloaked. In addition to the benefits of the Hidden condition, while Cloaked you remain unseen if you are stationary when an adversary moves to where they would normally see you. When you succeed on an attack while Cloaked or while an ally is within Melee range of your target, add a number of d6s equal to your tier to your damage roll.'
    },
    'Seraph': {
      domains: ['Splendor', 'Valor'],
      classItems: ['A bundle of offerings', 'A sigil of your god'],
      hopeFeature: 'Divine Healing - Spend 3 Hope to clear a Hit Point on an ally within Close range',
      classFeature: 'Prayer Dice - At the beginning of each session, roll a number of d4s equal to your subclass\'s Spellcast trait. You can spend any number of Prayer Dice to aid yourself or an ally within Far range.'
    },
    'Sorcerer': {
      domains: ['Arcana', 'Midnight'],
      classItems: ['A whispering orb', 'A family heirloom'],
      hopeFeature: 'Magical Reroll - Spend 3 Hope to reroll any number of your damage dice on an attack that deals magic damage.',
      classFeature: 'Arcane Abilities - Arcane Sense: sense magical people and objects within Close range. Minor Illusion: create minor visual illusions. Channel Raw Power: Once per long rest, place a domain card from your loadout into your vault and choose to either gain Hope equal to the card\'s level or enhance a spell\'s damage roll by twice the card\'s level.'
    },
    'Warrior': {
      domains: ['Blade', 'Bone'],
      classItems: ['The drawing of a lover', 'A sharpening stone'],
      hopeFeature: 'Combat Focus - Spend 3 Hope to gain a +1 bonus to your attack rolls until your next rest',
      classFeature: 'Combat Mastery - Attack of Opportunity: React when enemies try to leave melee range. Combat Training: Ignore burden when equipping weapons and gain damage bonus equal to level when dealing physical damage.'
    },
    'Wizard': {
      domains: ['Codex', 'Splendor'],
      classItems: ['A book you\'re trying to translate', 'A tiny, harmless elemental pet'],
      hopeFeature: 'Magical Interference - Spend 3 Hope to force an adversary within Far range to reroll an attack or damage roll',
      classFeature: 'Magical Expertise - Prestidigitation: Perform harmless, subtle magical effects at will. Strange Patterns: Choose a number between 1 and 12. When you roll that number on a Duality Die, gain a Hope or clear a Stress.'
    }
  };

  const ancestryDetails = {
    'Clank': {
      feature1: 'Purposeful Design - Choose one Experience that best aligns with your purpose. Gain a permanent +1 bonus to that Experience.',
      feature2: 'Efficient - During a short rest, can choose a long rest move instead.'
    },
    'Drakona': {
      feature1: 'Scales - When you would take Severe damage, you can mark a Stress to mark 1 fewer Hit Points.',
      feature2: 'Elemental Breath - Choose an element for your breath, use this breath against a target or group of targets within Very Close range, treating it as an Instinct weapon that deals d8 magic damage using your Proficiency.'
    },
    'Dwarf': {
      feature1: 'Thick Skin - When taking Minor damage, can mark 2 Stress instead of marking a Hit Point.',
      feature2: 'Increased Fortitude - Can spend 3 Hope to halve incoming physical damage.'
    },
    'Elf': {
      feature1: 'Quick Reactions - Can mark Stress to gain advantage on reaction rolls.',
      feature2: 'Celestial Trance - During rest, can choose an additional downtime move.'
    },
    'Faerie': {
      feature1: 'Luckbender - Once per session, after you or a willing ally within Close range makes an action roll, you can spend 3 Hope to reroll the Duality Dice.',
      feature2: 'Wings - You can fly. While flying, you can mark a Stress after an adversary makes an attack against you to gain a +2 bonus to your Evasion against that attack.'
    },
    'Faun': {
      feature1: 'Caprine Leap - You can leap anywhere within Close range as though you were using normal movement.',
      feature2: 'Kick - When you succeed on an attack, you can mark a Stress to kick yourself off them, dealing an extra 2d6 damage and knocking back either yourself or the target.'
    },
    'Firbolg': {
      feature1: 'Charge - When you succeed on an Agility Roll to move from Far or Very Far range into Melee range with one or more targets, you can mark a Stress to deal 1d12 physical damage to all targets within Melee range.',
      feature2: 'Unshakable - When you would mark a Stress, roll a d6. On a result of 6, don\'t mark it.'
    },
    'Fungril': {
      feature1: 'Fungril Network - Make an Instinct Roll (12) to use your mycelial array to speak with others of your ancestry. On a success, you can communicate across any distance.',
      feature2: 'Death Connection - While touching a corpse that died recently, you can mark a Stress to extract one memory from the corpse related to a specific emotion or sensation of your choice.'
    },
    'Galapa': {
      feature1: 'Shell - Gain a bonus to your damage thresholds equal to your Proficiency.',
      feature2: 'Retract - Mark a Stress to retract into your shell. While in your shell, you have resistance to physical damage, you have disadvantage on action rolls, and you can\'t move.'
    },
    'Giant': {
      feature1: 'Endurance - Gain an additional Hit Point slot at character creation.',
      feature2: 'Reach - Treat any weapon, ability, spell, or other feature that has a Melee range as though it has a Very Close range instead.'
    },
    'Goblin': {
      feature1: 'Surefooted - You ignore disadvantage on Agility Rolls.',
      feature2: 'Danger Sense - Once per rest, mark a Stress to force an adversary to reroll an attack against you or an ally within Very Close range.'
    },
    'Halfling': {
      feature1: 'Luckbringer - At the start of each session, everyone in your party gains a Hope.',
      feature2: 'Internal Compass - When you roll a 1 on your Hope Die, you can reroll it.'
    },
    'Human': {
      feature1: 'High Stamina - Gain an additional Stress slot at character creation.',
      feature2: 'Adaptability - When you fail a roll that utilized one of your Experiences, you can mark a Stress to reroll.'
    },
    'Infernis': {
      feature1: 'Fearless - When you roll with Fear, you can mark 2 Stress to change it into a roll with Hope instead.',
      feature2: 'Dread Visage - You have advantage on rolls to intimidate hostile creatures.'
    },
    'Katari': {
      feature1: 'Feline Instincts - When you make an Agility Roll, you can spend 2 Hope to reroll your Hope Die.',
      feature2: 'Retracting Claws - Make an Agility Roll to scratch a target within Melee range. On a success, they become temporarily Vulnerable.'
    },
    'Orc': {
      feature1: 'Sturdy - When you have 1 Hit Point remaining, attacks against you have disadvantage.',
      feature2: 'Tusks - When you succeed on an attack against a target within Melee range, you can spend a Hope to gore the target with your tusks, dealing an extra 1d6 damage.'
    },
    'Ribbet': {
      feature1: 'Amphibious - You can breathe and move naturally underwater.',
      feature2: 'Long Tongue - You can use your long tongue to grab onto things within Close range. Mark a Stress to use your tongue as a Finesse Close weapon that deals d12 physical damage using your Proficiency.'
    },
    'Simian': {
      feature1: 'Coming Soon - Ancestry features not yet available.',
      feature2: 'Coming Soon - Ancestry features not yet available.'
    }
  };

  const createNewCharacter = (id) => ({
    id,
    info: {
      name: '',
      ancestry: '',
      class: '',
      community: '',
      level: 1
    },
    stats: {
      hope: 2,
      fear: 0,
      stress: 0,
      maxStress: 6,
      hitPoints: 20,
      maxHitPoints: 20,
      armorScore: 0,
      evasion: 10,
      majorThreshold: 11,
      severeThreshold: 16,
      experiences: [],
      conditions: []
    }
  });

  // Load data from localStorage on app initialization
  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem('daggerheart-characters');
      if (saved) {
        const data = JSON.parse(saved);
        const migratedCharacters = (data.characters || [createNewCharacter(1)]).map(char => ({
          ...char,
          stats: {
            ...char.stats,
            conditions: char.stats.conditions || []
          }
        }));
        return {
          characters: migratedCharacters,
          activeCharacterId: data.activeCharacterId || 1,
          nextId: data.nextId || 2
        };
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
    return {
      characters: [createNewCharacter(1)],
      activeCharacterId: 1,
      nextId: 2
    };
  };

  const savedData = loadFromStorage();
  const [characters, setCharacters] = useState(savedData.characters);
  const [activeCharacterId, setActiveCharacterId] = useState(savedData.activeCharacterId);
  const [nextId, setNextId] = useState(savedData.nextId);
  const [newExperience, setNewExperience] = useState('');
  const [showClassInfo, setShowClassInfo] = useState(false);

  const activeCharacter = characters.find(char => char.id === activeCharacterId);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    const dataToSave = {
      characters,
      activeCharacterId,
      nextId,
      version: '1.0',
      timestamp: new Date().toISOString()
    };
    
    try {
      localStorage.setItem('daggerheart-characters', JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [characters, activeCharacterId, nextId]);

  const addNewCharacter = () => {
    const newChar = createNewCharacter(nextId);
    setCharacters(prev => [...prev, newChar]);
    setActiveCharacterId(nextId);
    setNextId(prev => prev + 1);
  };

  const removeCharacter = (charId) => {
    if (characters.length === 1) return;
    
    setCharacters(prev => prev.filter(char => char.id !== charId));
    
    if (activeCharacterId === charId) {
      const remaining = characters.filter(char => char.id !== charId);
      setActiveCharacterId(remaining[0].id);
    }
  };

  const updateCharacterInfo = (field, value) => {
    setCharacters(prev => prev.map(char => 
      char.id === activeCharacterId 
        ? { ...char, info: { ...char.info, [field]: value } }
        : char
    ));

    if (field === 'class' && value && classStats[value]) {
      const confirmed = window.confirm('Do you want to prefill default values for this class? This will set Max Hit Points and Evasion to the class defaults.');
      
      if (confirmed) {
        const stats = classStats[value];
        setCharacters(prev => prev.map(char => 
          char.id === activeCharacterId 
            ? { 
                ...char, 
                stats: { 
                  ...char.stats, 
                  maxHitPoints: stats.hitPoints,
                  hitPoints: stats.hitPoints,
                  evasion: stats.evasion
                }
              }
            : char
        ));
      }
    }
  };

  const updateStat = (statName, change) => {
    setCharacters(prev => prev.map(char => {
      if (char.id !== activeCharacterId) return char;
      
      const newValue = Math.max(0, char.stats[statName] + change);
      let finalValue = newValue;
      
      if (statName === 'hope') {
        finalValue = Math.min(6, newValue);
      } else if (statName === 'fear') {
        finalValue = Math.min(6, newValue);
      } else if (statName === 'stress') {
        finalValue = Math.min(char.stats.maxStress, newValue);
      } else if (statName === 'hitPoints') {
        finalValue = Math.min(char.stats.maxHitPoints, newValue);
      }
      
      return {
        ...char,
        stats: { ...char.stats, [statName]: finalValue }
      };
    }));
  };

  const setStat = (statName, value) => {
    setCharacters(prev => prev.map(char => 
      char.id === activeCharacterId 
        ? { ...char, stats: { ...char.stats, [statName]: parseInt(value) || 0 } }
        : char
    ));
  };

  const addExperience = () => {
    if (newExperience.trim()) {
      setCharacters(prev => prev.map(char => 
        char.id === activeCharacterId 
          ? { ...char, stats: { ...char.stats, experiences: [...char.stats.experiences, newExperience.trim()] } }
          : char
      ));
      setNewExperience('');
    }
  };

  const removeExperience = (index) => {
    setCharacters(prev => prev.map(char => 
      char.id === activeCharacterId 
        ? { ...char, stats: { ...char.stats, experiences: char.stats.experiences.filter((_, i) => i !== index) } }
        : char
    ));
  };

  const toggleCondition = (conditionName) => {
    setCharacters(prev => prev.map(char => {
      if (char.id !== activeCharacterId) return char;
      
      const hasCondition = char.stats.conditions.includes(conditionName);
      const newConditions = hasCondition
        ? char.stats.conditions.filter(c => c !== conditionName)
        : [...char.stats.conditions, conditionName];
      
      return {
        ...char,
        stats: { ...char.stats, conditions: newConditions }
      };
    }));
  };

  const getCharacterDisplayName = (character) => {
    return character.info.name || `Character ${character.id}`;
  };

  const saveData = () => {
    const data = {
      characters,
      activeCharacterId,
      nextId,
      version: '1.0',
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `daggerheart-characters-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        if (data.characters && Array.isArray(data.characters)) {
          setCharacters(data.characters);
          setActiveCharacterId(data.activeCharacterId || data.characters[0]?.id || 1);
          setNextId(data.nextId || Math.max(...data.characters.map(c => c.id)) + 1);
        } else {
          alert('Invalid file format. Please select a valid Daggerheart character file.');
        }
      } catch (error) {
        alert('Error loading file. Please make sure it\'s a valid JSON file.');
      }
    };
    reader.readAsText(file);
    
    event.target.value = '';
  };

  const resetAllData = () => {
    const confirmed = window.confirm('Are you sure you want to reset the tracker? This will delete all character data and cannot be undone.');
    
    if (confirmed) {
      localStorage.removeItem('daggerheart-characters');
      
      const newCharacter = createNewCharacter(1);
      setCharacters([newCharacter]);
      setActiveCharacterId(1);
      setNextId(2);
      setNewExperience('');
    }
  };

  const StatCard = ({ title, value, maxValue, icon: Icon, color, onIncrease, onDecrease, onDirectChange }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${color}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5" />
          <h3 className="font-semibold text-gray-700">{title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={onDecrease}
            className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          {onDirectChange ? (
            <input 
              type="number" 
              value={value}
              onChange={(e) => onDirectChange(parseInt(e.target.value) || 0)}
              className="w-16 text-center border rounded px-2 py-1"
            />
          ) : (
            <span className="text-xl font-bold w-16 text-center">
              {value}{maxValue ? `/${maxValue}` : ''}
            </span>
          )}
          <button 
            onClick={onIncrease}
            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {maxValue && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              title === 'Hope' ? 'bg-blue-500' :
              title === 'Fear' ? 'bg-red-500' :
              title === 'Hit Points' ? 'bg-green-500' : 'bg-gray-500'
            }`}
            style={{ width: `${(value / maxValue) * 100}%` }}
          />
        </div>
      )}
    </div>
  );

  if (!activeCharacter) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center space-x-2">
            <Users className="w-8 h-8" />
            <span>Daggerheart Character Tracker</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-6 border-b">
            {characters.map(char => (
              <div key={char.id} className="flex items-center">
                <button
                  onClick={() => setActiveCharacterId(char.id)}
                  className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                    char.id === activeCharacterId
                      ? 'bg-purple-500 text-white border-b-2 border-purple-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getCharacterDisplayName(char)}
                </button>
                {characters.length > 1 && (
                  <button
                    onClick={() => removeCharacter(char.id)}
                    className="ml-1 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addNewCharacter}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>New Character</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Character Name"
              value={activeCharacter.info.name}
              onChange={(e) => updateCharacterInfo('name', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={activeCharacter.info.ancestry}
              onChange={(e) => updateCharacterInfo('ancestry', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Ancestry</option>
              {ancestryOptions.map(ancestry => (
                <option key={ancestry} value={ancestry}>{ancestry}</option>
              ))}
            </select>
            <select
              value={activeCharacter.info.class}
              onChange={(e) => updateCharacterInfo('class', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Class</option>
              {classOptions.map(className => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={activeCharacter.info.community}
              onChange={(e) => updateCharacterInfo('community', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Community</option>
              {communityOptions.map(community => (
                <option key={community} value={community}>{community}</option>
              ))}
            </select>
            <div className="flex items-center space-x-2">
              <label className="font-semibold text-gray-700">Level:</label>
              <input
                type="number"
                min="1"
                value={activeCharacter.info.level}
                onChange={(e) => updateCharacterInfo('level', parseInt(e.target.value) || 1)}
                className="border rounded-lg px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {((activeCharacter.info.class && classDetails[activeCharacter.info.class]) || (activeCharacter.info.ancestry && ancestryDetails[activeCharacter.info.ancestry])) && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-600">
                {showClassInfo ? 'Character Information' : 'Character Information'}
              </h2>
              <button
                onClick={() => setShowClassInfo(!showClassInfo)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showClassInfo ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>
            
            {showClassInfo && (
              <div className="space-y-6">
                {activeCharacter.info.class && classDetails[activeCharacter.info.class] && (
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-4">{activeCharacter.info.class}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 mb-2">Domains</h4>
                          <div className="flex gap-2">
                            {classDetails[activeCharacter.info.class].domains.map((domain, index) => (
                              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                {domain}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 mb-2">Class Items</h4>
                          <ul className="space-y-1">
                            {classDetails[activeCharacter.info.class].classItems.map((item, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-purple-600 mb-2">Hope Feature</h4>
                          <p className="text-gray-600 text-sm">{classDetails[activeCharacter.info.class].hopeFeature}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Class Feature</h4>
                          <p className="text-gray-600 text-sm">{classDetails[activeCharacter.info.class].classFeature}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeCharacter.info.ancestry && ancestryDetails[activeCharacter.info.ancestry] && (
                  <div>
                    <h3 className="text-xl font-bold text-green-700 mb-4">{activeCharacter.info.ancestry}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Ancestry Feature 1</h4>
                        <p className="text-gray-600 text-sm">{ancestryDetails[activeCharacter.info.ancestry].feature1}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Ancestry Feature 2</h4>
                        <p className="text-gray-600 text-sm">{ancestryDetails[activeCharacter.info.ancestry].feature2}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StatCard
            title="Hope"
            value={activeCharacter.stats.hope}
            maxValue={6}
            icon={Heart}
            color="border-blue-500"
            onIncrease={() => updateStat('hope', 1)}
            onDecrease={() => updateStat('hope', -1)}
          />
          
          <StatCard
            title="Fear"
            value={activeCharacter.stats.fear}
            maxValue={6}
            icon={AlertTriangle}
            color="border-red-500"
            onIncrease={() => updateStat('fear', 1)}
            onDecrease={() => updateStat('fear', -1)}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5" />
            <h3 className="font-semibold text-gray-700">Damage Thresholds</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Major Threshold:</span>
              <input
                type="number"
                value={activeCharacter.stats.majorThreshold}
                onChange={(e) => setStat('majorThreshold', e.target.value)}
                className="w-16 text-center border rounded px-1 py-0.5"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Severe Threshold:</span>
              <input
                type="number"
                value={activeCharacter.stats.severeThreshold}
                onChange={(e) => setStat('severeThreshold', e.target.value)}
                className="w-16 text-center border rounded px-1 py-0.5"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Max Hit Points:</span>
              <input
                type="number"
                value={activeCharacter.stats.maxHitPoints}
                onChange={(e) => setStat('maxHitPoints', e.target.value)}
                className="w-16 text-center border rounded px-1 py-0.5"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <button
              onClick={() => updateStat('hitPoints', -1)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Minor Damage (+1)
            </button>
            <button
              onClick={() => updateStat('hitPoints', -2)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Major Damage (+2)
            </button>
            <button
              onClick={() => updateStat('hitPoints', -3)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Severe Damage (+3)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <StatCard
            title="Hit Points"
            value={activeCharacter.stats.hitPoints}
            maxValue={activeCharacter.stats.maxHitPoints}
            icon={Heart}
            color="border-green-500"
            onIncrease={() => updateStat('hitPoints', 1)}
            onDecrease={() => updateStat('hitPoints', -1)}
          />
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Stress</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => updateStat('stress', -1)}
                  className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-bold w-16 text-center">{activeCharacter.stats.stress}/{activeCharacter.stats.maxStress}</span>
                <button 
                  onClick={() => updateStat('stress', 1)}
                  className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: activeCharacter.stats.maxStress }, (_, i) => i + 1).map(index => (
                  <div
                    key={index}
                    onClick={() => updateStat('stress', index <= activeCharacter.stats.stress ? -1 : 1)}
                    className={`w-8 h-8 border-2 rounded cursor-pointer transition-all ${
                      index <= activeCharacter.stats.stress
                        ? 'bg-yellow-500 border-yellow-600'
                        : 'bg-white border-gray-300 hover:border-yellow-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setStat('maxStress', activeCharacter.stats.maxStress + 1)}
                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors ml-2"
                title="Add stress marker"
              >
                <Plus className="w-4 h-4" />
              </button>
              {activeCharacter.stats.maxStress > 6 && (
                <button
                  onClick={() => setStat('maxStress', Math.max(6, activeCharacter.stats.maxStress - 1))}
                  className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  title="Remove stress marker"
                >
                  <Minus className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5" />
              <h3 className="font-semibold text-gray-700">Armor Score</h3>
            </div>
            <input
              type="number"
              value={activeCharacter.stats.armorScore}
              onChange={(e) => setStat('armorScore', e.target.value)}
              className="w-full text-center border rounded px-2 py-1 text-xl font-bold"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-5 h-5" />
              <h3 className="font-semibold text-gray-700">Evasion</h3>
            </div>
            <input
              type="number"
              value={activeCharacter.stats.evasion}
              onChange={(e) => setStat('evasion', e.target.value)}
              className="w-full text-center border rounded px-2 py-1 text-xl font-bold"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Experiences</h3>
          
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="Add new experience..."
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addExperience()}
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={addExperience}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Add
            </button>
          </div>
          
          <div className="space-y-2">
            {activeCharacter.stats.experiences.map((experience, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span>{experience}</span>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
            {activeCharacter.stats.experiences.length === 0 && (
              <p className="text-gray-500 text-center py-4">No experiences yet. Add some as you play!</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Conditions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditionsList.map((condition) => {
              const isActive = activeCharacter.stats.conditions.includes(condition.name);
              return (
                <div key={condition.name} className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id={`condition-${condition.name}`}
                    checked={isActive}
                    onChange={() => toggleCondition(condition.name)}
                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`condition-${condition.name}`} className="flex-1 cursor-pointer">
                    <div className={`font-medium ${isActive ? 'text-purple-700' : 'text-gray-700'}`}>
                      {condition.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {condition.description}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          
          {activeCharacter.stats.conditions.length > 0 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm font-medium text-yellow-800 mb-1">Active Conditions:</div>
              <div className="text-sm text-yellow-700">
                {activeCharacter.stats.conditions.join(', ')}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mt-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={saveData}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Export Data</span>
            </button>
            <button
              onClick={() => document.getElementById('loadFile').click()}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Import Data</span>
            </button>
            <button
              onClick={resetAllData}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
            >
              <Trash className="w-5 h-5" />
              <span>Reset Tracker</span>
            </button>
            <input
              id="loadFile"
              type="file"
              accept=".json"
              onChange={loadData}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}