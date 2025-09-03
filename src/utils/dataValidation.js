import characterSchema from '../schemas/characterSchema.json';

// Simple JSON schema validator (basic implementation)
class SchemaValidator {
  constructor(schema) {
    this.schema = schema;
  }

  validate(data) {
    const errors = [];
    this.validateObject(data, this.schema, '', errors);
    return {
      valid: errors.length === 0,
      errors
    };
  }

  validateObject(obj, schema, path, errors) {
    if (schema.type === 'object') {
      if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        errors.push(`${path}: Expected object, got ${typeof obj}`);
        return;
      }

      // Check required properties
      if (schema.required) {
        for (const prop of schema.required) {
          if (!(prop in obj)) {
            errors.push(`${path}.${prop}: Required property missing`);
          }
        }
      }

      // Validate properties
      if (schema.properties) {
        for (const [prop, propSchema] of Object.entries(schema.properties)) {
          if (prop in obj) {
            this.validateValue(obj[prop], propSchema, `${path}.${prop}`, errors);
          }
        }
      }

      // Check for additional properties if not allowed
      if (schema.additionalProperties === false) {
        const allowedProps = Object.keys(schema.properties || {});
        for (const prop of Object.keys(obj)) {
          if (!allowedProps.includes(prop)) {
            errors.push(`${path}.${prop}: Additional property not allowed`);
          }
        }
      }
    }
  }

  validateValue(value, schema, path, errors) {
    // Handle $ref
    if (schema.$ref) {
      const refPath = schema.$ref.replace('#/definitions/', '');
      const refSchema = this.schema.definitions[refPath];
      if (refSchema) {
        this.validateObject(value, refSchema, path, errors);
        return;
      }
    }

    // Type validation
    if (schema.type) {
      if (schema.type === 'array') {
        if (!Array.isArray(value)) {
          errors.push(`${path}: Expected array, got ${typeof value}`);
          return;
        }
        
        // Validate array items
        if (schema.items) {
          value.forEach((item, index) => {
            this.validateValue(item, schema.items, `${path}[${index}]`, errors);
          });
        }

        // Check minItems
        if (schema.minItems && value.length < schema.minItems) {
          errors.push(`${path}: Array must have at least ${schema.minItems} items`);
        }
        
      } else if (schema.type === 'object') {
        this.validateObject(value, schema, path, errors);
        
      } else if (schema.type === 'string') {
        if (typeof value !== 'string') {
          errors.push(`${path}: Expected string, got ${typeof value}`);
          return;
        }
        
        // Check enum
        if (schema.enum && !schema.enum.includes(value)) {
          errors.push(`${path}: Value "${value}" not in allowed values: ${schema.enum.join(', ')}`);
        }
        
        // Check pattern
        if (schema.pattern) {
          const regex = new RegExp(schema.pattern);
          if (!regex.test(value)) {
            errors.push(`${path}: Value "${value}" does not match pattern ${schema.pattern}`);
          }
        }
        
        // Check minLength
        if (schema.minLength && value.length < schema.minLength) {
          errors.push(`${path}: String must be at least ${schema.minLength} characters`);
        }
        
      } else if (schema.type === 'number') {
        if (typeof value !== 'number') {
          errors.push(`${path}: Expected number, got ${typeof value}`);
          return;
        }
        
        // Check minimum
        if (schema.minimum !== undefined && value < schema.minimum) {
          errors.push(`${path}: Value ${value} is below minimum ${schema.minimum}`);
        }
        
        // Check maximum
        if (schema.maximum !== undefined && value > schema.maximum) {
          errors.push(`${path}: Value ${value} is above maximum ${schema.maximum}`);
        }
      }
    }
  }
}

// Create validator instance
const validator = new SchemaValidator(characterSchema);

// Main validation function
export const validateCharacterData = (data) => {
  try {
    // Basic JSON validation
    if (typeof data !== 'object' || data === null) {
      return {
        valid: false,
        errors: ['Data must be an object'],
        data: null
      };
    }

    // Schema validation
    const result = validator.validate(data);
    
    if (!result.valid) {
      return {
        valid: false,
        errors: result.errors,
        data: null
      };
    }

    return {
      valid: true,
      errors: [],
      data: data
    };
    
  } catch (error) {
    return {
      valid: false,
      errors: [`Validation error: ${error.message}`],
      data: null
    };
  }
};

// Migration function to update legacy data
export const migrateCharacterData = (data) => {
  if (!data || typeof data !== 'object') {
    return data;
  }

  // Migrate characters array
  if (data.characters && Array.isArray(data.characters)) {
    data.characters = data.characters.map(char => migrateCharacter(char));
  }

  // Add missing top-level properties
  if (!data.version) {
    data.version = '1.0';
  }
  
  if (!data.timestamp) {
    data.timestamp = new Date().toISOString();
  }

  return data;
};

// Migrate individual character
export const migrateCharacter = (char) => {
  if (!char || typeof char !== 'object') {
    return char;
  }

  // Migrate stats
  if (char.stats) {
    // Add maxHope if missing
    if (char.stats.maxHope === undefined) {
      char.stats.maxHope = 6;
    }

    // Add notes array if missing
    if (!char.stats.notes) {
      char.stats.notes = [];
    }

    // Add conditions array if missing  
    if (!char.stats.conditions) {
      char.stats.conditions = [];
    }

    // Remove legacy fear property
    if ('fear' in char.stats) {
      delete char.stats.fear;
    }
  }

  return char;
};

// Data sanitization function
export const sanitizeCharacterData = (data) => {
  try {
    // Deep clone to avoid mutations
    const sanitized = JSON.parse(JSON.stringify(data));
    
    // Migrate legacy data
    const migrated = migrateCharacterData(sanitized);
    
    // Validate migrated data
    const validation = validateCharacterData(migrated);
    
    return validation;
    
  } catch (error) {
    return {
      valid: false,
      errors: [`Data sanitization failed: ${error.message}`],
      data: null
    };
  }
};

export default {
  validateCharacterData,
  migrateCharacterData,
  migrateCharacter,
  sanitizeCharacterData
};