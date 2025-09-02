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
    classItems: ['A romance novel or a letter never opened'],
    hopeFeature: 'Make a Scene: Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty.',
    classFeature: 'Rally: Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At the end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8.'
  },
  'Druid': {
    domains: ['Sage', 'Arcana'],
    classItems: ['A small bag of rocks and bones or a strange pendant found in the dirt'],
    hopeFeature: 'Evolution: Spend 3 Hope to transform into a Beastform without marking a Stress. When you do, choose one trait to raise by +1 until you drop out of that Beastform.',
    classFeature: 'Beastform: Mark a Stress to magically transform into a creature of your tier or lower from the Beastform list. You can drop out of this form at any time. While transformed, you can\'t use weapons or cast spells from domain cards, but you can still use other features or abilities you have access to. Wildtouch: You can perform harmless, subtle effects that involve nature—such as causing a flower to rapidly grow, summoning a slight gust of wind, or starting a campfire—at will.'
  },
  'Guardian': {
    domains: ['Valor', 'Blade'],
    classItems: ['A totem from your mentor or a secret key'],
    hopeFeature: 'Frontline Tank: Spend 3 Hope to clear 2 Armor Slots.',
    classFeature: 'Unstoppable: Once per long rest, you can become Unstoppable. You gain an Unstoppable Die. At level 1, your Unstoppable Die is a d4. Place it on your character sheet in the space provided, starting with the 1 value facing up. After you make a damage roll that deals 1 or more Hit Points to a target, increase the Unstoppable Die value by one. While Unstoppable, you reduce the severity of physical damage by one threshold, add the current value of the Unstoppable Die to your damage roll, and can\'t be Restrained or Vulnerable.'
  },
  'Ranger': {
    domains: ['Bone', 'Sage'],
    classItems: ['A trophy from your first kill or a seemingly broken compass'],
    hopeFeature: 'Hold Them Off: Spend 3 Hope when you succeed on an attack with a weapon to use that same roll against two additional adversaries within range of the attack.',
    classFeature: 'Ranger\'s Focus: Spend a Hope and make an attack against a target. On a success, deal your attack\'s normal damage and temporarily make the attack\'s target your Focus. Until this feature ends or you make a different creature your Focus, you gain benefits against your Focus: you know precisely what direction they are in, when you deal damage to them they must mark a Stress, and when you fail an attack against them you can end your Ranger\'s Focus feature to reroll your Duality Dice.'
  },
  'Rogue': {
    domains: ['Midnight', 'Grace'],
    classItems: ['A set of forgery tools or a grappling hook'],
    hopeFeature: 'Rogue\'s Dodge: Spend 3 Hope to gain a +2 bonus to your Evasion until the next time an attack succeeds against you. Otherwise, this bonus lasts until your next rest.',
    classFeature: 'Cloaked: Any time you would be Hidden, you are instead Cloaked. In addition to the benefits of the Hidden condition, while Cloaked you remain unseen if you are stationary when an adversary moves to where they would normally see you. After you make an attack or end a move within line of sight of an adversary, you are no longer Cloaked. Sneak Attack: When you succeed on an attack while Cloaked or while an ally is within Melee range of your target, add a number of d6s equal to your tier to your damage roll.'
  },
  'Seraph': {
    domains: ['Splendor', 'Valor'],
    classItems: ['A bundle of offerings or a sigil of your god'],
    hopeFeature: 'Life Support: Spend 3 Hope to clear a Hit Point on an ally within Close range.',
    classFeature: 'Prayer Dice: At the beginning of each session, roll a number of d4s equal to your subclass\'s Spellcast trait and place them on your character sheet in the space provided. These are your Prayer Dice. You can spend any number of Prayer Dice to aid yourself or an ally within Far range. You can use a spent die\'s value to reduce incoming damage, add to a roll\'s result after the roll is made, or gain Hope equal to the result. At the end of each session, clear all unspent Prayer Dice.'
  },
  'Sorcerer': {
    domains: ['Arcana', 'Midnight'],
    classItems: ['A whispering orb or a family heirloom'],
    hopeFeature: 'Volatile Magic: Spend 3 Hope to reroll any number of your damage dice on an attack that deals magic damage.',
    classFeature: 'Arcane Sense: You can sense the presence of magical people and objects within Close range. Minor Illusion: Make a Spellcast Roll (10). On a success, you create a minor visual illusion no larger than yourself within Close range. This illusion is convincing to anyone at Close range or farther. Channel Raw Power: Once per long rest, you can place a domain card from your loadout into your vault and choose to either gain Hope equal to the level of the card or enhance a spell that deals damage, gaining a bonus to your damage roll equal to twice the level of the card.'
  },
  'Warrior': {
    domains: ['Blade', 'Bone'],
    classItems: ['The drawing of a lover or a sharpening stone'],
    hopeFeature: 'No Mercy: Spend 3 Hope to gain a +1 bonus to your attack rolls until your next rest.',
    classFeature: 'Attack of Opportunity: If an adversary within Melee range attempts to leave that range, make a reaction roll using a trait of your choice against their Difficulty. Choose one effect on a success, or two if you critically succeed: They can\'t move from where they are, you deal damage to them equal to your primary weapon\'s damage, or you move with them. Combat Training: You ignore burden when equipping weapons. When you deal physical damage, you gain a bonus to your damage roll equal to your level.'
  },
  'Wizard': {
    domains: ['Codex', 'Splendor'],
    classItems: ['A book you\'re trying to translate or a tiny, harmless elemental pet'],
    hopeFeature: 'Not This Time: Spend 3 Hope to force an adversary within Far range to reroll an attack or damage roll.',
    classFeature: 'Prestidigitation: You can perform harmless, subtle magical effects at will. For example, you can change an object\'s color, create a smell, light a candle, cause a tiny object to float, illuminate a room, or repair a small object. Strange Patterns: Choose a number between 1 and 12. When you roll that number on a Duality Die, gain a Hope or clear a Stress. You can change this number when you take a long rest.'
  }
};