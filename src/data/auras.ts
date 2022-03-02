export type AuraTypes =
  | 'Chaos'
  | 'Dark'
  | 'Fire'
  | 'Frost'
  | 'Light'
  | 'Magnetic'
  | 'Shocking';

const AURAS: Record<AuraTypes, string> = {
  Chaos:
    'Give yourself random boons and your foe random conditions whenever you are struck.',
  Dark: 'Surrounded by a dark aura that reduces incoming condition damage and causes torment each time you are struck (1-second cooldown per attacker).',
  Fire: 'Enveloped in a fiery shield that burns foes, grants might each time you are struck (1-second cooldown per attacker).',
  Frost:
    'Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.',
  Light:
    'When struck, you gain resolution. Incoming condition damage is reduced by 10%. (Cooldown 1s)',
  Magnetic: 'Reflect projectiles with magnetic energy.',
  Shocking:
    'Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).',
};
export default AURAS;