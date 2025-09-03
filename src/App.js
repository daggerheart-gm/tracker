import { useState, useEffect } from 'react';
import './App.css';

// Import data
import { armorDetails } from './data/armorData';
import { classOptions, classStats, classDetails } from './data/classData';
import { ancestryOptions, ancestryDetails } from './data/ancestryData';
import { communityOptions, communityDetails } from './data/communityData';
import { conditionsList } from './data/gameData';

// Heart, Shield, Zap, Brain, Eye, AlertTriangle, Plus, Minus, X, Users icons as SVG components
const Heart = ({ className, fill = "currentColor", stroke = "currentColor" }) => (
  <svg className={className} fill={fill} stroke={stroke} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Dagger = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l-1 6h2l-1-6zm0 8v12m-3-10l6 0m-6 2l6 0" />
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







  const createNewCharacter = (id) => ({
    id,
    info: {
      name: '',
      pronouns: '',
      ancestry: '',
      class: '',
      community: '',
      armor: '',
      level: 1
    },
    stats: {
      hope: 2,
      maxHope: 6,
      stress: 0,
      maxStress: 6,
      hitPoints: 5,
      maxHitPoints: 5,
      armorScore: 0,
      armorSlots: 0,
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
        const migratedCharacters = (data.characters || [createNewCharacter(1)]).map(char => {
          const { fear, ...statsWithoutFear } = char.stats;
          return {
            ...char,
            stats: {
              ...statsWithoutFear,
              conditions: char.stats.conditions || []
            }
          };
        });
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
  };

  const updateArmorInfo = (armorType) => {
    if (!armorType) {
      // Handle empty selection - set to no armor
      setCharacters(prev => prev.map(char => {
        if (char.id === activeCharacterId) {
          const classEvasion = classStats[char.info.class]?.evasion || 10;
          return {
            ...char,
            info: { ...char.info, armor: '' },
            stats: {
              ...char.stats,
              armorScore: 0,
              armorSlots: 0,
              majorThreshold: 0,
              severeThreshold: 0,
              evasion: classEvasion
            }
          };
        }
        return char;
      }));
      return;
    }
    
    const armor = armorDetails[armorType];
    if (armor) {
      setCharacters(prev => prev.map(char => {
        if (char.id === activeCharacterId) {
          // Calculate base evasion from class, then apply armor modifier
          const classEvasion = classStats[char.info.class]?.evasion || 0;
          const newEvasion = classEvasion + armor.evasionModifier;
          
          // Validate armor score doesn't exceed maximum of 12
          const finalArmorScore = Math.min(12, armor.armorScore);
          
          return {
            ...char,
            info: { ...char.info, armor: armorType },
            stats: {
              ...char.stats,
              armorScore: finalArmorScore,
              armorSlots: 0, // Reset armor slots when armor changes
              majorThreshold: armor.majorThreshold,
              severeThreshold: armor.severeThreshold,
              evasion: Math.max(0, newEvasion) // Don't allow negative evasion
            }
          };
        }
        return char;
      }));
    }
  };

  const updateStat = (statName, change) => {
    setCharacters(prev => prev.map(char => {
      if (char.id !== activeCharacterId) return char;
      
      const newValue = Math.max(0, char.stats[statName] + change);
      let finalValue = newValue;
      
      if (statName === 'hope') {
        finalValue = Math.min(char.stats.maxHope, newValue);
      } else if (statName === 'stress') {
        finalValue = Math.min(char.stats.maxStress, newValue);
      } else if (statName === 'hitPoints') {
        finalValue = Math.min(char.stats.maxHitPoints, newValue);
      } else if (statName === 'armorSlots') {
        finalValue = Math.min(char.stats.armorScore, newValue);
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


  if (!activeCharacter) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <img 
              src={process.env.PUBLIC_URL + '/logo.svg'}
              alt="Daggerheart Logo" 
              className="h-16 w-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800 flex-1 text-center">
              Daggerheart Character Tracker
            </h1>
            <div className="w-16 h-16"></div>
          </div>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Character Name"
              value={activeCharacter.info.name}
              onChange={(e) => updateCharacterInfo('name', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={activeCharacter.info.pronouns}
              onChange={(e) => updateCharacterInfo('pronouns', e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Pronouns</option>
              <option value="they/them">they/them</option>
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="xe/xir">xe/xir</option>
              <option value="ze/zir">ze/zir</option>
              <option value="other">other</option>
            </select>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <select
              value={activeCharacter.info.armor}
              onChange={(e) => updateArmorInfo(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Armor</option>
              {Object.keys(armorDetails).filter(name => name !== 'None').map(armorName => (
                <option key={armorName} value={armorName}>{armorName}</option>
              ))}
            </select>
            <select
              value={activeCharacter.info.level}
              onChange={(e) => updateCharacterInfo('level', parseInt(e.target.value))}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map(level => (
                <option key={level} value={level}>Level {level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-600">
                Character Information
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
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Armor:</span>
                <input
                  type="number"
                  value={activeCharacter.stats.armorScore}
                  onChange={(e) => setStat('armorScore', e.target.value)}
                  className="w-12 text-center border rounded px-1 py-0.5 text-sm font-bold"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">Evasion:</span>
                <input
                  type="number"
                  value={activeCharacter.stats.evasion}
                  onChange={(e) => setStat('evasion', e.target.value)}
                  className="w-12 text-center border rounded px-1 py-0.5 text-sm font-bold"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-600">Max HP:</span>
                <input
                  type="number"
                  value={activeCharacter.stats.maxHitPoints}
                  onChange={(e) => setStat('maxHitPoints', e.target.value)}
                  className="w-12 text-center border rounded px-1 py-0.5 text-sm font-bold"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-gray-600">Max Stress:</span>
                <input
                  type="number"
                  value={activeCharacter.stats.maxStress}
                  onChange={(e) => setStat('maxStress', e.target.value)}
                  className="w-12 text-center border rounded px-1 py-0.5 text-sm font-bold"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Max Hope:</span>
                <input
                  type="number"
                  value={activeCharacter.stats.maxHope}
                  onChange={(e) => setStat('maxHope', e.target.value)}
                  className="w-12 text-center border rounded px-1 py-0.5 text-sm font-bold"
                />
              </div>
            </div>
            
            {showClassInfo && (
              <div className="space-y-6">
                {!activeCharacter.info.class && !activeCharacter.info.ancestry && !activeCharacter.info.community && !activeCharacter.info.armor ? (
                  <p className="text-gray-500 text-center py-4">Please choose a class, ancestry, community, and armor</p>
                ) : (
                  <>
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
                    
                    {activeCharacter.info.community && communityDetails[activeCharacter.info.community] && (
                      <div>
                        <h3 className="text-xl font-bold text-orange-700 mb-4">{activeCharacter.info.community}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-orange-600 mb-2">Community Feature</h4>
                            <p className="text-gray-600 text-sm">{communityDetails[activeCharacter.info.community].feature}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Typical Traits</h4>
                            <p className="text-gray-600 text-sm italic">{communityDetails[activeCharacter.info.community].traits}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                            <p className="text-gray-600 text-sm">{communityDetails[activeCharacter.info.community].description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeCharacter.info.armor && armorDetails[activeCharacter.info.armor] && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-700 mb-4">{activeCharacter.info.armor}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-600 mb-2">Armor Feature</h4>
                            <p className="text-gray-600 text-sm">{armorDetails[activeCharacter.info.armor].feature}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Armor Score</h4>
                              <p className="text-gray-600 text-sm">{armorDetails[activeCharacter.info.armor].armorScore}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Damage Thresholds</h4>
                              <p className="text-gray-600 text-sm">{armorDetails[activeCharacter.info.armor].majorThreshold}/{armorDetails[activeCharacter.info.armor].severeThreshold}</p>
                            </div>
                          </div>
                          
                          {(armorDetails[activeCharacter.info.armor].evasionModifier !== 0 || armorDetails[activeCharacter.info.armor].agilityModifier !== 0) && (
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Modifiers</h4>
                              <p className="text-gray-600 text-sm">
                                {armorDetails[activeCharacter.info.armor].evasionModifier !== 0 && 
                                  `Evasion: ${armorDetails[activeCharacter.info.armor].evasionModifier >= 0 ? '+' : ''}${armorDetails[activeCharacter.info.armor].evasionModifier}`}
                                {armorDetails[activeCharacter.info.armor].evasionModifier !== 0 && armorDetails[activeCharacter.info.armor].agilityModifier !== 0 && ', '}
                                {armorDetails[activeCharacter.info.armor].agilityModifier !== 0 && 
                                  `Agility: ${armorDetails[activeCharacter.info.armor].agilityModifier >= 0 ? '+' : ''}${armorDetails[activeCharacter.info.armor].agilityModifier}`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <h3 className="font-semibold text-gray-700">Hope</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold w-16 text-center">{activeCharacter.stats.hope}/{activeCharacter.stats.maxHope}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <div className="flex gap-4 flex-wrap">
                  {Array.from({ length: activeCharacter.stats.maxHope }, (_, i) => i + 1).map(index => (
                    <div
                      key={index}
                      onClick={() => updateStat('hope', index <= activeCharacter.stats.hope ? -1 : 1)}
                      className={`w-6 h-6 cursor-pointer transition-all transform rotate-45 ${
                        index <= activeCharacter.stats.hope
                          ? 'bg-blue-500 border-blue-600'
                          : 'bg-white border-gray-300 hover:border-blue-400'
                      } border-2`}
                    />
                  ))}
                </div>
              </div>
              {activeCharacter.info.class && classDetails[activeCharacter.info.class] && (
                <button
                  onClick={() => updateStat('hope', -3)}
                  disabled={activeCharacter.stats.hope < 3}
                  className={`w-full px-3 py-2 text-xs rounded-lg font-medium transition-colors text-left ${
                    activeCharacter.stats.hope >= 3
                      ? 'bg-purple-500 text-white hover:bg-purple-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  title={classDetails[activeCharacter.info.class].hopeFeature}
                >
                  <div className="font-bold mb-1">Use Hope Feature (3 Hope)</div>
                  <div className="text-xs opacity-90">{classDetails[activeCharacter.info.class].hopeFeature}</div>
                </button>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-semibold text-gray-700">Armor</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold w-16 text-center">{activeCharacter.stats.armorSlots}/{activeCharacter.stats.armorScore}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: activeCharacter.stats.armorScore }, (_, i) => i + 1).map(index => (
                    <div
                      key={index}
                      onClick={() => updateStat('armorSlots', index <= activeCharacter.stats.armorSlots ? -1 : 1)}
                      className={`w-6 h-6 cursor-pointer transition-all ${
                        index <= activeCharacter.stats.armorSlots
                          ? 'text-gray-600'
                          : 'text-gray-300 hover:text-gray-500'
                      }`}
                    >
                      <Shield className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <h3 className="font-semibold text-gray-700">Hit Points</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold w-16 text-center">{activeCharacter.stats.hitPoints}/{activeCharacter.stats.maxHitPoints}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="flex gap-1 flex-wrap">
                  {Array.from({ length: activeCharacter.stats.maxHitPoints }, (_, i) => i + 1).map(index => (
                    <div
                      key={index}
                      onClick={() => updateStat('hitPoints', index <= activeCharacter.stats.hitPoints ? -1 : 1)}
                      className={`w-8 h-8 cursor-pointer transition-all ${
                        index <= activeCharacter.stats.hitPoints
                          ? 'text-red-500'
                          : 'text-gray-300 hover:text-red-400'
                      }`}
                    >
                      <Heart 
                        className="w-full h-full" 
                        fill="currentColor" 
                        stroke="none" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <h3 className="font-semibold text-gray-700">Stress</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold w-16 text-center">{activeCharacter.stats.stress}/{activeCharacter.stats.maxStress}</span>
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
              </div>
            </div>
          </div>
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



        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Experiences</h3>
          
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="Add new experience..."
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addExperience()}
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