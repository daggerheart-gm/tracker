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

export default function App() {
  // Daggerheart character creation options
  const ancestryOptions = [
    'Clank', 'Drakona', 'Dwarf', 'Elf', 'Faerie', 'Faun', 'Firbolg', 'Fungirl',
    'Galapa', 'Giant', 'Goblin', 'Halfling', 'Human', 'Infernis', 'Katari', 'Orc', 'Ribbet', 'Simian'
  ];

  const classOptions = [
    'Bard', 'Druid', 'Guardian', 'Ranger', 'Rogue', 'Seraph', 'Sorcerer', 'Warrior', 'Wizard'
  ];

  const communityOptions = [
    'Highborne', 'Loreborne', 'Orderborne', 'Ridgeborne', 'Seaborne', 'Slyborne', 'Underborne', 'Wanderborne', 'Wildborne'
  ];

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
      experiences: []
    }
  });

  // Load data from localStorage on app initialization
  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem('daggerheart-characters');
      if (saved) {
        const data = JSON.parse(saved);
        return {
          characters: data.characters || [createNewCharacter(1)],
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