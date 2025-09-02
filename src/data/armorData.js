export const armorDetails = {
  'None': {
    armorScore: 0,
    majorThreshold: 0,
    severeThreshold: 0,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'No armor worn',
    tier: 0
  },
  // TIER 1
  'Gambeson Armor (Tier 1)': {
    armorScore: 3,
    majorThreshold: 5,
    severeThreshold: 11,
    evasionModifier: 1,
    agilityModifier: 0,
    feature: 'Flexible: +1 to Evasion',
    tier: 1
  },
  'Leather Armor (Tier 1)': {
    armorScore: 3,
    majorThreshold: 6,
    severeThreshold: 13,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: '—',
    tier: 1
  },
  'Chainmail Armor (Tier 1)': {
    armorScore: 4,
    majorThreshold: 7,
    severeThreshold: 15,
    evasionModifier: -1,
    agilityModifier: 0,
    feature: 'Heavy: -1 to Evasion',
    tier: 1
  },
  'Full Plate Armor (Tier 1)': {
    armorScore: 4,
    majorThreshold: 8,
    severeThreshold: 17,
    evasionModifier: -2,
    agilityModifier: -1,
    feature: 'Very Heavy: -2 to Evasion; -1 to Agility',
    tier: 1
  },
  // TIER 2
  'Improved Gambeson Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 7,
    severeThreshold: 16,
    evasionModifier: 1,
    agilityModifier: 0,
    feature: 'Flexible: +1 to Evasion',
    tier: 2
  },
  'Improved Leather Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 9,
    severeThreshold: 20,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: '—',
    tier: 2
  },
  'Improved Chainmail Armor (Tier 2)': {
    armorScore: 5,
    majorThreshold: 11,
    severeThreshold: 24,
    evasionModifier: -1,
    agilityModifier: 0,
    feature: 'Heavy: -1 to Evasion',
    tier: 2
  },
  'Improved Full Plate Armor (Tier 2)': {
    armorScore: 5,
    majorThreshold: 13,
    severeThreshold: 28,
    evasionModifier: -2,
    agilityModifier: -1,
    feature: 'Very Heavy: -2 to Evasion; -1 to Agility',
    tier: 2
  },
  'Elundrian Chain Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 9,
    severeThreshold: 21,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Warded: Reduce incoming magic damage by Armor Score',
    tier: 2
  },
  'Harrowbone Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 9,
    severeThreshold: 21,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Resilient: Potential damage reduction on last Armor Slot',
    tier: 2
  },
  'Irontree Breastplate Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 9,
    severeThreshold: 20,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Reinforced: Increase damage thresholds when last Armor Slot is marked',
    tier: 2
  },
  'Runetan Floating Armor (Tier 2)': {
    armorScore: 4,
    majorThreshold: 9,
    severeThreshold: 20,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Shifting: Mark Armor Slot to give attack disadvantage',
    tier: 2
  },
  'Tyris Soft Armor (Tier 2)': {
    armorScore: 5,
    majorThreshold: 8,
    severeThreshold: 18,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Quiet: +2 to moving silently',
    tier: 2
  },
  'Rosewild Armor (Tier 2)': {
    armorScore: 5,
    majorThreshold: 11,
    severeThreshold: 23,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Hopeful: Can mark Armor Slot instead of spending Hope',
    tier: 2
  },
  // TIER 3
  'Advanced Gambeson Armor (Tier 3)': {
    armorScore: 5,
    majorThreshold: 9,
    severeThreshold: 23,
    evasionModifier: 1,
    agilityModifier: 0,
    feature: 'Flexible: +1 to Evasion',
    tier: 3
  },
  'Advanced Leather Armor (Tier 3)': {
    armorScore: 5,
    majorThreshold: 11,
    severeThreshold: 27,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: '—',
    tier: 3
  },
  'Advanced Chainmail Armor (Tier 3)': {
    armorScore: 6,
    majorThreshold: 13,
    severeThreshold: 31,
    evasionModifier: -1,
    agilityModifier: 0,
    feature: 'Heavy: -1 to Evasion',
    tier: 3
  },
  'Advanced Full Plate Armor (Tier 3)': {
    armorScore: 6,
    majorThreshold: 15,
    severeThreshold: 35,
    evasionModifier: -2,
    agilityModifier: -1,
    feature: 'Very Heavy: -2 to Evasion; -1 to Agility',
    tier: 3
  },
  'Bellamie Fine Armor (Tier 3)': {
    armorScore: 5,
    majorThreshold: 11,
    severeThreshold: 27,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Gilded: +1 to Presence',
    tier: 3
  },
  'Dragonscale Armor (Tier 3)': {
    armorScore: 5,
    majorThreshold: 11,
    severeThreshold: 27,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Impenetrable: Once per short rest, when you would mark your last Hit Point, you can instead mark a Stress',
    tier: 3
  },
  'Spiked Plate Armor (Tier 3)': {
    armorScore: 5,
    majorThreshold: 10,
    severeThreshold: 25,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Sharp: On a successful attack against a target within Melee range, add a d4 to the damage roll',
    tier: 3
  },
  'Bladefare Armor (Tier 3)': {
    armorScore: 6,
    majorThreshold: 16,
    severeThreshold: 39,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Physical: You can\'t mark an Armor Slot to reduce magic damage',
    tier: 3
  },
  'Monett\'s Cloak (Tier 3)': {
    armorScore: 6,
    majorThreshold: 16,
    severeThreshold: 39,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Magic: You can\'t mark an Armor Slot to reduce physical damage',
    tier: 3
  },
  'Runes of Fortification (Tier 3)': {
    armorScore: 6,
    majorThreshold: 17,
    severeThreshold: 43,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Painful: Each time you mark an Armor Slot, you must mark a Stress',
    tier: 3
  },
  // TIER 4
  'Legendary Gambeson Armor (Tier 4)': {
    armorScore: 6,
    majorThreshold: 11,
    severeThreshold: 32,
    evasionModifier: 1,
    agilityModifier: 0,
    feature: 'Flexible: +1 to Evasion',
    tier: 4
  },
  'Legendary Leather Armor (Tier 4)': {
    armorScore: 6,
    majorThreshold: 13,
    severeThreshold: 36,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: '—',
    tier: 4
  },
  'Legendary Chainmail Armor (Tier 4)': {
    armorScore: 7,
    majorThreshold: 15,
    severeThreshold: 40,
    evasionModifier: -1,
    agilityModifier: 0,
    feature: 'Heavy: -1 to Evasion',
    tier: 4
  },
  'Legendary Full Plate Armor (Tier 4)': {
    armorScore: 7,
    majorThreshold: 17,
    severeThreshold: 44,
    evasionModifier: -2,
    agilityModifier: -1,
    feature: 'Very Heavy: -2 to Evasion; -1 to Agility',
    tier: 4
  },
  'Dunamis Silkchain (Tier 4)': {
    armorScore: 7,
    majorThreshold: 13,
    severeThreshold: 36,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Timeslowing: Mark an Armor Slot to roll a d4 and add its result as a bonus to your Evasion against an incoming attack',
    tier: 4
  },
  'Channeling Armor (Tier 4)': {
    armorScore: 5,
    majorThreshold: 13,
    severeThreshold: 36,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Channeling: +1 to Spellcast Rolls',
    tier: 4
  },
  'Emberwoven Armor (Tier 4)': {
    armorScore: 6,
    majorThreshold: 13,
    severeThreshold: 36,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Burning: When an adversary attacks you within Melee range, they mark a Stress',
    tier: 4
  },
  'Full Fortified Armor (Tier 4)': {
    armorScore: 4,
    majorThreshold: 15,
    severeThreshold: 40,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Fortified: When you mark an Armor Slot, you reduce the severity of an attack by two thresholds instead of one',
    tier: 4
  },
  'Veritas Opal Armor (Tier 4)': {
    armorScore: 6,
    majorThreshold: 13,
    severeThreshold: 36,
    evasionModifier: 0,
    agilityModifier: 0,
    feature: 'Truthseeking: This armor glows when another creature within Close range tells a lie',
    tier: 4
  },
  'Savior Chainmail (Tier 4)': {
    armorScore: 8,
    majorThreshold: 18,
    severeThreshold: 48,
    evasionModifier: -1,
    agilityModifier: -1,
    feature: 'Difficult: -1 to all character traits and Evasion',
    tier: 4
  }
};