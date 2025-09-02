export const classOptions = [
  'Bard', 'Druid', 'Guardian', 'Ranger', 'Rogue', 'Seraph', 'Sorcerer', 'Warrior', 'Wizard'
];

export const classStats = {
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

export const classDetails = {
  'Bard': {
    domains: ['Grace', 'Codex'],
    classItems: ['A romance novel', 'A letter never opened'],
    hopeFeature: 'Make a Scene - Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty.',
    classFeature: 'Rally - Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8.'
  },
  'Druid': {
    domains: ['Sage', 'Bone'],
    classItems: ['A seed from the first tree', 'A stone that whispers secrets'],
    hopeFeature: 'Wild Shape - Spend 2 Hope to take the shape of a beast until you mark a Stress or choose to revert. While in this form, you have advantage on rolls using Instinct.',
    classFeature: 'Grove - You are connected to a specific grove, forest, or natural area. Once per long rest, you can commune with this area to ask it a single question, and the GM will answer truthfully.'
  },
  'Guardian': {
    domains: ['Valor', 'Blade'],
    classItems: ['A family heirloom weapon', 'A shield bearing your family crest'],
    hopeFeature: 'Protector - Spend 2 Hope to intercept an attack made against an ally within Very Close range. You become the target instead.',
    classFeature: 'Shield Wall - When you and at least one ally are both wielding shields and adjacent to each other, you both gain +1 armor.'
  },
  'Ranger': {
    domains: ['Midnight', 'Sage'],
    classItems: ['A map of secret paths', 'A trophy from your greatest hunt'],
    hopeFeature: 'Hunter\'s Mark - Spend 1 Hope to mark a creature within Very Close range. Your attacks against them have advantage until they drop to 0 Hit Points or the scene ends.',
    classFeature: 'Favored Terrain - Choose a type of terrain. When you make rolls related to survival, navigation, or tracking in that terrain, you have advantage.'
  },
  'Rogue': {
    domains: ['Midnight', 'Arcana'],
    classItems: ['A set of thieves\' tools', 'A token from a past mark'],
    hopeFeature: 'Dirty Fighting - Spend 2 Hope when you make a successful weapon attack to add +3 to the damage roll.',
    classFeature: 'Sneak Attack - When you attack a creature that hasn\'t acted yet this round, or when you attack from a hidden position, add your proficiency to the damage roll.'
  },
  'Seraph': {
    domains: ['Grace', 'Valor'],
    classItems: ['A holy symbol', 'A vial of blessed water'],
    hopeFeature: 'Divine Intervention - Spend 3 Hope to ask your deity to intervene on your behalf. The GM will grant you a boon or prevent a catastrophe.',
    classFeature: 'Healing Light - You can spend an action to touch a creature and restore a number of Hit Points equal to your level + your proficiency modifier.'
  },
  'Sorcerer': {
    domains: ['Arcana', 'Codex'],
    classItems: ['A crystal focus', 'A book of half-remembered spells'],
    hopeFeature: 'Metamagic - Spend 2 Hope when you cast a spell to enhance it. You might increase its range, duration, or power.',
    classFeature: 'Wild Magic - When you roll with Fear on a Spellcast roll, roll on the Wild Magic table and apply the result in addition to your spell\'s normal effects.'
  },
  'Warrior': {
    domains: ['Valor', 'Midnight'],
    classItems: ['A weapon from your first battle', 'A banner or standard'],
    hopeFeature: 'Second Wind - Spend 2 Hope to immediately clear all your Stress.',
    classFeature: 'Combat Expertise - Choose a fighting style. You gain a specific benefit based on your choice: Archery (+2 to ranged attacks), Defense (+1 armor while wearing armor), Dueling (+2 damage with one-handed weapons), or Two-Weapon Fighting (can attack with both weapons).'
  },
  'Wizard': {
    domains: ['Arcana', 'Sage'],
    classItems: ['A spellbook', 'A component pouch'],
    hopeFeature: 'Arcane Recovery - Spend 1 Hope to regain a spell slot you have already used.',
    classFeature: 'Ritual Casting - You can cast spells with the ritual tag as rituals, taking 10 minutes longer but not expending a spell slot.'
  }
};