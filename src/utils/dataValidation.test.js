import { validateCharacterData, migrateCharacterData, sanitizeCharacterData } from './dataValidation';

// Test data imports
import basicCharacter from '../testData/basicCharacter.json';
import advancedCharacter from '../testData/advancedCharacter.json';
import multipleCharacters from '../testData/multipleCharacters.json';
import legacyCharacter from '../testData/legacyCharacter.json';

// Mock console to avoid test noise
const originalConsole = console;
beforeAll(() => {
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
});

describe('Character Data Validation', () => {
  
  describe('validateCharacterData', () => {
    
    test('validates basic character successfully', () => {
      const result = validateCharacterData(basicCharacter);
      
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.data).toEqual(basicCharacter);
    });

    test('validates advanced character with experiences and notes', () => {
      const result = validateCharacterData(advancedCharacter);
      
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.data).toEqual(advancedCharacter);
    });

    test('validates multiple characters', () => {
      const result = validateCharacterData(multipleCharacters);
      
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.data).toEqual(multipleCharacters);
    });

    test('rejects invalid data structure', () => {
      const invalidData = { invalid: 'structure' };
      const result = validateCharacterData(invalidData);
      
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.data).toBe(null);
    });

    test('rejects null or undefined data', () => {
      const nullResult = validateCharacterData(null);
      const undefinedResult = validateCharacterData(undefined);
      
      expect(nullResult.valid).toBe(false);
      expect(undefinedResult.valid).toBe(false);
    });

    test('validates character with empty arrays', () => {
      const emptyArraysChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          stats: {
            ...basicCharacter.characters[0].stats,
            experiences: [],
            conditions: [],
            notes: []
          }
        }]
      };
      
      const result = validateCharacterData(emptyArraysChar);
      expect(result.valid).toBe(true);
    });

    test('rejects character with invalid ancestry', () => {
      const invalidAncestryChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          info: {
            ...basicCharacter.characters[0].info,
            ancestry: 'InvalidAncestry'
          }
        }]
      };
      
      const result = validateCharacterData(invalidAncestryChar);
      expect(result.valid).toBe(false);
      expect(result.errors.some(error => error.includes('ancestry'))).toBe(true);
    });

    test('rejects character with invalid class', () => {
      const invalidClassChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          info: {
            ...basicCharacter.characters[0].info,
            class: 'InvalidClass'
          }
        }]
      };
      
      const result = validateCharacterData(invalidClassChar);
      expect(result.valid).toBe(false);
      expect(result.errors.some(error => error.includes('class'))).toBe(true);
    });

    test('rejects character with stats out of range', () => {
      const invalidStatsChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          stats: {
            ...basicCharacter.characters[0].stats,
            hope: -1, // Invalid: below minimum
            maxHope: 25, // Invalid: above maximum
            level: 15 // Invalid: above maximum
          }
        }]
      };
      
      const result = validateCharacterData(invalidStatsChar);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

  });

  describe('migrateCharacterData', () => {
    
    test('migrates legacy character data', () => {
      const migrated = migrateCharacterData(legacyCharacter);
      
      expect(migrated.version).toBe('1.0');
      expect(migrated.timestamp).toBeDefined();
      expect(migrated.characters[0].stats.maxHope).toBe(6);
      expect(migrated.characters[0].stats.notes).toEqual([]);
      expect(migrated.characters[0].stats.conditions).toEqual(['Afraid']);
    });

    test('adds missing properties without affecting existing ones', () => {
      const original = JSON.parse(JSON.stringify(basicCharacter));
      const migrated = migrateCharacterData(basicCharacter);
      
      // Should add version and timestamp
      expect(migrated.version).toBeDefined();
      expect(migrated.timestamp).toBeDefined();
      
      // Should not affect existing data
      expect(migrated.characters[0].info.name).toBe(original.characters[0].info.name);
      expect(migrated.activeCharacterId).toBe(original.activeCharacterId);
    });

    test('handles null or invalid input gracefully', () => {
      expect(migrateCharacterData(null)).toBe(null);
      expect(migrateCharacterData(undefined)).toBe(undefined);
      expect(migrateCharacterData('string')).toBe('string');
    });

  });

  describe('sanitizeCharacterData', () => {
    
    test('successfully sanitizes and validates good data', () => {
      const result = sanitizeCharacterData(basicCharacter);
      
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.data).toBeDefined();
    });

    test('sanitizes legacy data and makes it valid', () => {
      const result = sanitizeCharacterData(legacyCharacter);
      
      expect(result.valid).toBe(true);
      expect(result.data.characters[0].stats.maxHope).toBe(6);
      expect(result.data.characters[0].stats.notes).toEqual([]);
    });

    test('rejects invalid data after sanitization attempt', () => {
      const invalidData = { completely: 'wrong structure' };
      const result = sanitizeCharacterData(invalidData);
      
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.data).toBe(null);
    });

    test('handles malformed JSON gracefully', () => {
      const circular = {};
      circular.self = circular; // Creates circular reference
      
      const result = sanitizeCharacterData(circular);
      expect(result.valid).toBe(false);
      expect(result.errors.some(error => error.includes('sanitization failed'))).toBe(true);
    });

  });

  describe('Real-world data scenarios', () => {
    
    test('handles character with maximum values', () => {
      const maxChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          info: {
            ...basicCharacter.characters[0].info,
            level: 10
          },
          stats: {
            ...basicCharacter.characters[0].stats,
            hope: 20,
            maxHope: 20,
            stress: 20,
            maxStress: 20,
            hitPoints: 50,
            maxHitPoints: 50,
            armorScore: 12,
            armorSlots: 12,
            evasion: 30,
            majorThreshold: 50,
            severeThreshold: 50
          }
        }]
      };
      
      const result = validateCharacterData(maxChar);
      expect(result.valid).toBe(true);
    });

    test('handles character with complex notes', () => {
      const complexNotesChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          stats: {
            ...basicCharacter.characters[0].stats,
            notes: [
              {
                text: "Simple note",
                timestamp: "2025-01-01T12:00"
              },
              {
                text: "Multi-line note\nwith\nmultiple\nlines",
                timestamp: "2025-01-02T14:30"
              },
              {
                text: "Note with special characters: !@#$%^&*()_+-=[]{}|;:,.<>?",
                timestamp: "2025-01-03T09:15"
              }
            ]
          }
        }]
      };
      
      const result = validateCharacterData(complexNotesChar);
      expect(result.valid).toBe(true);
    });

    test('handles empty character name and info', () => {
      const emptyInfoChar = {
        ...basicCharacter,
        characters: [{
          ...basicCharacter.characters[0],
          info: {
            name: "",
            pronouns: "",
            ancestry: "",
            class: "",
            community: "",
            armor: "",
            level: 1
          }
        }]
      };
      
      const result = validateCharacterData(emptyInfoChar);
      expect(result.valid).toBe(true);
    });

  });

});

