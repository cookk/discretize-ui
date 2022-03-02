export type MistlockInstabilityTypes =
  | 'Adrenaline Rush'
  | 'Afflicted'
  | 'Boon Overload'
  | 'Flux Bomb'
  | 'Fractal Vindicators'
  | 'Frailty'
  | 'Hamstrung'
  | 'Last Laugh'
  | 'Mists Convergence'
  | 'No Pain, No Gain'
  | 'Outflanked'
  | 'Social Awkwardness'
  | 'Stick Together'
  | 'Sugar Rush'
  | 'Toxic Trail'
  | 'Vengeance'
  | 'We Bleed Fire'
  | 'Toxic Sickness';

const MISTLOCKINSTABILITIES: Record<MistlockInstabilityTypes, string> = {
  'Adrenaline Rush':
    "When enraged, enemies deal 150% increased damage while they're low on health. Enemies deal 20% less damage when not enraged.",
  Afflicted:
    'Outgoing resistance duration is increased by 50%. Enemies apply random conditions.',
  'Boon Overload':
    'Each boon increases incoming strike damage by 5%. Outgoing boon duration is increased by 20%.',
  'Flux Bomb':
    "You are periodically afflicted by the Anomaly's flux bombs. Flux bombs apply to both allies and enemies.",
  'Fractal Vindicators':
    'Fractal Avengers are replaced by more-powerful Fractal Vindicators.',
  Frailty: 'Players are smaller and have 30% less health, but move 25% faster.',
  Hamstrung:
    'Low health increasingly slows your movements. Endurance regenerates 33% faster.',
  'Last Laugh':
    'Enemies explode upon dying if not stunned. Stunned enemies apply protection and stability to nearby allies.',
  'Mists Convergence': 'The Fractals of the Mists are blurring together...',
  'No Pain, No Gain':
    'Enemies receive boons when hit. Stripping an enemy boon will steal their life.<br/><c=@reminder>(Cooldown: 20 seconds)</c>',
  Outflanked:
    'Foes within 300 range do 300% damage when attacking from behind, but only 75% damage when attacking head on.',
  'Social Awkwardness': 'Players will be pushed away from one another.',
  'Stick Together':
    'Take 60% increased damage when not within 300 range of an ally. Take 20% reduced damage when within 300 range of an ally.',
  'Sugar Rush':
    "Increases movement speed and attack speed by 15%. Elite and lower enemies' movement speed and attack speed increases by 35%.",
  'Toxic Trail':
    'Enemies leave a path of poison behind them. Blocking a toxic trail attack will absorb it and cleanse the condition.',
  Vengeance:
    'When enemies die, they enhance nearby foes with multiple boons; does not apply to elite foes. Strip any enemy boon to inflict them with weakness.',
  'We Bleed Fire':
    'Enemies create flaming missiles when damaged. Incoming condition damage is reduced by 20%.',
  'Toxic Sickness':
    'Team members will periodically be affected with vomit-inducing sickness.',
};
export default MISTLOCKINSTABILITIES;