// Integration test helper function
export const runDataValidationTests = () => {
  const testFiles = [
    { name: 'Basic Character', data: basicCharacter },
    { name: 'Advanced Character', data: advancedCharacter },
    { name: 'Multiple Characters', data: multipleCharacters },
    { name: 'Legacy Character', data: legacyCharacter }
  ];

  console.log('🧪 Running Data Validation Tests...\n');

  const results = testFiles.map(({ name, data }) => {
    console.log(`Testing ${name}:`);
    
    const originalResult = validateCharacterData(data);
    console.log(`  Original validation: ${originalResult.valid ? '✅ PASS' : '❌ FAIL'}`);
    
    if (!originalResult.valid) {
      console.log(`  Errors: ${originalResult.errors.slice(0, 3).join(', ')}`);
    }

    const sanitizedResult = sanitizeCharacterData(data);
    console.log(`  Sanitized validation: ${sanitizedResult.valid ? '✅ PASS' : '❌ FAIL'}`);
    
    if (!sanitizedResult.valid) {
      console.log(`  Errors: ${sanitizedResult.errors.slice(0, 3).join(', ')}`);
    }
    
    console.log('');
    
    return {
      name,
      originalValid: originalResult.valid,
      sanitizedValid: sanitizedResult.valid,
      errors: [...(originalResult.errors || []), ...(sanitizedResult.errors || [])]
    };
  });

  const passCount = results.filter(r => r.originalValid && r.sanitizedValid).length;
  console.log(`📊 Results: ${passCount}/${results.length} test files passed validation`);
  
  return results;
};

export default {
  runDataValidationTests
};